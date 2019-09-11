const express = require('express');
const cors = require('cors');

const usersRoutes = require('./routes/users');
const postsRoutes = require('./routes/posts');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/usuarios', usersRoutes);
app.use('/posts', postsRoutes);

app.use((err, req, res, next) => {
   res.status(500).send({
      message: 'Something went wrong!',
      error: err.message
   });
});

const PORT = process.env.port || 6000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));