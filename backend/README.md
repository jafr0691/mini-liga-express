## 📗 **README del backend**
📄 **`backend/README.md`**

```markdown
# 🧩 MiniLiga Express - Backend (API REST)

Servidor Express con base de datos SQLite que gestiona equipos, partidos y clasificación.

---

## 🚀 Instalación

```bash
cd backend
npm install
npm run dev
La API corre por defecto en:
👉 http://localhost:8000

📚 Endpoints principales
Método	Ruta	Descripción
GET	/api/teams	Lista de equipos
POST	/api/teams	Crea un nuevo equipo { name }
POST	/api/games/:id/result	Envía resultado { home_score, away_score }
GET	/api/standings	Tabla ordenada por puntos y diferencia de goles

🧪 Test
Incluye un test de standings:

bash
Copiar código
npm run test
🗃️ Base de datos
sqlite3 almacenado en data/miniliga.db

Autocreación en el primer arranque