# 🧠 DECISIONES TÉCNICAS — MiniLiga Express

## 🎯 Objetivo del proyecto
Crear una aplicación completa de gestión de una mini liga de fútbol con:
- **Backend:** Laravel 10 (API REST)
- **Web:** Angular 18 (panel de standings y equipos)
- **Móvil:** Ionic + Capacitor (reporte de resultados)
- **Base de datos:** SQLite (modo local por simplicidad)

---

## ⚙️ DECISIONES PRINCIPALES

### 1. **Frameworks elegidos**
- **Laravel** por su rapidez para prototipar APIs y manejo nativo de migraciones y Eloquent ORM.
- **Angular** para la web por su estructura modular y facilidad con standalone components.
- **Ionic + Capacitor** para móvil por integración directa con Angular y posibilidad de portar a Android/iOS.

**Trade-off:**  
Laravel + Angular + Ionic implica varios entornos separados y algo más de configuración inicial, pero ofrece escalabilidad y separación clara entre frontend y backend.

---

### 2. **Base de datos**
- Se usó **SQLite** para desarrollo rápido sin necesidad de MySQL/PostgreSQL.
- Se define el archivo en `database/database.sqlite`.

**Trade-off:**  
SQLite no soporta concurrencia ni transacciones complejas, pero simplifica la instalación para un MVP.

---

### 3. **Estructura de carpetas**
mini-liga-express-seed/
│
├── backend/ # API Laravel
├── web/ # Angular frontend
├── mobile/ # Ionic mobile app
├── scripts/ # Bash/PowerShell init scripts
└── DECISIONES.md # Documento de decisiones técnicas

yaml
Copiar código

---

### 4. **Lógica de puntos**
- Victoria = 3 puntos  
- Empate = 1 punto  
- Derrota = 0 puntos  
- Orden de tabla: `points ↓, goal_diff ↓, goals_for ↓`

**Decisión:** mantener la lógica de puntos en el backend (Laravel)  
para que tanto web como móvil consuman la misma fuente de verdad.

---

### 5. **Comunicación entre proyectos**
- Web y móvil usan la misma API (`http://localhost:8000/api/...`).
- Cada entorno define su variable `API_URL` en su `.env` o `environment.ts`.

---

## 🧪 PRÓXIMOS PASOS

1. **Agregar autenticación (JWT)** para manejar usuarios o árbitros.
2. **Persistir imágenes en mobile** (usando `@capacitor/camera`).
3. **Crear un modo torneo** con fixture automático.
4. **Agregar tests E2E** en web y móvil.
5. **Desplegar API en un servicio cloud** (por ejemplo, Render, Vercel + SQLite remoto o MySQL).

---

## ⚖️ TRADE-OFFS RESUMIDOS

| Decisión                        | Ventaja principal                  | Desventaja |
|----------------------------------|------------------------------------|-------------|
| Laravel como backend             | Productividad y claridad           | Requiere PHP 8.1+ |
| SQLite local                     | Sin configuración                  | No multiusuario |
| Angular standalone               | Menos boilerplate                  | Cambia sintaxis de imports |
| Ionic con Angular                | Reuso de código                    | Peso inicial alto |
| Separar apps por carpeta         | Módulos claros y evaluables        | Multiplica repos locales |

---

## 📘 Documentos relacionados
- [`openapi.yaml`](./openapi.yaml) — especificación de los endpoints.
- `/scripts/init_*.sh` — scripts de inicialización automática.