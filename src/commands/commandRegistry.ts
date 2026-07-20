import { commands } from "@revenge-mod/api";
import { executeSlashCommand } from "./commandExecutor";

let unregisters: (() => void)[] = [];

/**
 * Registriert alle benutzerdefinierten Slash Commands des Plugins.
 */
export function registerCustomCommands() {
  // Beispiel 1: Eigener Befehl, der einen externen Bot-Command auslöst
  const triggerCmd = commands.registerCommand({
    name: "run-bot-cmd",
    description: "Führt einen Bot Slash Command programmatisch aus.",
    options: [
      {
        name: "command",
        description: "Name des auszuführenden Commands",
        type: 3, // String Input
        required: true,
      },
    ],
    async execute(args, ctx) {
      const targetCommand = args.find((a: any) => a.name === "command")?.value;

      if (!targetCommand) {
        return { content: "❌ Kein Command angegeben." };
      }

      // Führt den angegebenen Command im aktuellen Channel aus
      const success = await executeSlashCommand({
        channelId: ctx.channel.id,
        commandName: targetCommand,
      });

      return {
        content: success
          ? `✅ Befehl \`/${targetCommand}\` wurde gesendet.`
          : `❌ Fehler beim Senden von \`/${targetCommand}\`.`,
      };
    },
  });

  unregisters.push(triggerCmd);
}

/**
 * Entfernt alle registrierten Commands sauber beim Entladen.
 */
export function unregisterCustomCommands() {
  unregisters.forEach((unregister) => unregister());
  unregisters = [];
}
