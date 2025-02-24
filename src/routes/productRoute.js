import express from 'express';
import Product from '../modules/product.js';
import cors from "cors";
import {corsOptions} from "../index.js";

const router = express.Router();

// Get All Products
router.get("/", cors(corsOptions), async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products)
    } catch (err) {
        res.status(500).send("Server error")
    }
})

// Create Product
router.post("/create", async (req, res) => {
    const { name, description, price, category, stock } = req.body
    try {
        const newProduct = new Product({
            name,
            description,
            price,
            category,
            stock,
        })
        await newProduct.save()
        res.status(201).json(newProduct)
    } catch (err) {
        res.status(500).send("Server error")
    }
})

// Get Product by ID
router.get("/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)

        if (!product)
            return res.status(404).json({ msg: "Product not found" })

        res.json(product)
    } catch (err) {
        res.status(500).send("Server error")
    }
})


// Get Product by Name
router.get("/byName/:name", async (req, res) => {
    try {
        const product = await Product.findByName(req.params.name)

        if (!product)
            return res.status(404).json({ msg: "Product not found" })

        res.json(product)
    } catch (err) {
        res.status(500).send("Server error")
    }
})

// Update Product
router.put("/:id", async (req, res) => {
    const { name, description, price, category, stock } = req.body
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            {
                name,
                description,
                price,
                category,
                stock,
            },
            { new: true }
        )

        if (!updatedProduct)
            return res.status(404).json({ msg: "Product not found" })

        res.json(updatedProduct)
    } catch (err) {
        res.status(500).send("Server error")
    }
})


// Delete Product
router.delete("/:id", async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id)
        if (!product) return res.status(404).json({ msg: "Product not found" })
        res.json({ msg: "Product deleted" })
    } catch (err) {
        res.status(500).send("Server error")
    }
})



// Export the router
export default router;
