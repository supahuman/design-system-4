import * as vscode from 'vscode';
import { spawn } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
  const cmd = vscode.commands.registerCommand(
    'llm.runWithEngineerContext',
    async () => {
      const workspaceFolders = vscode.workspace.workspaceFolders;
      if (!workspaceFolders) {
        vscode.window.showErrorMessage(
          'Open a workspace folder to use this command.'
        );
        return;
      }
      const rootPath = workspaceFolders[0].uri.fsPath;
      const ctxPath = path.join(rootPath, 'docs', 'ENGINEER_CONTEXT.md');
      if (!fs.existsSync(ctxPath)) {
        vscode.window.showErrorMessage(
          'docs/ENGINEER_CONTEXT.md not found in workspace root.'
        );
        return;
      }

      const userPrompt = await vscode.window.showInputBox({
        prompt: 'User prompt to send to LLM',
      });
      if (!userPrompt) return;

      const output = vscode.window.createOutputChannel('LLM: Engineer Context');
      output.show(true);
      output.appendLine('Running LLM with engineer context...');

      const nodeCmd = process.platform === 'win32' ? 'node' : 'node';
      const scriptPath = path.join(rootPath, 'scripts', 'run-llm.js');
      if (!fs.existsSync(scriptPath)) {
        output.appendLine(
          'scripts/run-llm.js not found. Please create it in the repo.'
        );
        return;
      }

      const proc = spawn(nodeCmd, [scriptPath, userPrompt], { cwd: rootPath });
      proc.stdout.on('data', data => output.appendLine(data.toString()));
      proc.stderr.on('data', data => output.appendLine(data.toString()));
      proc.on('close', code =>
        output.appendLine(`LLM script exited with ${code}`)
      );
    }
  );

  context.subscriptions.push(cmd);
}

export function deactivate() {}
