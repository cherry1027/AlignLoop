# AlignLoop — Human-in-the-Loop Agent Harness

AlignLoop is a research prototype exploring how autonomous software agents can dynamically decide when human attention is valuable.

Instead of asking about every action—or operating with no oversight—AlignLoop evaluates confidence, impact, reversibility, verification cost, and ambiguity to recommend the right interaction.

## Live Demo

https://alignloop-agent-harness.charanvaranasi44.workers.dev

## Core Interaction States

- **Continue** — proceed autonomously
- **Assumption** — continue while recording an inferred decision
- **Clarify** — ask the human a focused question
- **Defer** — park a non-blocking question
- **Review** — request inspection of a consequential change
- **Approve** — require explicit authorization

## Prototype Pages

### 1. Agent Workspace

Demonstrates a simulated agent working on:

> Refactor authentication and migrate session storage to Redis.

Features:

- AI-generated task plan
- Interactive action timeline
- Deterministic alignment advisor
- Confidence, impact, reversibility, verification cost, and ambiguity signals
- Autonomy levels 1–5
- Adaptive Autonomy mode
- Clear explanations for every recommendation

### 2. Alignment Inspector

Provides a complete simulated decision trace:

- Autonomous actions
- Assumptions
- Clarifications
- Deferred questions
- Reviews and approvals
- Assumption ledger
- Focused review scope
- Full versus focused review-time estimates
- Synthetic comparison of different interaction strategies

## Example Advisor Rules

```text
Security-sensitive + difficult to reverse → Explicit Approval
High ambiguity → Clarify
High impact → Human Review
High verification cost + non-blocking → Defer
Moderate ambiguity → Flag Assumption
Low risk → Continue
