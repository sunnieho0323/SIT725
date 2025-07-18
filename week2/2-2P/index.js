const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
// Middleware to parse JSON bodies (for POST requests)
app.use(express.json());
// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));


// Define a GET endpoint at '/square' that calculates the square of a number.
// The endpoint expects a query parameter 'num', e.g., /square?num=5
app.get('/square', (req, res) => {
// Extract the 'num' query parameter from the request and convert it to a floating point number.
const num = parseFloat(req.query.num);
// Check if 'num' is not a valid number. If it's not, send an error message as the response.
if (isNaN(num)) {
return res.send("Error: Please provide a valid number using query parameter 'num'.");
}
// Calculate the square of the number.
const square = num * num;
// Send a plain text response showing the result.
res.send(`
    The square of ${num} is: ${square}
    <button onclick ="window.location.href='/'">Go Back</button>
    `);
});

// create a GET endpoint at /add
app.get('/add', (req, res) => {
    // Parse the numbers from the query parameters
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    
    // Calculate the sum
    const sum = a + b;
    // Send the result as a plain text response
    res.send(`
        The sum of ${a} + ${b} is: ${sum}
        <button onclick ="window.location.href='/'">Go Back</button>
        `);

}); 

// create POST endpoint at /add
app.post('/add', (req, res) => {
    const {a, b} = req.body;
    if (typeof a !== 'number' || typeof b !== 'number') {
        return res.status(400).json({ error: 'Invalid input' });
    }
    const sum = a + b;
    res.status(201).json({ message: 'Numbers added successfully', sum });
});

    

// start the server and listen on the specified port
app.listen(PORT, () => {
    console.log("App is now listening to user requests on port " + PORT);
    console.log("Access this service at http://localhost:" + PORT);
})