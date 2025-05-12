console.log("Luck Ability Score script read.")

// Add the Luck ability.
Hooks.once("init", () => {
  CONFIG.DND5E.abilities.lck = {
    label: "Luck",
    abbreviation: "lck",
    fullKey: "luck", // Full key used in enrichers
    reference: "Compendium.taltagor-foundry-integration.rules.JournalEntry.Ol1BaM1PeKO9X61O", // Direct link to the Luck journal entry
    type: "mental", // mental or physical
	defaults: {vehicle: 0},
    improvement: false // Explicitly set this to 'false' to prevent it showing up for ASIs.
  };
});