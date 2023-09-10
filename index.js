import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  //res.send('Hello World!');
  res.json({ message: 'test response plz ignore' });
});

app.get('/users', (req, res) => {
  // Logic to retrieve all users
  res.json({ message: 'Get all users' });
});

app.post('/users', (req, res) => {
  // Logic to create a new user
  const newUser = req.body;
  res.status(201).json({ message: 'User created', user: newUser });
});

app.put('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Logic to update user based on userId
  res.json({ message: `Update user with id ${userId}` });
});

app.delete('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Logic to delete user based on userId
  res.json({ message: `Delete user with id ${userId}` });
});

app.listen(3000, () => {
  console.log('Express server initialized');
});
