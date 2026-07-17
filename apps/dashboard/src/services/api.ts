import axios from "axios";

const API_URL = "https://orzyn-api.onrender.com";

export const api = axios.create({
  baseURL: API_URL,
  timeout: 30000,
});

let backendReady = false;
let wakingPromise: Promise<void> | null = null;

async function wakeBackend() {
  if (backendReady) return;

  if (wakingPromise) {
    return wakingPromise;
  }

  wakingPromise = (async () => {
    const maxAttempts = 6;

    for (let i = 0; i < maxAttempts; i++) {
      try {
        await fetch(`${API_URL}/health`, {
          cache: "no-store",
        });

        backendReady = true;
        return;
      } catch {
        await new Promise((resolve) =>
          setTimeout(resolve, 2000)
        );
      }
    }
  })();

  await wakingPromise;
  wakingPromise = null;
}

api.interceptors.request.use(
  async (config) => {
    await wakeBackend();
    return config;
  },
  (error) => Promise.reject(error)
);