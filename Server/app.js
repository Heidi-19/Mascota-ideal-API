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

app.get("/mascota/:idMascota", async(req, res) => {
    const mascota = await getMascotaByID(req.params.idMascota);
    res.status(200).send(mascota);
});

app.listen(8080, () => {
    console.log("Server running on port 8080");
});