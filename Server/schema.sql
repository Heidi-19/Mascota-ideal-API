CREATE DATABASE bdmascotaideal;

USE bdmascotaideal;

CREATE TABLE usuario (
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
-- INSERT INTO --

-- SELECT * FROM TABLE --

INSERT INTO `mascota` (`idMascota`, `nombre`, `edad`, `peso`, `especie`, `raza`, `caracteristicas`, `antecedentes`, `disponiblilidad`) VALUES ('1', 'Loki', '3', '50.0', 'Canino', 'Labrador', 'Color cafe', 'Callejero', 'No disponible');

INSERT INTO `mascota` (`idMascota`, `nombre`, `edad`, `peso`, `especie`, `raza`, `caracteristicas`, `antecedentes`, `disponiblilidad`) VALUES ('2', 'Garfield', '5', '5.5', 'Felino', 'Gato egipcio', 'Blanco', 'Domestico', 'Disponible');

INSERT INTO `mascota` (`idMascota`, `nombre`, `edad`, `peso`, `especie`, `raza`, `caracteristicas`, `antecedentes`, `disponiblilidad`) VALUES ('3', 'Pepe', '2', '0.200', 'Ave', 'Loro ', 'Color de plumas verde con rojo', 'Domestico', 'No disponible');

INSERT INTO `direccion` (`idDireccion`, `estado`, `ciudad`, `colonia`) VALUES ('1', 'Oaxaca', 'Tlaxiaco', 'Llano Yosovee');

INSERT INTO `direccion` (`idDireccion`, `estado`, `ciudad`, `colonia`) VALUES ('2', 'Oaxaca', 'Huajuapan de Leon', 'El mirador');

INSERT INTO `direccion` (`idDireccion`, `estado`, `ciudad`, `colonia`) VALUES ('3', 'Oaxaca', 'Pinotepa Nacional', 'Centro');

INSERT INTO `sesion` (`idSesion`, `nombreUsuario`, `password`, `email`) VALUES ('1', 'Juan123', 'juanchis', 'juan@outlook.com');

INSERT INTO `sesion` (`idSesion`, `nombreUsuario`, `password`, `email`) VALUES ('2', 'SofiaVR', 'sofia123', 'sofia12@gmail.com');

INSERT INTO `sesion` (`idSesion`, `nombreUsuario`, `password`, `email`) VALUES ('3', 'Jose12SR', 'joselucho', 'joseSVR@gmail.com');

INSERT INTO `usuario` (`idUsuario`, `idRol`, `nombre`, `apellidoPat`, `apellidoMat`, `Edad`, `Sexo`, `idSesion`, `idDireccion`) VALUES ('1', '1', 'Juan', 'Reyes', 'Castro', '28', 'Hombre', '1', '1');

INSERT INTO `usuario` (`idUsuario`, `idRol`, `nombre`, `apellidoPat`, `apellidoMat`, `Edad`, `Sexo`, `idSesion`, `idDireccion`) VALUES ('2', '2', 'Sofia', 'Vazquez', 'Rojas', '18', 'Mujer', '2', '2');

INSERT INTO `usuario` (`idUsuario`, `idRol`, `nombre`, `apellidoPat`, `apellidoMat`, `Edad`, `Sexo`, `idSesion`, `idDireccion`) VALUES ('3', '1', 'Jose', 'Valencia', 'Santiago', '23', 'Hombre', '3', '3');

INSERT INTO `rol` (`idRol`, `responsable`, `adoptante`) VALUES ('1', '1', '1');


INSERT INTO `rol` (`idRol`, `responsable`, `adoptante`) VALUES ('2', '1', '2');

INSERT INTO `solicitudesadopcion` (`idSolicitud`, `idMascota`, `idUsuario`, `cantidad`) VALUES ('1', '1', '2', '1');

INSERT INTO `solicitudesadopcion` (`idSolicitud`, `idMascota`, `idUsuario`, `cantidad`) VALUES ('2', '3', '1', '1');

INSERT INTO `solicitudesadopcion` (`idSolicitud`, `idMascota`, `idUsuario`, `cantidad`) VALUES ('3', '2', '3', '1');


-- Cambiar tipo de dato en tabla rol--

ALTER TABLE `rol` CHANGE `adoptante` `adoptante` VARCHAR(20) NOT NULL;
ALTER TABLE `rol` CHANGE `responsable` `responsable` VARCHAR(20) NOT NULL;

--cambiar tipo de dato en tabla adopcionconfirmada--

ALTER TABLE `adopcionconfirmada` CHANGE `realizado` `realizado` VARCHAR(35) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL;

ALTER TABLE `rol` CHANGE `responsable` `responsable` VARCHAR(35) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL;

ALTER TABLE `rol` CHANGE `adoptante` `adoptante` VARCHAR(35) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL;

------------------------------------------------------------------------------------------------------------------------

UPDATE `rol` SET `responsable` = 'responsable', `adoptante` = 'adoptante' WHERE `rol`.`idRol` = 1;

UPDATE `rol` SET `responsable` = 'responsable', `adoptante` = 'adoptante' WHERE `rol`.`idRol` = 2;

UPDATE `adopcionconfirmada` SET `realizado` = 'No realizado' WHERE `adopcionconfirmada`.`idAdopcion` = 1;

INSERT INTO `adopcionconfirmada` (`idAdopcion`, `fecha`, `realizado`, `detalles`, `idSolicitud`) VALUES ('1', '2023-12-03 00:36:14.000000', 'No realizado', 'La mascota fue dada en adopcion anteriormente', '1');


INSERT INTO `adopcionconfirmada` (`idAdopcion`, `fecha`, `realizado`, `detalles`, `idSolicitud`) VALUES ('2', '2023-12-03 00:33:54.000000', 'Realizado', 'La adopcion de la mascto fue un éxito', '2');

INSERT INTO `adopcionconfirmada` (`idAdopcion`, `fecha`, `realizado`, `detalles`, `idSolicitud`) VALUES ('3', '2023-12-01 17:37:22', 'No realizado', 'La mascota fue dada en adopcion anteriormente', '3');


/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
