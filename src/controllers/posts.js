const connection = require('../config/database');

exports.createPost = (req, res, next) => {
   const userId = req.body.usuario_id;
   const text = req.body.texto;

   const sql = '\
      INSERT INTO post (usuario_id, texto) \
      VALUES (?,?) \
   ';

   connection.query(sql, [userId, text])
      .then(result => {
         res.status(201).json({
            message: 'Post created successfully.'
         })
      })
      .catch(error => next(error));
}

exports.getAllPosts = (req, res, next) => {
   const sql = '\
      SELECT * FROM post \
   ';

   connection.query(sql)
      .then(result => {
         res.status(200).send({
            posts: result
         })
      })
      .catch(error => next(error));
}

exports.getPost = (req, res, next) => {
   const { postId } = req.params;
   const sql = '\
      SELECT * FROM post WHERE id=? \
   ';

   connection.query(sql, [postId])
      .then(result => {
         if (result.length) {
            res.status(200).send(result[0]);
         } else {
            res.status(404).json({
               message: 'Not found.'
            });
         }
      })
      .catch(error => next(error));
}

exports.updatePost = (req, res, next) => {
   const { postId } = req.params;
   const newValues = req.body;

   const sql = '\
      UPDATE post SET ? WHERE id=? \
   ';

   connection.query(sql, [newValues, postId])
      .then(result => {
         let { affectedRows } = result;
         if (affectedRows) {
            res.status(200).json({
               message: 'Post updated successfully.'
            })            
         } else {
            throw new Error('Update not proceed.')
         }
      })
      .catch(error => next(error));
}

exports.deletePost = (req, res, next) => {
   const { postId } = req.params;
   const sql = '\
      DELETE FROM post WHERE id=? \
   ';

   connection.query(sql, [postId])
      .then(result => {
         let { affectedRows } = result;
         if (affectedRows) {
            res.status(204).send({
               message: 'Post deleted successfully.'
            })            
         } else {
            throw new Error('Delete not proceed.')
         }
      })
      .catch(error => next(error));
}