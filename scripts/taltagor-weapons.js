console.log("Taltagor Weapons script read.")


Hooks.once("setup", () => {
	
	// Adding the new Weapon Type, Exotic, for Ranged and Martial weapons
  CONFIG.DND5E.weaponTypes.exoticM = {
	  label: "Exotic Martial"
  };
    CONFIG.DND5E.weaponTypes.exoticR = {
	  label: "Exotic Ranged"
  };
  
  // Adding new Weapon Properties
  CONFIG.DND5E.itemProperties.burst = {
    label: "Burst",
    isPhysical: true
  }; CONFIG.DND5E.validProperties.weapon.add("burst");
  
  CONFIG.DND5E.itemProperties.misfire = {
    label: "Misfire",
    isPhysical: true
  }; CONFIG.DND5E.validProperties.weapon.add("misfire");
  
  CONFIG.DND5E.itemProperties.primitive = {
    label: "Primitive",
    isPhysical: true
  }; CONFIG.DND5E.validProperties.weapon.add("primitive");
  
  CONFIG.DND5E.itemProperties.scatter = {
    label: "Scatter",
    isPhysical: true
  }; CONFIG.DND5E.validProperties.weapon.add("scatter");
  
  
  // Adding new Ammunition Types
  
  // Removing unwanted Weapon Properties
  CONFIG.DND5E.validProperties.weapon.delete("fir");
  CONFIG.DND5E.validProperties.weapon.delete("foc");
  CONFIG.DND5E.validProperties.weapon.delete("spc");
  
  
  CONFIG.DND5E.weaponIds.thug = "Compendium.taltagor-foundry-integration.items.Item.SX4x98Lz91bJZuMP";
  
});