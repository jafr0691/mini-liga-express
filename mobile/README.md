📱 Mobile App (Ionic + Angular)
⚽ Aplicación Móvil – Torneos de Fútbol

Aplicación móvil desarrollada con Ionic + Angular para gestionar los torneos, visualizar partidos, registrar resultados y sincronizar con el backend en Laravel.

🚀 Características principales

📋 Listado de partidos pendientes por jugar.

📝 Registro de resultados para cada partido.

🔄 Sincronización en tiempo real con la API del backend (Laravel).

⚡ Interfaz rápida y moderna con Ionic Framework.

📱 Listo para Android e iOS mediante Capacitor.

🧩 Tecnologías usadas

Ionic Framework 7+

Angular 17+

Capacitor

TypeScript

RxJS

📂 Estructura del proyecto
mobile/
│
├── src/

│   ├── app/
│   │   ├── pages/
│   │   │   ├── matches/          # Lista de partidos sin resultado
│   │   │   └── report-result/    # Página para registrar resultados
│   │   ├── services/
│   │   │   └── api.service.ts    # Conexión HTTP con el backend Laravel
│   │   ├── app.component.ts      # Componente raíz
│   │   ├── app.routes.ts         # Definición de rutas
│   │   └── app.module.ts         # Configuración principal
│   │
│   ├── environments/
│   │   ├── environment.ts        # Configuración local (API base URL)
│   │   └── environment.prod.ts   # Configuración producción
│   │
│   ├── theme/                    # Estilos globales (CSS / SCSS)
│   └── index.html                # HTML principal
│
├── capacitor.config.ts           # Configuración de Capacitor
├── package.json                  # Dependencias del proyecto
└── README.md                     # Este archivo


⚙️ Instalación y configuración
1️⃣ Clonar el repositorio
git clone git@github.com:jafr0691/mini-liga-express.git
cd mobile

2️⃣ Instalar dependencias
npm install

3️⃣ Configurar entorno

Edita el archivo:

src/environments/environment.ts


Ejemplo:

export const environment = {
  production: false,
  apiUrl: 'http://localhost:8000/api'
};

▶️ Ejecución del proyecto
💻 En entorno local (navegador)
ionic serve


Disponible en 👉 http://localhost:8100

📱 En dispositivo o emulador Android
npx cap add android
npx cap open android


Luego ejecuta desde Android Studio o mediante:

ionic capacitor run android

🔗 API del Backend

El servicio principal se encuentra en:

src/app/services/api.service.ts

Ejemplo de métodos usados:

getPendingGames() {
  return this.http.get<any[]>(`${this.base}/api/games?played=false`);
}

reportResult(id: number, payload: { home_score: number; away_score: number }) {
  return this.http.post(`${this.base}/api/games/${id}/result`, payload);
}

🧭 Páginas principales
Página	Descripción
GamesPage	Lista los partidos pendientes y permite acceder a su formulario.
ReportResultPage	Formulario para registrar el resultado de un partido.