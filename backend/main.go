package main

import (
	"encoding/json"
	"io/ioutil"
	"log"

	"github.com/gofiber/fiber/v2"
)

type Skill struct {
	ID           int     `json:"id"`
	Name         string  `json:"name"`
	ShortDesc    string  `json:"shortDescription"`
	LongDesc     string  `json:"longDescription"`
	Price        float64 `json:"price"`
	Rating       float64 `json:"rating"`
	DownloadTime string  `json:"downloadTime"`
	Image        string  `json:"image"`
}

func main() {

	// Read the JSON data from the file
	data, err := ioutil.ReadFile("productData.json")
	if err != nil {
		log.Fatal("Error reading productData.json:", err)
	}

	// Unmarshal the JSON data into a slice of Course structs
	var skills []Skill
	if err := json.Unmarshal(data, &skills); err != nil {
		log.Fatal("Error unmarshaling JSON:", err)
	}

	app := fiber.New()

	// CORS middleware, to allow all origins
	app.Use(func(c *fiber.Ctx) error {
		c.Response().Header.Set("Access-Control-Allow-Origin", "http://localhost:5173")
		c.Response().Header.Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		c.Response().Header.Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
		if c.Method() == "OPTIONS" {
			return c.SendStatus(fiber.StatusOK)
		}
		return c.Next()
	})

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello, World!")
	})

	app.Get("/api/products", func(c *fiber.Ctx) error {
		return c.JSON(skills)
	})

	app.Listen(":3000")
}
