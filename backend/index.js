const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Use CORS to allow requests from your frontend
app.use(cors());
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Define a test route
app.get('/api/hello', (req, res) => {
  res.json({ message: "Hello from LexiGO! backend" });
});

// Listen for requests
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});