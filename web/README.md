# 📱 MiniLiga Express - Mobile

App móvil en Ionic para registrar resultados y listar partidos pendientes.

---

## 🚀 Instalación

```bash
cd mobile
bash ../scripts/init_mobile.sh
npm start
App disponible en 👉 http://localhost:8100/

🔗 API Service
src/app/services/api.service.ts se conecta al backend:

ts
Copiar código
getPendingMatches() {
  return this.http.get<any[]>(`${this.base}/api/matches?played=false`);
}
reportResult(id: number, payload: { home_score: number; away_score: number }) {
  return this.http.post(`${this.base}/api/matches/${id}/result`, payload);
}
🧭 Páginas
MatchesPage: lista de partidos sin resultado

ReportResultPage: formulario para registrar resultado

🧩 Capacitor
Para abrir en Android:

bash
Copiar código
npx cap add android
npx cap open android
