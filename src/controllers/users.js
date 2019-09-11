const connection = require('../config/database');

exports.createUser = async (req, res, next) => {
   const name = req.body.nome;
   const email = req.body.email;
   const password = req.body.senha;

   const sql = '\
      INSERT INTO usuario (nome, email, senha) \
      VALUES (?,?,?) \
   ';

   connection.query(sql, [name, email, password])
      .then(result => {
         res.status(201).json({
            message: 'User created successfully.'
         })
      })
      .catch(error => next(error));
}

exports.getAllUsers = async (req, res, next) => {
   const sql = '\
      SELECT * FROM usuario \
   ';

   try {
      let result = await connection.query(sql);
      res.status(200).send({
         users: result
      });
   } catch (error) {
      next(error);
   }
}

exports.getUser = async (req, res, next) => {
   const { userId } = req.params;
   const sql = '\
      SELECT * FROM usuario WHERE id=? \
   ';

   try {
      let result = await connection.query(sql, [userId]);

      if (result.length) {
         res.status(200).send(result[0]);
      } else {
         res.status(404).json({
            message: 'Not found.'
         });
      }
   } catch (error) {
      next(error);
   }
};

exports.updateUser = (req, res, next) => {
   const { userId } = req.params;
   const newValues = req.body;

   const sql = '\
      UPDATE usuario SET ? WHERE id=? \
   ';

   connection.query(sql, [newValues, userId])
      .then(result => {
         let { affectedRows } = result;
         if (affectedRows) {
            res.status(200).json({
               message: 'User updated successfully.'
            })            
         } else {
            throw new Error('Update not proceed.')
         }
      })
      .catch(error => next(error));
}

exports.deleteUser = (req, res, next) => {
   const { userId } = req.params;
   const sql = '\
      DELETE FROM usuario WHERE id=? \
   ';

   connection.query(sql, [userId])
      .then(result => {
         let { affectedRows } = result;
         if (affectedRows) {
            res.status(204).send({
               message: 'User deleted successfully.'
            })            
         } else {
            throw new Error('Delete not proceed.')
         }
      })
      .catch(error => next(error));
}