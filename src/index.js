import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('.'));

app.get('/', (req, res) => {
  res.json({ message: 'Sound Lab API Ready!' });
});

app.get('/api/sounds', (req, res) => {
  res.json([
    { id: 1, name: 'Beep', frequency: 440 },
    { id: 2, name: 'Boop', frequency: 880 }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
