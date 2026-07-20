import { React } from "@revenge-mod/metro/common";
import { FormSwitch, ScrollView } from "@revenge-mod/ui/components";
import { useStorage } from "@revenge-mod/plugins";

export function SettingsView() {
  const [enabled, setEnabled] = useStorage("enabled", true);

  return (
    <ScrollView style={{ padding: 16 }}>
      <FormSwitch
        label="Plugin aktivieren"
        subLabel="Schalte die Befehle des Plugins ein oder aus."
        value={enabled}
        onValueChange={(val: boolean) => setEnabled(val)}
      />
    </ScrollView>
  );
}
