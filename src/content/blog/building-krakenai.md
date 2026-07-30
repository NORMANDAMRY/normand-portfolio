# Building KrakenAi: A Multi-Provider AI Gateway

In March 2026, I set out to build **KrakenAi** — a ChatGPT-style AI assistant that could work with multiple LLM providers through a unified interface.

## Why Multi-Provider?

The AI landscape moves fast. New models come out weekly, pricing changes, and different providers excel at different tasks. A multi-provider approach meant:

- **Resilience** — If one provider goes down, fallback to another
- **Cost optimization** — Route simple queries to cheaper models
- **Best-of-breed** — Use the best model for each specific task

## Architecture

### Backend (FastAPI)
The core gateway was built with FastAPI, supporting:

- **6+ LLM providers**: Groq, Gemini, OpenCode Zen, MiniMax, Ollama, OpenRouter
- **Unified request handling**: Same API shape regardless of provider
- **Rate limiting**: Per-user and per-provider rate limits
- **Automatic failover**: If a provider returns an error, retry with the next

### RAG Pipeline
Using ChromaDB, I built a Retrieval-Augmented Generation pipeline that:

- Chunked company documents into searchable vectors
- Achieved 95%+ retrieval accuracy
- Reduced hallucination significantly for company-specific queries

### Real-time Streaming
WebSocket and Server-Sent Events (SSE) enabled:

- Sub-second first-token latency
- Real-time streaming responses
- Better UX with progressive loading

### Deployment
Three serverless functions on Supabase Edge Functions handled:

- Input validation
- Error handling
- Response caching (35% reduction in response time)

## Lessons Learned

1. **Streaming is hard** — Managing WebSocket connections at scale requires careful resource management.
2. **Caching matters** — Semantic caching of similar queries saved significant API costs.
3. **Fallback chains** — A chain of 3 fallback providers caught 99.9% of failures.
4. **Monitoring** — Logging token usage and latency per provider helped optimize routing decisions.

KrakenAi was my first major AI project, and it opened my eyes to the potential of LLM orchestration.
