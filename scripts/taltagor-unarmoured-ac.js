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
  
  // Creating all Human Natural Armour classes
  CONFIG.DND5E.armorClasses.human11 = {
    label: "Natural Armour",
    formula: "11 + @abilities.dex.mod"
  };
  CONFIG.DND5E.armorClasses.human12 = {
    label: "Natural Armour",
    formula: "12 + @abilities.dex.mod"
  };
  CONFIG.DND5E.armorClasses.human13 = {
    label: "Natural Armour",
    formula: "13 + @abilities.dex.mod"
  };
  CONFIG.DND5E.armorClasses.human17 = {
    label: "Natural Armour",
    formula: "17"
  };
});