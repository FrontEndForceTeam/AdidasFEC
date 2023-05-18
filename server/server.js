//EXPRESS SERVER
import express from "express";
import dotenv from "dotenv";
import pg from "pg";
import cors from "cors";

const { Client } = pg;

const app = express();
app.use(express.static("public"));

dotenv.config(); //<-- has to be before 'process.env' is called
const port = process.env.apiPort || 3000;
const url = process.env.apiURL || "127.0.0.1";

const client = new Client(process.env.connectionString);
client.connect();

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("/imagecarousel/:id", async (req, res) => {
  try {
    let response = await client.query(
      `SELECT * FROM image WHERE product_id=$1
      AND element='you may also like'
      OR element='others also bought'
      OR element='recently viewed items';`,
      [req.params.id]
    );
    res.status(200).send(response.rows);
  } catch (error) {
    console.log(error);
    res.status(400).send("something went wrong (carousel)");
  }
});

app.get("/gallery/:id", async (req, res) => {
  try {
    let response = await client.query(
      `
    SELECT * FROM image WHERE product_id=$1
    AND element='gallery';
    `,
      [req.params.id]
    );
    res.status(200).send(response.rows);
  } catch (error) {
    console.log(error);
    res.status(400).send("something went wrong (gallery)");
  }
});

app.get("/productinfo/:id", async (req, res) => {
  try {
    let response = await client.query(
      `
        SELECT review.*, image.image_url, product.rating, product.details, 
        product.description, product.description_title, product.description_image
        FROM review
        JOIN image ON image.product_id=$1 AND element='description'
        JOIN product ON product.id=$1
        WHERE review.product_id=$1`,
      [req.params.id]
    );
    res.status(200).send(response.rows);
  } catch (error) {
    console.log(error);
    res.status(400).send("something went wrong (reviews)");
  }
});

app.get("/sidebar/:id", async (req, res) => {
  try {
    let response = await client.query(
      `
    SELECT 
    product.rating, product.price, product.discounted_price,
    size.size, size.stock
    FROM product
    JOIN size ON size.product_id=$1
    WHERE product.id=$1`,
      [req.params.id]
    );
    res.status(200).send(response.rows);
  } catch (error) {
    console.log(error);
    res.status(400).send("something went wrong (sidebar)");
  }
});

app.listen(port, url, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Server started on port ${port}`);
  }
});
