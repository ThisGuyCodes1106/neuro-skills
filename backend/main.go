package main

import (
	"github.com/gofiber/fiber/v2"
)

var stefan string = "Sexy"

func main() {
	app := fiber.New()

	// CORS middleware
	app.Use(func(c *fiber.Ctx) error {
		c.Response().Header.Set("Access-Control-Allow-Origin", "http://localhost:5173") // Replace with your React frontend's origin
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

	app.Get("/test", func(c *fiber.Ctx) error {
		return c.SendString(stefan) // Return the value of the stefan variable
	})

	app.Listen(":3000")
}
