const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
// Middleware to parse JSON bodies (for POST requests)
app.use(express.json());
// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));
// In-memory array to store quotes
let quotes = [
"The best way to predict the future is to invent it.",
"Life is 10% what happens to us and 90% how we react to it.",
"The only limit to our realization of tomorrow is our doubts of today.",
"Do not wait to strike till the iron is hot; but make it hot by striking."
];
// GET endpoint to retrieve a random quote
// Usage example: http://localhost:3000/api/quote
app.get('/api/quote', (req, res) => {   
    const randomIndex = Math.floor(Math.random() * quotes.length);
    res.json({ quote: quotes[randomIndex] });
});
app.get('/health', (req, res) => {
    res.json({ status: 'server still running' });
});

// Optional: POST endpoint to add a new quote
// Explanation
// This endpoint allows users to submit a new quote via a POST request. The quote should be included in the request body as JSON.

app.listen(PORT, () => {
    console.log("App is noew listening to user requests" + PORT);
    console.log("Access this service at http://localhost:"+ PORT);
})