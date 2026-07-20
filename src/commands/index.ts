import { registerCustomCommands, unregisterCustomCommands } from "./commandRegistry";
import { executeSlashCommand } from "./commandExecutor";

export default {
  onLoad() {
    console.log("[CommandPlugin] Modul wird gestartet...");
    registerCustomCommands();
  },

  onUnload() {
    console.log("[CommandPlugin] Modul wird beendet...");
    unregisterCustomCommands();
  },

  // Exponiere den Executor für andere Module oder Plugins
  executeSlashCommand,
};
