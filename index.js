const express = require('express');
const mongoose = require('mongoose');
const studentRoutes = require('../routes/studentRoutes.js');

const app = express();
app.use(express.json());
const PORT = 3000;
app.use('/api/students', studentRoutes);

mongoose.connect('mongodb://localhost:27017/studentdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
