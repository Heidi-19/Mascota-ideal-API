import express from "express";
import cors from 'cors';
import {
    getMascotaByID,
    getMascotasDisponibles,
    getMascotasPorEspecieYRaza,
    agregarMascota,
    actualizarMascotaPorID,
    eliminarMascotaPorID,
    crearDireccion,
    getDireccionPorID,
    actualizarDireccion,
    eliminarDireccion,
    crearSesion,
    getSesionPorID,
    actualizarSesion,
    eliminarSesion,
    crearRol,
    getRolPorID,
    actualizarRol,
    eliminarRol,
    crearUsuario,
    getUsuarioPorNombre,
    actualizarUsuario,
    eliminarUsuario,
    crearSolicitudAdopcion,
    getSolicitudAdopcionPorID,
    actualizarSolicitudAdopcion,
    eliminarSolicitudAdopcion,
    crearAdopcionConfirmada,
    getAdopcionConfirmadaPorID,
    actualizarAdopcionConfirmada,
    eliminarAdopcionConfirmada,
} from "./database.js";

const app = express();
app.use(express.json());

//app.use(cors());

//mostrar mascota por ID
app.get("/mascota/:idMascota", async(req, res) => {
    const mascota = await getMascotaByID(req.params.idMascota);
    res.status(200).send(mascota);
});

//Obtener todas las mascotas disponibles
/*app.get("/mascota/:disponiblilidad", async(req, res) => {
    const disponibles = await getMascotasDisponibles(req.params.disponiblilidad);
    res.status(200).send(disponibles);
});*/


//Agregar una nueva mascota
app.post("/mascota", async (req, res) => {
    const nuevaMascota = req.body; // Suponiendo que los datos de la nueva mascota están en el cuerpo de la solicitud
    
    try {
        const idNuevaMascota = await agregarMascota(nuevaMascota);
        res.status(201).send({ id: idNuevaMascota, mensaje: 'Mascota agregada correctamente' });
    } catch (error) {
        console.error('Error al agregar una nueva mascota:', error);
        res.status(500).send('Error interno del servidor');
    }
});

//Actualizar informacion de una mascota por ID
app.put("/mascota/:idMascota", async (req, res) => {
    const idMascota = req.params.idMascota;
    const nuevaInfo = req.body; // Suponiendo que los nuevos datos están en el cuerpo de la solicitud
    
    try {
        const filasAfectadas = await actualizarMascotaPorID(idMascota, nuevaInfo);
        if (filasAfectadas > 0) {
            res.status(200).send('Mascota actualizada correctamente');
        } else {
            res.status(404).send('Mascota no encontrada');
        }
    } catch (error) {
        console.error('Error al actualizar la información de una mascota:', error);
        res.status(500).send('Error interno del servidor');
    }
});

//Eliminar una mascota por ID
app.delete("/mascota/:idMascota", async (req, res) => {
    const idMascota = req.params.idMascota;
    
    try {
        const filasAfectadas = await eliminarMascotaPorID(idMascota);
        if (filasAfectadas > 0) {
            res.status(200).send('Mascota eliminada correctamente');
        } else {
            res.status(404).send('Mascota no encontrada');
        }
    } catch (error) {
        console.error('Error al eliminar una mascota:', error);
        res.status(500).send('Error interno del servidor');
    }
});

//Obtener mascota por especie y raza
app.get("/mascota/:especie/:raza", async (req, res) => {
    const especie = req.params.especie;
    const raza = req.params.raza;

    try {
        const mascotas = await getMascotasPorEspecieYRaza(especie, raza);
        res.status(200).send(mascotas);
    } catch (error) {
        console.error('Error al obtener mascotas por especie y raza:', error);
        res.status(500).send('Error interno del servidor');
    }
});

//Crear direccion
app.post("/direccion", async (req, res) => {
    const nuevaDireccion = req.body; // Suponiendo que los datos de la nueva dirección están en el cuerpo de la solicitud
    
    try {
        const idNuevaDireccion = await crearDireccion(nuevaDireccion);
        res.status(201).send({ id: idNuevaDireccion, mensaje: 'Dirección creada correctamente' });
    } catch (error) {
        console.error('Error al crear una nueva dirección:', error);
        res.status(500).send('Error interno del servidor');
    }
});

//Obtener direccion por ID
app.get("/direccion/:idDireccion", async(req, res) => {
    const direccion = await getDireccionPorID(req.params.idDireccion);
    res.status(200).send(direccion);
});

//Actualizar informacion de una direccion por ID
app.put("/direccion/:idDireccion", async (req, res) => {
    const idDireccion = req.params.idDireccion;
    const nuevaInfo = req.body; // Suponiendo que los nuevos datos están en el cuerpo de la solicitud
    
    try {
        const filasAfectadas = await actualizarDireccion(idDireccion, nuevaInfo);
        if (filasAfectadas > 0) {
            res.status(200).send('Dirección actualizada correctamente');
        } else {
            res.status(404).send('Dirección no encontrada');
        }
    } catch (error) {
        console.error('Error al actualizar la información de una dirección:', error);
        res.status(500).send('Error interno del servidor');
    }
});

//Eliminar una direccion por ID
app.delete("/direccion/:idDireccion", async (req, res) => {
    const idDireccion = req.params.idDireccion;
    
    try {
        const filasAfectadas = await eliminarDireccion(idDireccion);
        if (filasAfectadas > 0) {
            res.status(200).send('Dirección eliminada correctamente');
        } else {
            res.status(404).send('Dirección no encontrada');
        }
    } catch (error) {
        console.error('Error al eliminar una dirección:', error);
        res.status(500).send('Error interno del servidor');
    }
});

//Crear una sesion
app.post("/sesion", async (req, res) => {
    const nuevaSesion = req.body; // Suponiendo que los datos de la nueva sesión están en el cuerpo de la solicitud
    
    try {
        const idNuevaSesion = await crearSesion(nuevaSesion);
        res.status(201).send({ id: idNuevaSesion, mensaje: 'Sesión creada correctamente' });
    } catch (error) {
        console.error('Error al crear una nueva sesión:', error);
        res.status(500).send('Error interno del servidor');
    }
});

//Obtener sesion por ID
app.get("/sesion/:idSesion", async (req, res) => {
    const idSesion = req.params.idSesion;
    
    try {
        const sesion = await getSesionPorID(idSesion);
        if (sesion) {
            res.status(200).send(sesion);
        } else {
            res.status(404).send('Sesión no encontrada');
        }
    } catch (error) {
        console.error('Error al obtener una sesión por ID:', error);
        res.status(500).send('Error interno del servidor');
    }
});

//Actualizar informacion de una sesion por ID
app.put("/sesion/:idSesion", async (req, res) => {
    const idSesion = req.params.idSesion;
    const nuevaInfo = req.body; // Suponiendo que los nuevos datos están en el cuerpo de la solicitud
    
    try {
        const filasAfectadas = await actualizarSesion(idSesion, nuevaInfo);
        if (filasAfectadas > 0) {
            res.status(200).send('Sesión actualizada correctamente');
        } else {
            res.status(404).send('Sesión no encontrada');
        }
    } catch (error) {
        console.error('Error al actualizar la información de una sesión:', error);
        res.status(500).send('Error interno del servidor');
    }
});

//Eliminar una sesion por ID
app.delete("/sesion/:idSesion", async (req, res) => {
    const idSesion = req.params.idSesion;
    
    try {
        const filasAfectadas = await eliminarSesion(idSesion);
        if (filasAfectadas > 0) {
            res.status(200).send('Sesión eliminada correctamente');
        } else {
            res.status(404).send('Sesión no encontrada');
        }
    } catch (error) {
        console.error('Error al eliminar una sesión:', error);
        res.status(500).send('Error interno del servidor');
    }
});

//Crear rol
app.post("/roles", async (req, res) => {
    const nuevoRol = req.body; // Suponiendo que los datos del nuevo rol están en el cuerpo de la solicitud
    
    try {
        const idNuevoRol = await crearRol(nuevoRol);
        res.status(201).send({ id: idNuevoRol, mensaje: 'Rol creado correctamente' });
    } catch (error) {
        console.error('Error al crear un nuevo rol:', error);
        res.status(500).send('Error interno del servidor');
    }
});

//Obtener un rol por ID
app.get("/roles/:idRol", async (req, res) => {
    const idRol = req.params.idRol;
    
    try {
        const rol = await getRolPorID(idRol);
        if (rol) {
            res.status(200).send(rol);
        } else {
            res.status(404).send('Rol no encontrado');
        }
    } catch (error) {
        console.error('Error al obtener un rol por ID:', error);
        res.status(500).send('Error interno del servidor');
    }
});

//Actualizar informacion de un rol por ID
app.put("/roles/:idRol", async (req, res) => {
    const idRol = req.params.idRol;
    const nuevaInfo = req.body; // Suponiendo que los nuevos datos están en el cuerpo de la solicitud
    
    try {
        const filasAfectadas = await actualizarRol(idRol, nuevaInfo);
        if (filasAfectadas > 0) {
            res.status(200).send('Rol actualizado correctamente');
        } else {
            res.status(404).send('Rol no encontrado');
        }
    } catch (error) {
        console.error('Error al actualizar la información de un rol:', error);
        res.status(500).send('Error interno del servidor');
    }
});

//Eliminar un rol por ID
app.delete("/roles/:idRol", async (req, res) => {
    const idRol = req.params.idRol;
    
    try {
        const filasAfectadas = await eliminarRol(idRol);
        if (filasAfectadas > 0) {
            res.status(200).send('Rol eliminado correctamente');
        } else {
            res.status(404).send('Rol no encontrado');
        }
    } catch (error) {
        console.error('Error al eliminar un rol:', error);
        res.status(500).send('Error interno del servidor');
    }
});







app.listen(8080, () => {
    console.log("Server running on port 8080");
});