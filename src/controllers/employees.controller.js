import POOL from "../db.js";

export const getEmployees = async (req, res) => {
    try {
        const [rows] = await POOL.query('SELECT * FROM employee')
        res.send(rows)
    } catch (error) {
        res.statusCode = 500
        return res.json({
            message: 'Something goes wrong'
        })
    }
}
export const getEmployeeByID = async (req, res) => {
    try {
        const { id } = req.params
        const [rows] = await POOL.query('SELECT * FROM employee WHERE id=?', [id])
        console.log(rows.length);
        if (rows.length === 0)
            return res.status(404).json({
                message: 'employee not found'
            })
        res.json(rows[0])
    } catch (error) {
        res.statusCode = 500
        return res.json({
            message: 'Something goes wrong'
        })
    }

}
export const creatEmployees = async (req, res) => {
    try {
        const { name, salary } = req.body;
        const [rows] = await POOL.query('INSERT INTO employee (name,salary) VALUES (?,?)', [name, salary])
        res.send({
            id: rows.insertId,
            name, salary
        })
    } catch (error) {
        res.statusCode = 500
        return res.json({
            message: 'Something goes wrong'
        })
    }

}
export const updateEmployees = async (req, res) => {
    try {
        const { name, salary } = req.body
        const { id } = req.params
        const [rows] = await POOL.query('UPDATE employee SET name = ?, salary = ? where id=?', [name, salary, id])
        if (rows.affectedRows < 1) {
            res.statusCode = 404
            return res.json({
                message: 'Employee not found'
            })
        }
        res.send(rows)
    } catch (error) {
        res.statusCode = 500
        return res.json({
            message: 'Something goes wrong'
        })
    }

}
export const updatePatchEmployees = async (req, res) => {
    try {
        const { name, salary } = req.body
        const { id } = req.params
        const [rows] = await POOL.query('UPDATE employee SET name = IFNULL(?,name), salary = IFNULL(?,salary) where id=?',
            [name, salary, id])
        if (rows.affectedRows < 1) {
            res.statusCode = 404
            return res.json({
                message: 'Employee not found'
            })
        }
        res.send(rows)
    } catch (error) {
        res.statusCode = 500
        return res.json({
            message: 'Something goes wrong'
        })
    }

}
export const deleteEmployees = async (req, res) => {
    try {
        const { id } = req.params
        const [rows] = await POOL.query('DELETE FROM employee WHERE id = ?', [id])
        if (rows.affectedRows < 1) {
            res.statusCode = 404
            return res.json({ message: 'Employee not found' })
        }
        console.log(rows);
        res.send(rows)
        // o res.sendStatus(204)
    } catch (error) {
        res.statusCode = 500
        return res.json({
            message: 'Something goes wrong'
        })
    }

}