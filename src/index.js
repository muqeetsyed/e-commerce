import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import productRoutes from './routes/productRoute.js';  // Import the router
import userRoutes from './routes/userRoute.js';  // Import the router

// Load environment variables first
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5004;

// Middleware
app.use(express.json());

app.use("/api/products", productRoutes)
app.use("/api/users", userRoutes)

// Database Connection with retries
const connectDB = async () => {
    try {
        await mongoose.connect(
            `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?authSource=admin`,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                serverSelectionTimeoutMS: 5000,
                socketTimeoutMS: 45000
            }
        );
        console.log('✅ MongoDB Connected');
    } catch (err) {
        console.error('🚫 MongoDB Connection Error:', err.message);
        process.exit(1);
    }
};

// Start Server
const startServer = () => {
    app.listen(PORT, '0.0.0.0', () => {  // Crucial 0.0.0.0 binding
        console.log(`🚀 Server running on port ${PORT}`);
    });
};

// Init sequence
(async () => {
    await connectDB();
    startServer();
})();