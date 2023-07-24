package main

import (
	"database/sql"
	// "encoding/json"
	"fmt"
	// "io/ioutil"
	"log"

	"github.com/gofiber/fiber/v2"
	_ "github.com/lib/pq"
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

const (
	host     = "localhost"
	port     = 5432
	user     = "postgres"
	password = "rome"
	dbname   = "postgres"
)

func main() {

	// Read the JSON data from the file
	// data, err := ioutil.ReadFile("productData.json")
	// if err != nil {
	// 	log.Fatal("Error reading productData.json:", err)
	// }

	// Unmarshal the JSON data into a slice of Skill structs
	// var skills []Skill
	// if err := json.Unmarshal(data, &skills); err != nil {
	// 	log.Fatal("Error unmarshaling JSON:", err)
	// }

	// Connect to the PostgreSQL database
	connStr := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", host, port, user, password, dbname)
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		log.Fatal("Error connecting to the database:", err)
	}
	defer db.Close()

	// Insert each Skill into the database
	// for _, skill := range skills {
	// 	_, err := db.Exec("INSERT INTO skills (id, name, short_description, long_description, price, rating, download_time, image) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
	// 		skill.ID, skill.Name, skill.ShortDesc, skill.LongDesc, skill.Price, skill.Rating, skill.DownloadTime, skill.Image)
	// 	if err != nil {
	// 		log.Println("Error inserting data:", err)
	// 	}
	// }

	// log.Println("Data inserted successfully!")

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
		// Query the data from the database
		rows, err := db.Query("SELECT id, name, short_description, long_description, price, rating, download_time, image FROM skills")
		if err != nil {
			return c.Status(fiber.StatusInternalServerError).SendString("Error fetching data from the database")
		}
		defer rows.Close()

		// Create a slice to store the products fetched from the database
		var dbSkills []Skill

		// Iterate through the rows and populate the dbSkills slice
		for rows.Next() {
			var skill Skill
			if err := rows.Scan(&skill.ID, &skill.Name, &skill.ShortDesc, &skill.LongDesc, &skill.Price, &skill.Rating, &skill.DownloadTime, &skill.Image); err != nil {
				return c.Status(fiber.StatusInternalServerError).SendString("Error scanning data from the database")
			}
			dbSkills = append(dbSkills, skill)
		}

		// Return the products as a JSON response
		return c.JSON(dbSkills)
	})

	app.Listen(":3000")
}
