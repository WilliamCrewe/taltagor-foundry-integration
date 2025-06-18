// Modifies CONFIG.DND5E.armourClasses to include relevant armour class formlua needed for Taltagor homebrew.

Hooks.once("init", () => {
  CONFIG.DND5E.armorClasses.charged = {
    label: "Charged Scales",
    formula: "13 + @abilities.dex.mod"
  };
  
  CONFIG.DND5E.armorClasses.latent = {
    label: "Latent Barrier",
    formula: "12 + @abilities.dex.mod"
  };
});