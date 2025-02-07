import express from "express";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../backend/controllers/product.controller.js";

const router = express.Router();

router.get("/", getProducts)
 //Adds products and checks if all required parameters are filled
router.post("/", createProduct);
 router.put("/:id", updateProduct);
 // Deletes products with the ID
 router.delete("/:id", deleteProduct)

export default router;