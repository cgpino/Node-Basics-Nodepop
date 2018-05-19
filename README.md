# Node-Basics-Nodepop
Práctica del curso de fundamentos de Node de Keepcoding

## Requisitos
* NodeJS
* MongoDB

## ¿Cómo se usa?
* Clonar o descargar este repositorio
* Abrir una terminal dentro de la carpeta `nodepop` en el directorio raíz
* Ejecutar el comando `npm install` para instalar todas las dependencias del proyecto
* Arrancar un servidor local con MongoDB con una base de datos vacía. Ejemplo en Windows: `mongod.exe --dbpath C:\Users\cgpino\Documents\data\db --directoryperdb`.
* Ejecutar el comando `npm run install_db` para generar la base de datos MongoDB a través del archivo *json*
* Arrancar el servidor del servicio de API usando el comando `npm start`
* Abrir un navegador con la dirección `http://localhost:3000` y seguir las intrucciones indicadas

## Vista de la aplicación online
* Se puede acceder de forma online a una demostración de la propia aplicación ejecutándose sobre un servidor GNU/Linux a través del siguiente enlace: http://ec2-18-220-234-188.us-east-2.compute.amazonaws.com/

* Los archivos estáticos de la aplicación (imágenes y CSS) en este caso no están servidos por Express, si no por Nginx. Estos se pueden diferenciar gracias a su cabecera HTTP: `X-Owner: cgpino`. Ejemplo: http://ec2-18-220-234-188.us-east-2.compute.amazonaws.com/images/anuncios/bici.jpg

* Si se usa la IP del servidor en lugar de sus DNS, accederíamos a una página estática de Bootstrap: http://18.220.234.188/
