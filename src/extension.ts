import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	const didChangeEmitter = new vscode.EventEmitter<void>();

	context.subscriptions.push(vscode.lm.registerMcpConfigurationProvider('nugetServer', {
		onDidChange: didChangeEmitter.event,
		provideMcpServerDefinitions: async () => {
			let output: vscode.McpServerDefinition[] = [];
			
			let nugetServerDef: vscode.McpStdioServerDefinition = {
				label: 'NuGet',
				command: 'mcp-server-nuget',
				args: [],
				env: {}
			};

			output.push(nugetServerDef);

			return output;
		}
	}));

}

export function deactivate() {}
