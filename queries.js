const Pool = require('pg').Pool
var _pool = new Pool({
  user: 'vzkbmdvilkhmno',
  host: 'ec2-54-83-55-122.compute-1.amazonaws.com',
  database: 'd3rrhc5g9s6859',
  password: '4fd02600d79fe28d3ac84bd21dfb51882cd9750d68ceb749acf96275b2fc75e9',
  port: 5432
});
// var _pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'tokimon_table',
//   password: 'darth9410',
//   port: 5432
// });
const getUsers = (request, response) => {
  _pool.query('SELECT * FROM tokimon_table ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getUserById = (request, response) => {
  const id = parseInt(request.params.id)

  _pool.query('SELECT * FROM tokimon_table WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createUser = (request, response) => {
  const { tokimon_name, weight, height, fly, fight, fire, water, electric, frozen, total, trainer_name } = request.body

  _pool.query('INSERT INTO tokimon_table (tokimon_name, weight, height, fly, fight, fire, water, electric, frozen, total, trainer_name) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)', [tokimon_name, weight, height, fly, fight, fire, water, electric, frozen, total, trainer_name], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with ID: ${results.insertId}`)
  })
}

const updateUser = (request, response) => {
  const id = parseInt(request.params.id)
  const { tokimon_name, weight, height, fly, fight, fire, water, electric, frozen, total, trainer_name } = request.body

  _pool.query(
    'UPDATE tokimon_table SET tokimon_name = $1, weight = $2, height = $3, fly = $4, fight = $5, fire = $6, water = $7, electric = $8, frozen = $9, total = $10, trainer_name = $11',
    [tokemon_name, weight, height, fly, fight, fire, water, electric, frozen, total, trainer_name],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${id}`)
    }
  )
}

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id)

  _pool.query('DELETE FROM tokimon_table WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}
