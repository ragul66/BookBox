const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db.js");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcrypt");

app.use(cors());
app.use(express.json());

const id = process.env.ID;
const secretKey = process.env.SECRET_KEY;

// Endpoint to generate and return a JSON Web Token (JWT)
app.get("/token", async (req, res) => {
  // Creating a JWT using the `jwt.sign()` method from a user ID, secret key, and expiration time
  // Replace `id` and `secretKey` with actual user ID and secret key respectively
  const token = jwt.sign({ userId: id }, secretKey, { expiresIn: "1h" });

  // Sending the generated token as a JSON response
  res.json({ token });
});

//User Registration
app.post("/register", async (req, res) => {
  try {
    const { user_name, password, e_mail, phone_no } = req.body;
    const newRegister = await pool.query(
      "INSERT INTO user_detail (user_name,password,e_mail,phone_no) VALUES($1,$2,$3,$4) RETURNING *",
      [user_name, password, e_mail, phone_no]
    );
    res.json(newRegister.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/register/:user_name", async (req, res) => {
  try {
    const { user_name } = req.params;
    const register = await pool.query(
      "SELECT * FROM user_detail WHERE user_name=$1",
      [user_name]
    );
    res.json(register.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/register", async (req, res) => {
  try {
    const allregister = await pool.query("SELECT * FROM user_detail");
    res.json(allregister.rows);
  } catch (err) {
    console.error(err.message);
  }
});
//User Registration

//book details section
app.get("/book/:category", async (req, res) => {
  try {
    const { category } = req.params;
    const books = await pool.query("SELECT * FROM books WHERE category=$1", [
      category,
    ]);
    res.json(books.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/book", async (req, res) => {
  try {
    const allbooks = await pool.query("SELECT * FROM books");
    res.json(allbooks.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.delete("/book/:id", async (req, res) => {
  const { id } = req.params;
  const deletebook = await pool.query("DELETE");
});

//books details finished

//category
app.get("/category", async (req, res) => {
  try {
    const allcategory = await pool.query("SELECT * FROM category");
    res.json(allcategory.rows);
  } catch (err) {
    console.error(err.message);
  }
});
//category finished

//AddtoCart session
app.post("/cart/:id", async (req, res) => {
  const { id } = req.params;
  const { book_name, price, released_year, image } = req.body;
  console.log(book_name, price, released_year, image);
  try {
    const result = await pool.query(
      "INSERT INTO cart(cart_id,book_name,price,released_year,image) VALUES($1,$2,$3,$4,$5) RETURNING *",
      [id, book_name, price, released_year, image]
    );
    const newItem = result.rows[0];
    res.status(201).json(newItem);
  } catch (err) {
    console.error(err.message);
    res.status(500)({ error: "Internal server Error" });
  }
});

app.get("/cart", async (req, res) => {
  try {
    const allcart = await pool.query("SELECT * FROM cart");
    res.json(allcart.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/cart/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const response = await pool.query("SELECT * FROM cart WHERE id=$1", [id]);
    res.json(response);
  } catch (err) {
    console.error(err.message);
  }
});

app.delete("/cart/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletecart = await pool.query("DELETE FROM cart WHERE cart_id=$1", [
      id,
    ]);
    res.json(`cart{id} deleted`);
  } catch (err) {
    console.error(err.message);
  }
});
//Cart Seesion Finished

////Admin Panel section

app.post("/admin", async (req, res) => {
  try {
    const { admin_user, admin_pass } = req.body;
    const newadmin = await pool.query(
      "INSERT INTO admin (admin_user,admin_pass) VALUES($1,$2) RETURNING *",
      [admin_user, admin_pass]
    );
    res.json(newadmin.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/admin", async (req, res) => {
  try {
    const getadmin = await pool.query("SELECT * FROM admin");
    res.json(getadmin.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/admin/:admin_user", async (req, res) => {
  try {
    const { admin_user } = req.params;
    const getiadmin = await pool.query(
      "SELECT * FROM admin WHERE admin_user=$1",
      [admin_user]
    );
    res.json(getiadmin.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//Admin Panel Section

//Admin Database

app.delete("/admin/:bookid", async (req, res) => {
  const bookId = req.params.bookid;

  try {
    const deleteQuery = "DELETE FROM books WHERE book_id = $1";
    await pool.query(deleteQuery, [bookId]);
    res.json({ message: "Book deleted successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.put("/admin/:bookid", async (req, res) => {
  try {
    const { bookid } = req.params;
    const { category, book_name, author, description, price, released_year } =
      req.body;

    const updateData = await pool.query(
      "UPDATE books SET category=$1, book_name=$2, author=$3, description=$4, price=$5, released_year=$6 WHERE bookid=$7",
      [category, book_name, author, description, price, released_year, bookid]
    );

    res.json("Book updated successfully");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//Admin Database

///Admin Panel Section
app.listen(4000, () => {
  console.log("server running on port 4000");
});
