# Zerodha clone

Please try to implement the project on your own before proceeding to the lectures & code.

## Local setup

1. Install dependencies in each app: `backend`, `frontend`, and `dashboard` — run `npm install`.
2. Create **`backend/.env`** locally (not committed). Example values:
   - `PORT=3002`
   - `MONGO_URL=mongodb://127.0.0.1:27017/zerodha` (or your MongoDB Atlas URI)
3. Optional: `dashboard/.env` with `PORT=3001` if the dashboard should not use port 3000.
4. Start MongoDB, then run `npm start` in `backend`, `frontend`, and `dashboard` (three terminals).
