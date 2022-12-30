import POOL from "../db.js"
export const getHome = (req, res) => res.send('WELCOME')
export const getPing = async (req, res) => {
    const [result] = await POOL.query('SELECT 1+1 as Result')
    res.json(result[0])
}