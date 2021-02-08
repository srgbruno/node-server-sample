const express = require('express');
const cors = require('cors');
const redis = require('redis');

const usersRoutes = require('./routes/users');
const postsRoutes = require('./routes/posts');

const app = express();
const redisClient = redis.createClient({
   host: "redis-server",
   port: 6379
});
redisClient.set('count', 0);

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
   redisClient.get('count', (err, count) => {
      res.send({
         success: true,
         message: 'Hi there, welcome to my API!',
         visits: count
      });
      redisClient.set('count', parseInt(count) + 1);
   });
})
app.use('/usuarios', usersRoutes);
app.use('/posts', postsRoutes);

app.use((err, req, res, next) => {
   res.status(500).send({
      message: 'Something went wrong!',
      error: err.message
   });
});

const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

app.listen(PORT, HOST, console.log(`Server started on port ${PORT}`));