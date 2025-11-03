📘 Backend - API de Gestión de Standings
📖 Descripción general

Esta API está desarrollada en Laravel 10.49.1 y permite gestionar los resultados de los partidos y calcular la tabla de posiciones (standings) de los equipos.
Se implementa un flujo completo de registro de juegos, actualización de resultados y cálculo dinámico de puntos según las reglas estándar del fútbol:

🥇 3 puntos por victoria

⚖️ 1 punto por empate

❌ 0 puntos por derrota

⚙️ Requisitos previos

PHP >= 8.1

Composer

MySQL o SQLite

Laravel 10.49.1

Node.js (solo necesario si se integra con el frontend)

🚀 Instalación
# Clonar el repositorio
git clone https://github.com/jafr0691/mini-liga-express.git

# Entrar a la carpeta del backend
cd backend

# Instalar dependencias
composer install

# Crear el archivo de entorno
cp .env.example .env

# Generar la key de la aplicación
php artisan key:generate


Configura la base de datos en el archivo .env (en este caso usando SQLite):

DB_CONNECTION=sqlite
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=C:\www\mini-liga-express-seed\backend\database\database.sqlite
DB_USERNAME=root
DB_PASSWORD=


Ejecuta las migraciones y datos iniciales:

php artisan migrate --seed

📡 Endpoints principales
Método	Endpoint	Descripción
GET	/api/teams	Listar todos los equipos
POST	/api/teams	Crear un nuevo equipo (requiere { name })
GET	/api/games	Listar todos los partidos
POST	/api/games/{id}/result	Registrar o actualizar el resultado de un partido (requiere { home_score, away_score })
GET	/api/standings	Obtener la tabla de posiciones calculada
🧠 Estructura del proyecto
app/
 ├── Http/
 │   └── Controllers/
 │        └── Api/
 │             ├── GameController.php
 │             ├── ResultController.php
 │             ├── StandingController.php
 │             └── TeamController.php
 ├── Services/
 │   ├── GameService.php
 │   └── StandingService.php
tests/
 └── Feature/
      ├── GameTest.php
      └── StandingTest.php

✅ Tests

Ejecutar las pruebas automatizadas con:

php artisan test


O directamente con PHPUnit:

vendor/bin/phpunit

📊 Cobertura actual de pruebas

StandingTest: Verifica el cálculo correcto de los puntos en la tabla de posiciones.

GameTest: Valida el registro y actualización de resultados de los partidos.