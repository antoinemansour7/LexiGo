const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 6657;

app.use(cors());
app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: "Hello from LexiGO! backend" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});