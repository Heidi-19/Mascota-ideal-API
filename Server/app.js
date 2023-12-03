import express from "express";
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

//mostrar mascota
app.get("/mascota/:idMascota", async(req, res) => {
    const mascota = await getMascotaByID(req.params.idMascota);
    res.status(200).send(mascota);
});

//Obtener todas las mascotas disponibles
app.get("/mascota/disponibles", async (req, res) => {
    try {
        const mascotasDisponibles = await getMascotasDisponibles();
        res.status(200).send(mascotasDisponibles);
    } catch (error) {
        console.error('Error al obtener mascotas disponibles:', error);
        res.status(500).send('Error interno del servidor');
    }
});

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





app.listen(8080, () => {
    console.log("Server running on port 8080");
});