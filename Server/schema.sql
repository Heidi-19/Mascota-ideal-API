CREATE DATABASE bdmascotaideal;

USE bdmascotaideal;

DELETE TABLE usuario (
  idUsuario int(8) NOT NULL,
  idRol int(8) NOT NULL,
  nombre varchar(255) NOT NULL,
  apellidoPat varchar(255) NOT NULL,
  apellidoMat varchar(255) NOT NULL,
  Edad int(8) NOT NULL,
  Sexo varchar(8) NOT NULL,
  idSesion int(8) NOT NULL,
  idDireccion int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


CREATE TABLE rol (
  idRol int(8) NOT NULL,
  responsable tinyint(1) NOT NULL,
  adoptante tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE direccion (
  idDireccion int(8) NOT NULL,
  estado varchar(255) NOT NULL,
  ciudad varchar(255) NOT NULL,
  colonia varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE sesion (
  idSesion int(8) NOT NULL,
  nombreUsuario varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  email varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE solicitudesadopcion (
  idSolicitud int(8) NOT NULL,
  idMascota int(8) NOT NULL,
  idUsuario int(8) NOT NULL,
  cantidad int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


CREATE TABLE mascota (
  idMascota int(8) NOT NULL,
  nombre varchar(255) NOT NULL,
  edad int(8) NOT NULL,
  peso double NOT NULL,
  especie varchar(255) NOT NULL,
  raza varchar(255) NOT NULL,
  caracteristicas varchar(255) NOT NULL,
  antecedentes varchar(255) NOT NULL,
  disponiblilidad varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE adopcionconfirmada (
  idAdopcion int(8) NOT NULL,
  fecha datetime NOT NULL,
  realizado tinyint(1) NOT NULL,
  detalles varchar(255) NOT NULL,
  idSolicitud int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


--
-- Indices de la tabla `adopcionconfirmada`
--
ALTER TABLE adopcionconfirmada
  ADD PRIMARY KEY (idAdopcion),
  ADD KEY idSolicitud (idSolicitud);

--
-- Indices de la tabla `direccion`
--
ALTER TABLE direccion
  ADD PRIMARY KEY (idDireccion);

--
-- Indices de la tabla `mascota`
--
ALTER TABLE mascota
  ADD PRIMARY KEY (idMascota);

--
-- Indices de la tabla `rol`
--
ALTER TABLE rol
  ADD PRIMARY KEY (idRol);

--
-- Indices de la tabla `sesion`
--
ALTER TABLE sesion
  ADD PRIMARY KEY (idSesion);

--
-- Indices de la tabla `solicitudesadopcion`
--
ALTER TABLE solicitudesadopcion
  ADD PRIMARY KEY (idSolicitud),
  ADD KEY idMascota (idMascota,idUsuario),
  ADD KEY idUsuario (idUsuario);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE usuario
  ADD PRIMARY KEY (idUsuario),
  ADD KEY idSesion (idSesion),
  ADD KEY idRol (idRol),
  ADD KEY idDireccion (idDireccion);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `adopcionconfirmada`
--
ALTER TABLE adopcionconfirmada
  MODIFY idAdopcion int(8) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `direccion`
--
ALTER TABLE direccion
  MODIFY idDireccion int(8) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `mascota`
--
ALTER TABLE mascota
  MODIFY idMascota int(8) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `rol`
--
ALTER TABLE rol
  MODIFY idRol int(8) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `sesion`
--
ALTER TABLE sesion
  MODIFY idSesion int(8) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE usuario
  MODIFY idUsuario int(8) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `adopcionconfirmada`
--
ALTER TABLE adopcionconfirmada
  ADD CONSTRAINT adopcionconfirmada_ibfk_1 FOREIGN KEY (idSolicitud) REFERENCES solicitudesadopcion (idSolicitud) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `rol`
--
ALTER TABLE rol
  ADD CONSTRAINT rol_ibfk_1 FOREIGN KEY (idRol) 
  REFERENCES usuario (idRol) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `solicitudesadopcion`
--
ALTER TABLE solicitudesadopcion
  ADD CONSTRAINT solicitudesadopcion_ibfk_1 FOREIGN KEY (idMascota) REFERENCES mascota (idMascota) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT solicitudesadopcion_ibfk_2 FOREIGN KEY (idUsuario) REFERENCES usuario (idUsuario) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE usuario
  ADD CONSTRAINT usuario_ibfk_1 FOREIGN KEY (idSesion) REFERENCES sesion (idSesion) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT usuario_ibfk_2 FOREIGN KEY (idDireccion) REFERENCES direccion (idDireccion) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;


-- Insertar dos usuario en la tabla usuario --



/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
