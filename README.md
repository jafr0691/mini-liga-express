# ⚽ MiniLiga Express

Aplicación completa (backend + web + móvil) para gestionar una mini liga de fútbol.  
Incluye API REST con standings dinámicos, frontend Angular y app móvil Ionic + Capacitor.

---

## 📂 Estructura del proyecto

mini-liga-express/
│
├── backend/ # API Express + SQLite
├── web/ # Frontend Angular
├── mobile/ # App móvil Ionic
├── DECISIONES.md # Trade-offs técnicos
├── openapi.yaml # Especificación de API (opcional)
└── README.md # Este archivo

yaml
Copiar código

---

## 🚀 Requisitos generales

- Node.js ≥ 18  
- npm ≥ 9  
- SQLite3 (instalado automáticamente con dependencias)
- Git

---

## ⚙️ Setup rápido

```bash
# Clonar el repositorio
git clone https://github.com/jafr0691/mini-liga-express.git
cd mini-liga-express

# Inicializar todos los subproyectos
bash scripts/init_all.sh
Cada carpeta tiene su propio README con instrucciones específicas (backend, web, móvil).

🧭 MVP
Endpoints: GET /teams, POST /teams, POST /matches/{id}/result, GET /standings

Frontend Web: tabla de standings

Mobile App: lista de partidos y formulario de resultados

🧪 Test rápido
bash
Copiar código
cd backend
npm run test
📦 Deploy sugerido
Backend: Render, Railway o Fly.io

Frontend: Netlify o Vercel

Mobile: Capacitor + Android Studio / Xcode

👨‍💻 Autor
Jesús Farías
Desarrollador Full Stack PHP / Node / Angular / Ionic
📧 jesusfarias0691@gmail.com

