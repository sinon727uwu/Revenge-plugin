import { storage } from "@revenge-mod/plugins";
import { registerCommand, unregisterCommand } from "./commands";
import { SettingsView } from "./settings";

// Standardspeicher für Plugin-Einstellungen definieren
storage.enabled = storage.enabled ?? true;
storage.customPrefix = storage.customPrefix ?? "!";

export default {
  // Wird beim Laden des Plugins ausgeführt
  onLoad() {
    console.log("[MeinModularesPlugin] Erfolgreich geladen!");

    // Befehle / Hooks registrieren
    if (storage.enabled) {
      registerCommand();
    }
  },

  // Wird beim Deaktivieren/Entfernen aufgerufen (Aufräumen!)
  onUnload() {
    console.log("[MeinModularesPlugin] Entladen, räume auf...");
    unregisterCommand();
  },

  // Settings-Tab für die Revenge-Einstellungen bereitstellen
  settings: SettingsView,
};
