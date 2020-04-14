# Suscripción pagada en Decibel

## Resumen

Este proyecto consiste en la elaboración de una herramienta dentro de una plataforma musical ficticia, Decibel, que ayuda al usuario a identificar si el número de la tarjeta que ingresa es válido o no al momento de realizar un pago.

***

## Presentación 

El [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn),
también llamado algoritmo de módulo 10, es un método de suma de verificación,
se utiliza para validar números de identificación; tales como el IMEI de los
celulares, tarjetas de crédito, etc.

Este algoritmo es simple. Obtenemos la reversa del número a verificar (que
solamente contiene dígitos [0-9]); a todos los números que ocupan una posición
par se les debe multiplicar por dos, si este número es mayor o igual a 10,
debemos sumar los dígitos del resultado; el número a verificar será válido si
la suma de sus dígitos finales es un múltiplo de 10.

![gráfica de algoritmo de Luhn](https://www.101computing.net/wp/wp-content/uploads/Luhn-Algorithm.png)

## Investigación UX

### Usuarios y objetivo

* Los principales usuarios de esta herramienta son comercios que recién están comenzando en ventas online y que necesitan un número válido de tarjeta para generar el cobro de sus productos, pero no tienen integrada en su interfaz el cobro directo por otra plataforma. Por otra parte, también definimos a los usuarios que necesitan utilizar la herramienta dentro de la plataforma, quienes serían los propios clientes, personas entre 25 a 60 años que quieren utilizar una plataforma para escuchar música en base a suscripciones pagadas mediante tarjeta de crédito.

El objetivo de nuestros usuarios es saber si el número de la tarjeta de crédito que están ingresando es válido o no para así poder realizar una compra dentro de la plataforma.

### Solución de problemas y necesidades

* En esta ocasión dimos un look colorido y moderno a la aplicación por tratarse de un usuario joven (entre 25 a 60 años) y el rubro del servicio ofrecido: música. El producto que ofrecemos, el validador, soluciona in situ la interrogante sobre la validez de la tarjeta que el cliente quiere ocupar. Luego de que el sitio le pide los datos de consumidor (nombre, apellidos y e-mail) como último paso le solicita escribir los dígitos de su tarjeta y existe un botón a continuación para validar este número instantáneamente, lo que permite que, si es una tarjeta válida, el cliente tiene la seguridad de que su pago se realizará sin problemas, o si es una tarjeta inválida, tiene la posibilidad de ingresar el número de otra tarjeta en su poder o pedir ayuda a su banco para solucionar lo que sea que impida su utilización.


### Primer prototipo 

Trabajando en parejas aprenderán a construir una aplicación web que interactuará
con lx usuarix final a través del navegador, utilizando HTML, CSS y JavaScript
como tecnologías.

### Feedback 

Trabajando en parejas aprenderán a construir una aplicación web que interactuará
con lx usuarix final a través del navegador, utilizando HTML, CSS y JavaScript
como tecnologías.

### Prototipo final

Trabajando en parejas aprenderán a construir una aplicación web que interactuará
con lx usuarix final a través del navegador, utilizando HTML, CSS y JavaScript
como tecnologías.


