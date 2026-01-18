# Architectural Study: Cognitive Loops in Chat vs. Agents

## 1. Overview
As of Dexter version 7.1.4, there is a distinct architectural separation between how **Background Protocols** (Agents) and **Interactive Sessions** (Chat) process cognitive tasks. This document explores the reasoning behind this split, the trade-offs involved, and potential paths for future convergence.

## 2. Current State

### 2.1 The Agent Cognitive Loop (Surgical Accuracy)
Agents (Sentry, Researcher, Imaginator) utilize a "Trial-and-Error" loop defined in `internal/agent/base.go`.

*   **Mechanism**: A multi-attempt process (up to 5 retries) where the model's output is subjected to strict validation.
*   **Validation Tiers**:
    *   **Syntax**: Validates Markdown structure and JSON integrity.
    *   **Schema**: Ensures mandatory sections (e.g., `## Summary`, `**Priority**`) are present.
    *   **Logic**: Protocol-specific checks (e.g., ensuring a Blueprint contains at least one technical step).
*   **Self-Correction**: If validation fails, the model receives a "Rejection Report" containing surgical guidance on its errors and is asked to resubmit.
*   **Audit**: Every run produces a `system.analysis.audit` event, providing a full "black box" recording of Dexter's reasoning process.

**Primary Goal**: Structure over Speed. High-fidelity output is required because these reports drive other automated system behaviors.

### 2.2 The Chat Interaction (Fluid Latency)
Interactive sessions (Private DMs, Public Group Chat, Voice Transcription) utilize a direct "Single-Pass" execution.

*   **Mechanism**: A single call to `ChatStream` via the Ollama API.
*   **Output**: Streamed token-by-token directly to the user in real-time.
*   **Validation**: None. The system assumes the model will follow the system prompt's persona and rules correctly on the first try.
*   **Audit**: Basic logging of the final response, but no "thought process" or "retry history" is captured.

**Primary Goal**: Speed over Structure. Instant feedback is required to maintain the "vibe" of a human-like conversation.

## 3. The "Loop Gap" Analysis

### 3.1 Risks of the Direct Approach
By skipping the cognitive loop in Chat, we accept the following risks:
1.  **Persona Drift**: The model might break its "Professional/Conservative" persona, use forbidden emojis, or use "As an AI..." boilerplate.
2.  **Technical Leaks**: The model might accidentally output internal Redis keys, Event IDs, or raw JSON intended for system use.
3.  **Instruction Ignorance**: The model may ignore complex negative constraints (e.g., "Don't repeat the user's question").

### 3.2 Constraints of the Loop Approach
Integrating the full loop into Chat presents significant UX challenges:
1.  **Latency Penalty**: A single retry adds 3-5 seconds of delay. In a 3-attempt loop, a user might wait 15 seconds for a simple greeting.
2.  **Streaming Incompatibility**: You cannot "un-stream" a message. If validation fails after the stream finishes, the message must be edited or deleted, which feels "glitchy" to the user.

## 4. Potential Future: The "Hybrid Loop"
Should we decide to bridge this gap, a "Light Cognitive Loop" or "Asynchronous Validation" model is proposed:

1.  **Tiered Response**:
    *   **Attempt 1 (Streamed)**: The user sees the immediate response.
    *   **Background Check**: A lightweight CPU-locked model (e.g., `dex-fast-engagement-model`) analyzes the completed response for persona violations.
2.  **Long-Term Correction**:
    *   If a violation is found, the system does **not** retry immediately (to save VRAM/Latency).
    *   Instead, it injects a "Self-Correction" note into the **User's persistent Dossier**.
    *   On the *next* message, Dexter is prompted: "In your last response you used an emoji, which is against rules. Do not do it again."
3.  **Fatal Interception**:
    *   Only if the background check detects a **High-Risk Leak** (e.g. system passwords or internal data) would the message be forcibly deleted or redacted.

## 5. Conclusion
The current split is intentional and prioritizes the user's immediate experience in chat while ensuring system stability in background tasks. Moving Chat into a strict cognitive loop would require significant improvements in inference speed or a shift in user expectation.

**Next Steps**: Revisit this study when **Llama 4** or similar high-speed local models are integrated, or if persona consistency becomes a frequent issue in production usage.

---
*Date of Study: 18 January 2026*
*Architect: Dexter Fabricator (AI)*
