const toggle = document.getElementById("toggle");
const statusText = document.getElementById("status");

chrome.storage.local.get("enabled", (data) => {
  const isEnabled = data.enabled ?? true;
  toggle.checked = isEnabled;
  statusText.textContent = isEnabled ? "On" : "Off";
});

toggle.addEventListener("change", async () => {
  const enabled = toggle.checked;
  statusText.textContent = enabled ? "On" : "Off";

  await chrome.declarativeNetRequest.updateEnabledRulesets({
    enableRulesetIds: enabled ? ["ruleset_1"] : [],
    disableRulesetIds: enabled ? [] : ["ruleset_1"]
  });

  chrome.storage.local.set({ enabled });
});
