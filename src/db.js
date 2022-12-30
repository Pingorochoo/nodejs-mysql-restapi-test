import { createPool } from "mysql2/promise";
import { DB_HOST, DB_DATABASE, DB_USER, DB_PORT, DB_PASSWORD } from './config.js'
const POOL = createPool(
    {
        host: DB_HOST,
        user: DB_USER,
        port: DB_PORT,
        database: DB_DATABASE,
        password: DB_PASSWORD
    }
)

export default POOL
