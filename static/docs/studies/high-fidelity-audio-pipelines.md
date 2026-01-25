# High-Fidelity Audio Pipelines: Engineering Low-Latency Voice Interaction in Distributed AI

**Date:** 05 January 2026  
**Authors:** Dexter Fabricator (Autonomous Protocol), Owen Easter (Easter Company)  
**Classification:** Signal Processing • Voice-to-Voice • Real-Time Systems

---

## Abstract

Voice interaction is the most intimate and technically demanding form of human-AI engagement. Achieving a "zero-latency" feel requires a complex synchronization of signal processing, voice activity detection (VAD), and distributed transcription. This paper explores the **Dexter Audio Pipeline**, which decodes 48kHz Opus streams into raw PCM buffers, manages VAD thresholds via Redis persistence, and utilizes a local Neural STT implementation to achieve high-fidelity voice-to-voice interaction.

## 1. Introduction: The Latency Barrier

In voice communication, a delay of more than 1.5 seconds feels like a "technical error" to a human user. To make an AI feel "present," the pipeline must process audio in real-time, detect when the user has finished speaking (without premature cutoff), and transcribe the results instantly.

## 2. Methodology: The Inbound Pipeline

The `dex-discord-service` (`audio/recorder.go`) manages the capture phase:

### 2.1 Decoding and Buffering

1.  **Opus to PCM**: Discord sends voice data as Opus packets. Dexter decodes these to `s16le` 48kHz stereo instantly.
2.  **User Buffers**: Each user in a voice channel is assigned an independent memory buffer to prevent cross-talk contamination.

### 2.2 Voice Activity Detection (VAD)

Dexter uses a time-weighted silence threshold:

- **Recording Start**: Triggered the moment non-silent PCM data is detected.
- **Recording Stop**: Triggered only after **500ms of consecutive silence**. This prevents cutting off users who take a breath mid-sentence.
- **Minimum Duration**: Any recording shorter than **0.75s** is discarded as "noise," reducing phantom transcription tasks.

## 3. Persistence and Transcription

Once a "Stop" event is triggered, the PCM buffer is converted to WAV and written to Redis with a unique key: `discord-audio:<start>-<stop>-<user>-<channel>`.

The service then calls the CLI: `dex stt -k <redisKey>`. By using Redis as an intermediary, we decouple the audio capture (low CPU) from the transcription inference (high GPU/NPU), ensuring the audio stream remains smooth even during heavy inference.

## 4. The Outbound Mixer

For Dexter to "speak," the `audio/mixer.go` implements **Music Ducking**:

- When the TTS engine emits a voice stream, the "Music" channel (if active) is automatically ducked to **20% volume**.
- The mixer merges the streams and encodes them back into Opus for delivery to Discord.

## 5. Conclusion

High-fidelity voice interaction is a game of milliseconds. By optimizing the transition from compressed Opus to raw PCM and leveraging Redis for high-speed inter-service audio handover, Dexter provides a voice experience that rivals cloud-based competitors while running entirely on local hardware.

---

**References:**

- FFmpeg Signal Processing Library
- OpenAI Whisper: Robust Speech Recognition via Large-Scale Weak Supervision
- rhasspy/piper: A fast, local Neural TTS Engine
- Discord API Voice Specification
