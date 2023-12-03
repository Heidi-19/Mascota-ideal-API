import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const pool = mysql
.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
})
.promise();


export async function getMascotaByID(idMascota){

    const [row] = await pool.query(
        `SELECT * FROM mascota WHERE idMascota = ?`,
        [idMascota]  
    )
    return row[0];
}


