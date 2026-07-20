import { storage } from "@revenge-mod/plugins";
import { registerCustomCommands, unregisterCustomCommands } from "./commands";
import { SettingsView } from "./settings";

storage.enabled = storage.enabled ?? true;

export default {
  onLoad() {
    console.log("[CommandExecutor] Plugin geladen!");
    if (storage.enabled) {
      registerCustomCommands();
    }
  },

  onUnload() {
    console.log("[CommandExecutor] Plugin entladen!");
    unregisterCustomCommands();
  },

  settings: SettingsView,
};
