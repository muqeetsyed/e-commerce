import express from 'express';

const router = express.Router();

// Define your routes
router.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Export the router
export default router;
