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


//Crear direccion
export async function crearDireccion(direccion) {
    try {
        const result = await pool.query(
            `INSERT INTO direccion SET ?`,
            [direccion]
        );
        return result.insertId;
    } catch (error) {
        console.error('Error al crear una dirección:', error);
        throw error;
    }
}

//Obtener direccion por ID
export async function getDireccionPorID(idDireccion) {
    try {
        const [rows] = await pool.query(
            `SELECT * FROM direccion WHERE idDireccion = ?`,
            [idDireccion]
        );
        return rows[0];
    } catch (error) {
        console.error('Error al obtener una dirección por ID:', error);
        throw error;
    }
}

//Actualizar direccion
export async function actualizarDireccion(idDireccion, nuevaInfo) {
    try {
        const result = await pool.query(
            `UPDATE direccion SET ? WHERE idDireccion = ?`,
            [nuevaInfo, idDireccion]
        );
        return result.affectedRows;
    } catch (error) {
        console.error('Error al actualizar una dirección:', error);
        throw error;
    }
}

//Eliminar direccion
export async function eliminarDireccion(idDireccion) {
    try {
        const result = await pool.query(
            `DELETE FROM direccion WHERE idDireccion = ?`,
            [idDireccion]
        );
        return result.affectedRows;
    } catch (error) {
        console.error('Error al eliminar una dirección:', error);
        throw error;
    }
}

//Crear sesion
export async function crearSesion(sesion) {
    try {
        const result = await pool.query(
            `INSERT INTO sesion SET ?`,
            [sesion]
        );
        return result.insertId;
    } catch (error) {
        console.error('Error al crear una sesión:', error);
        throw error;
    }
}

//Obtener sesion por ID
export async function getSesionPorID(idSesion) {
    try {
        const [rows] = await pool.query(
            `SELECT * FROM sesion WHERE idSesion = ?`,
            [idSesion]
        );
        return rows[0];
    } catch (error) {
        console.error('Error al obtener una sesión por ID:', error);
        throw error;
    }
}

//Actualizar sesion
export async function actualizarSesion(idSesion, nuevaInfo) {
    try {
        const result = await pool.query(
            `UPDATE sesion SET ? WHERE idSesion = ?`,
            [nuevaInfo, idSesion]
        );
        return result.affectedRows;
    } catch (error) {
        console.error('Error al actualizar una sesión:', error);
        throw error;
    }
}

//Eliminar sesion
export async function eliminarSesion(idSesion) {
    try {
        const result = await pool.query(
            `DELETE FROM sesion WHERE idSesion = ?`,
            [idSesion]
        );
        return result.affectedRows;
    } catch (error) {
        console.error('Error al eliminar una sesión:', error);
        throw error;
    }
}

//Crear rol
export async function crearRol(rol) {
    try {
        const result = await pool.query(
            `INSERT INTO rol SET ?`,
            [rol]
        );
        return result.insertId;
    } catch (error) {
        console.error('Error al crear un rol:', error);
        throw error;
    }
}

//Obtener rol por ID
export async function getRolPorID(idRol) {
    try {
        const [rows] = await pool.query(
            `SELECT * FROM rol WHERE idRol = ?`,
            [idRol]
        );
        return rows[0];
    } catch (error) {
        console.error('Error al obtener un rol por ID:', error);
        throw error;
    }
}

//Actualizar rol
export async function actualizarRol(idRol, nuevaInfo) {
    try {
        const result = await pool.query(
            `UPDATE rol SET ? WHERE idRol = ?`,
            [nuevaInfo, idRol]
        );
        return result.affectedRows;
    } catch (error) {
        console.error('Error al actualizar un rol:', error);
        throw error;
    }
}

//Eliminar rol
export async function eliminarRol(idRol) {
    try {
        const result = await pool.query(
            `DELETE FROM rol WHERE idRol = ?`,
            [idRol]
        );
        return result.affectedRows;
    } catch (error) {
        console.error('Error al eliminar un rol:', error);
        throw error;
    }
}

//Crear usuario
export async function crearUsuario(usuario) {
    try {
        const result = await pool.query(
            `INSERT INTO usuario SET ?`,
            [usuario]
        );
        return result.insertId;
    } catch (error) {
        console.error('Error al crear un usuario:', error);
        throw error;
    }
}

// Obtener Usuario por Nombre
export async function getUsuarioPorNombre(nombre) {
    try {
        const [rows] = await pool.query(
            `SELECT * FROM usuario WHERE nombre = ?`,
            [nombre]
        );
        return rows[0];
    } catch (error) {
        console.error('Error al obtener un usuario por nombre:', error);
        throw error;
    }
}

//Actualizar usuario
export async function actualizarUsuario(idUsuario, nuevaInfo) {
    try {
        const result = await pool.query(
            `UPDATE usuario SET ? WHERE idUsuario = ?`,
            [nuevaInfo, idUsuario]
        );
        return result.affectedRows;
    } catch (error) {
        console.error('Error al actualizar un usuario:', error);
        throw error;
    }
}

//Eliminar usuario
export async function eliminarUsuario(idUsuario) {
    try {
        const result = await pool.query(
            `DELETE FROM usuario WHERE idUsuario = ?`,
            [idUsuario]
        );
        return result.affectedRows;
    } catch (error) {
        console.error('Error al eliminar un usuario:', error);
        throw error;
    }
}

//Crear solicitud de adopcion
export async function crearSolicitudAdopcion(solicitud) {
    try {
        const result = await pool.query(
            `INSERT INTO solicitudesadopcion SET ?`,
            [solicitud]
        );
        return result.insertId;
    } catch (error) {
        console.error('Error al crear una solicitud de adopción:', error);
        throw error;
    }
}

//Obtener solicitud de adopcion por ID
export async function getSolicitudAdopcionPorID(idSolicitud) {
    try {
        const [rows] = await pool.query(
            `SELECT * FROM solicitudesadopcion WHERE idSolicitud = ?`,
            [idSolicitud]
        );
        return rows[0];
    } catch (error) {
        console.error('Error al obtener una solicitud de adopción por ID:', error);
        throw error;
    }
}

//Actualizar solicitud de adopcion
export async function actualizarSolicitudAdopcion(idSolicitud, nuevaInfo) {
    try {
        const result = await pool.query(
            `UPDATE solicitudesadopcion SET ? WHERE idSolicitud = ?`,
            [nuevaInfo, idSolicitud]
        );
        return result.affectedRows;
    } catch (error) {
        console.error('Error al actualizar una solicitud de adopción:', error);
        throw error;
    }
}

//Eliminar solicitud de adopcion
export async function eliminarSolicitudAdopcion(idSolicitud) {
    try {
        const result = await pool.query(
            `DELETE FROM solicitudesadopcion WHERE idSolicitud = ?`,
            [idSolicitud]
        );
        return result.affectedRows;
    } catch (error) {
        console.error('Error al eliminar una solicitud de adopción:', error);
        throw error;
    }
}

//Crear adopcionconfirmada
export async function crearAdopcionConfirmada(adopcion) {
    try {
        const result = await pool.query(
            `INSERT INTO adopcionconfirmada SET ?`,
            [adopcion]
        );
        return result.insertId;
    } catch (error) {
        console.error('Error al crear una adopción confirmada:', error);
        throw error;
    }
}

//Obtener adopcion por ID
export async function getAdopcionConfirmadaPorID(idAdopcion) {
    try {
        const [rows] = await pool.query(
            `SELECT * FROM adopcionconfirmada WHERE idAdopcion = ?`,
            [idAdopcion]
        );
        return rows[0];
    } catch (error) {
        console.error('Error al obtener una adopción confirmada por ID:', error);
        throw error;
    }
}

//Actualizar adopcion
export async function actualizarAdopcionConfirmada(idAdopcion, nuevaInfo) {
    try {
        const result = await pool.query(
            `UPDATE adopcionconfirmada SET ? WHERE idAdopcion = ?`,
            [nuevaInfo, idAdopcion]
        );
        return result.affectedRows;
    } catch (error) {
        console.error('Error al actualizar una adopción confirmada:', error);
        throw error;
    }
}

//Eliminar adopcion
export async function eliminarAdopcionConfirmada(idAdopcion) {
    try {
        const result = await pool.query(
            `DELETE FROM adopcionconfirmada WHERE idAdopcion = ?`,
            [idAdopcion]
        );
        return result.affectedRows;
    } catch (error) {
        console.error('Error al eliminar una adopción confirmada:', error);
        throw error;
    }
}





