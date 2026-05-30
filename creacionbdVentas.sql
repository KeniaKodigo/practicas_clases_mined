-- Creando las tablas de la bd desde cero

CREATE TABLE clientes(
	-- id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY
	id SERIAL PRIMARY KEY, -- el id va ser autoincrementado (SERIAL)
	nombre VARCHAR(100) NOT NULL
);

-- tabla de perfil de cliente con foranea
CREATE TABLE perfil_clientes(
	id SERIAL PRIMARY KEY,
	direccion VARCHAR(150) NOT NULL,
	telefono VARCHAR(20),
	-- agregando un campo con una llave foranea
	id_cliente INT NOT NULL UNIQUE REFERENCES clientes(id)
);

-- tabla de ventas
CREATE TABLE ventas(
	id SERIAL PRIMARY KEY,
	-- agregando un campo con una llave foranea
	id_cliente INT NOT NULL UNIQUE REFERENCES clientes(id),
	fecha DATE NOT NULL
);

-- tabla de producto
CREATE TABLE productos(
	id SERIAL PRIMARY KEY,
	nombre VARCHAR(150) NOT NULL
);

-- tabla detalle de ventas (2 foraneas)
CREATE TABLE detalle_ventas(
	id_producto INT NOT NULL REFERENCES productos(id),
	id_venta INT NOT NULL REFERENCES ventas(id),
	cantidad INT NOT NULL,
	total DECIMAL(10,2)
);


SELECT * FROM clientes

-- Creando un nuevo schema
CREATE SCHEMA ventas_kenia;

-- creando tablas para el schema "ventas_kenia"
CREATE TABLE ventas_kenia.clientes(
	id SERIAL PRIMARY KEY,
	nombre VARCHAR(100) NOT NULL
);

CREATE TABLE ventas_kenia.perfil_clientes(
	id SERIAL PRIMARY KEY,
	direccion VARCHAR(150) NOT NULL,
	telefono VARCHAR(20),
	id_cliente INT NOT NULL UNIQUE REFERENCES ventas_kenia.clientes(id)
);

-- insertando un cliente en nuestro schema
INSERT INTO ventas_kenia.clientes(nombre) VALUES ('Juan Perez');
INSERT INTO ventas_kenia.clientes(nombre) VALUES ('Jacqueline Yanira Rodriguez');

-- mostrando los clientes
SELECT id, nombre FROM ventas_kenia.clientes
