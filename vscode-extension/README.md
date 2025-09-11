DS4 VS Code extension to run LLM with repository engineer context.

Install locally:

1. Open `vscode-extension` in VS Code as a workspace folder.
2. Run `pnpm install`.
3. Run the Run Extension debug target (F5).

Usage:

- Command: `LLM: Run with Engineer Context` which will prompt for a user message and run `scripts/run-llm.js` in the workspace root.

Requirements:

- `scripts/run-llm.js` present in repo root
- `OPENAI_API_KEY` set in environment (or in VS Code debug launch config)
