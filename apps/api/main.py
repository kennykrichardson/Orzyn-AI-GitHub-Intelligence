from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from apps.api.routes.repositories import router as repositories_router
from apps.api.routes.contributors import router as contributors_router
from apps.api.routes.analytics import router as analytics_router
from apps.api.routes.reports import router as reports_router
from apps.api.routes.history import router as history_router
from apps.api.routes.trends import router as trends_router
from apps.api.routes.comparison import router as comparison_router
from apps.api.routes.insights import router as insights_router
from packages.database.engine import engine
from packages.database.engine import Base
import packages.database.models
from apps.api.routes.ai import (
    router as ai_router,
)

app = FastAPI(
    title="Orzyn AI",
    description="AI-powered Developer Intelligence Platform",
    version="0.1.0",
)

Base.metadata.create_all(bind=engine)

# Register all routers
app.include_router(repositories_router)
app.include_router(contributors_router)
app.include_router(analytics_router)
app.include_router(reports_router)
app.include_router(history_router)
app.include_router(trends_router)
app.include_router(comparison_router)
app.include_router(insights_router)
app.include_router(ai_router)
# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "https://orzyn-ai.onrender.com",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {
        "name": "Orzyn AI",
        "version": "0.1.0",
        "status": "running",
        "message": "Welcome to Orzyn AI API",
    }


@app.get("/health")
async def health_check():
    return {
        "status": "healthy",
        "service": "orzyn-ai-api",
    }


@app.get("/api/v1/info")
async def api_info():
    return {
        "product": "Orzyn AI",
        "description": "Developer Intelligence Platform",
        "features": [
            "Repository Analysis",
            "Contributor Intelligence",
            "Engineering Metrics",
            "Risk Assessment",
            "AI Generated Reports",
        ],
    }