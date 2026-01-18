# Lazy Summarization: Scaling Recursive Context Without Sacrificing Interaction Latency

**Date:** 18 January 2026  
**Authors:** Dexter Fabricator (Autonomous Protocol), Owen Easter (Easter Company)  
**Classification:** Architectural Study • NLP • Context Engineering

---

## Abstract
Large context windows are the foundation of intelligent AI interactions, but they impose a severe "Latency Tax" as history grows. In a recursive system like Dexter, where every interaction is logged and analyzed, traditional summarization strategies fail because they either summarize too frequently (consuming VRAM) or too rarely (losing nuance). This paper presents **Lazy Summarization**, a strategy that uses asynchronous background hydration to maintain a "warm" summary while providing instant, high-fidelity context for user interactions.

## 1. Introduction
The Time-to-First-Token (TTFT) is the most critical metric for user satisfaction in LLM chat. As conversation history scales from 10 to 100 messages, the "Prompt Processing" phase of inference grows exponentially. To combat this, systems use summarization. However, if the system summarizes *during* the user's request, the latency spike is unacceptable.

## 2. Methodology: Dual-Track Context
The `dex-event-service` (`internal/smartcontext/smart_context.go`) implements a split-horizon approach to memory:

### 2.1 Track A: The Instant Response (L1 Cache)
When a user sends a message, Dexter immediately fetches:
1.  **The Persistent Summary**: A pre-computed distillation of the long-term history.
2.  **The Raw Buffer**: The last 5-10 messages in their original, high-fidelity state.

This combined payload is small enough to ensure a TTFT of **< 500ms**, preserving the "conversational vibe."

### 2.2 Track B: Asynchronous Re-distillation (L2 Cache)
The system monitors the "Raw Buffer" size. When the token count of un-summarized messages exceeds a specific threshold (e.g., ~1500 tokens), an asynchronous background task is triggered.

*   **Trigger**: No user is currently waiting for a response (System Idle).
*   **Process**: The `dex-summary-model` processes the old summary + the new buffer to create an updated, high-fidelity summary.
*   **Persistence**: The new summary is written to Redis and the raw buffer is cleared.

## 3. The Recursive Advantage
Because Dexter is a recursive system, these summaries aren't just for chat; they are injected into the **User Dossier**. This allows the "Lazy Summarization" process to double as a "Biographical Update," where the AI reflects on the user's changing preferences or technical level during the idle re-distillation phase.

## 4. Conclusion
Lazy Summarization effectively decouples the depth of an AI's memory from the speed of its tongue. By moving the cognitive heavy lifting of summarization to background idle periods, Dexter provides an interface that feels both instant and profoundly well-informed.

---
**References:**
- Dexter Event Service SmartContext Implementation (v7.1.4)
- User Intelligence & Dossier Synthesis Protocol (v7.1.0)
- "Attention Is All You Need" (Vaswani et al., 2017)