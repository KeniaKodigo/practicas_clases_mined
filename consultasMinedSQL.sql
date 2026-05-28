-- los 2 guiones indican comentario
-- Practica de consultas basicas SQL (DML)

-- mostrar todos los alojamientos de la bd
SELECT * FROM accomodations
-- SELECT id, name, address, description, image FROM  accomodations;

-- insertar un nuevo alojamiento ('')
-- INSERT INTO accomodations (name, address, description, image) VALUES('Hostal Los Chacones', 'El Pital, San Ignacio', 'Hostal con una vista hacia al bosque', 'hola')

SELECT * FROM bookings
-- actualizar una reservacion 176 (el booking y el status)
UPDATE bookings SET booking = 'BK27052026', status = 'CONFIRMED' 
WHERE id = 176

-- eliminar la reservacion 159
DELETE FROM bookings WHERE id = 159

-- mostrar las reservaciones donde la fecha de salida este entre el mes de abril y junio 2026
-- OPCION 1 (UTILIZAR EL OPERADOR AND)
SELECT id, booking, check_in_date, check_out_date, total_amount FROM bookings
WHERE check_out_date >= '2026-04-01'
and check_out_date <= '2026-06-01' 

-- OPCION 2 (BETWEEN)
SELECT id, booking, check_in_date, check_out_date, total_amount FROM bookings
WHERE check_out_date BETWEEN '2026-04-01' AND '2026-06-01'

-- mostrar toda la info de las reservaciones con su alojamiento (nombre) y el usuario (nombre)
SELECT 
	b.id, 
	b.booking, 
	b.check_in_date, 
	b.check_out_date, 
	b.total_amount,
	-- agregando un alias al campo name de la tabla accomodations
	a.name AS alojamiento,
	u.name AS usuario
FROM bookings AS b JOIN accomodations AS a ON
b.accomodation_id = a.id JOIN users AS u ON
b.user_id = u.id

-- devolver el monto total de las reservaciones (total de reservaciones)
SELECT SUM(total_amount) AS total_reservaciones FROM bookings