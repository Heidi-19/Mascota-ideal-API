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
    return row[0]; //console.log(row[0]) -> para ejecutar en consola
                   //node database.js
}
//getMascotaByID(1);

//Mascotas disponibles para adopcion



//Agregar una nueva mascota
export async function getMascotasDisponibles() {
    try {
        const [rows] = await pool.query(
            `SELECT * FROM mascota WHERE disponiblilidad = 'Disponible'`
        );
        return rows;
    } catch (error) {
        console.error('Error en la consulta de mascotas disponibles:', error);
        throw error;
    }
}

//getMascotasDisponibles();

//Filtrar mascota por especie y raza
export async function getMascotasPorEspecieYRaza(especie, raza) {
    try {
        const [rows] = await pool.query(
            `SELECT * FROM mascota WHERE especie = ? AND raza = ?`,
            [especie, raza]
        );
       return rows;
    } catch (error) {
        console.error('Error en la consulta de mascotas por especie y raza:', error);
        throw error;
    }
}


//agregar mascota
export async function agregarMascota(mascota) {
    try {
        const result = await pool.query(
            `INSERT INTO mascota SET ?`,
            [mascota]
        );
        return result.insertId; // Retorna el ID de la mascota recién insertada
    } catch (error) {
        console.error('Error al agregar una nueva mascota:', error);
        throw error;
    }
}

//Actualizar informacion de una mascota por su ID
export async function actualizarMascotaPorID(idMascota, nuevaInfo) {
    try {
        const result = await pool.query(
            `UPDATE mascota SET ? WHERE idMascota = ?`,
            [nuevaInfo, idMascota]
        );
        return result.affectedRows; // Retorna el número de filas afectadas
    } catch (error) {
        console.error('Error al actualizar la información de una mascota:', error);
        throw error;
    }
}


//Eliminar una mascota por ID
export async function eliminarMascotaPorID(idMascota) {
    try {
        const result = await pool.query(
            `DELETE FROM mascota WHERE idMascota = ?`,
            [idMascota]
        );
        return result.affectedRows; // Retorna el número de filas afectadas
    } catch (error) {
        console.error('Error al eliminar una mascota por ID:', error);
        throw error;
    }
}





