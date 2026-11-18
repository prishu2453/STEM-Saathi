# Running STEM Saathi with the AI Tutor

The Gemini key lives only on the server (`server.ts`); the browser never sees it.

1. Get a key at https://aistudio.google.com/apikey
2. `cp .env.example .env` and set ONE key (never commit `.env`). The tutor works with:
   - `GEMINI_API_KEY` (Google), `ANTHROPIC_API_KEY` (Claude), `GROQ_API_KEY` (free tier),
     `OPENROUTER_API_KEY` (has free models), or `OPENAI_API_KEY`.
   - Free & offline: install Ollama, then `OPENAI_API_KEY=ollama`,
     `OPENAI_BASE_URL=http://localhost:11434/v1`, `OPENAI_MODEL=llama3.2`.
   - Check which one is active: http://localhost:3000/api/mentor/status
3. `npm install --legacy-peer-deps`
4. Dev: `npm run dev` → http://localhost:3000
5. Production: `npm run build && npm start`. On any host (Cloud Run, Render, Railway)
   set `GEMINI_API_KEY` as a secret/environment variable and run `npm start`.
   Note: `PORT` is fixed at 3000 in server.ts; change it if your host assigns a port.

If the tutor shows "GEMINI_API_KEY is not configured", the key is missing from the
server's environment. "API key not valid" means the key itself is wrong.
