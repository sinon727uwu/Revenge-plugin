import { findByProps } from "@revenge-mod/metro";

// Findet das interne Discord-Modul für Bot-Commands
const CommandUtils = findByProps("sendBotCommand") || findByProps("useCommand");

interface ExecuteOptions {
  channelId: string;
  commandName: string;
  commandId?: string;
  applicationId?: string;
  options?: Record<string, any>;
}

/**
 * Führt einen Slash Command programmatisch im angegebenen Channel aus.
 */
export async function executeSlashCommand({
  channelId,
  commandName,
  commandId,
  applicationId,
  options = {},
}: ExecuteOptions): Promise<boolean> {
  try {
    if (!CommandUtils?.sendBotCommand) {
      console.error("[CommandExecutor] 'sendBotCommand' Modul wurde nicht gefunden.");
      return false;
    }

    // Führt den Command über die internen Discord-Funktionen aus
    await CommandUtils.sendBotCommand({
      channelId,
      commandName,
      commandId,
      applicationId,
      options,
    });

    console.log(`[CommandExecutor] Command '/${commandName}' erfolgreich abgesendet.`);
    return true;
  } catch (error) {
    console.error(`[CommandExecutor] Fehler beim Ausführen von '/${commandName}':`, error);
    return false;
  }
}
