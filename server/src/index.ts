import express from 'express'

const app = express();
const PORT = process.env.PORT || 5500;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/api', (req, res) => {
  res.json({ message: 'Hello world' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});