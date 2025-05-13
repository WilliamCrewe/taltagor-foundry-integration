console.log("Taltagor Weapons script read.")


Hooks.once("setup", () => {
	
	// Adding the new Weapon Type, Exotic, for Ranged and Martial weapons
	CONFIG.DND5E.weaponTypes.exoticM = "Exotic Melee";
    CONFIG.DND5E.weaponTypes.exoticR = "Exotic Ranged";
	
	//Adding WeaponTypeMap for Exotic weaponry
	CONFIG.DND5E.weaponTypeMap.exoticM = "melee";
	CONFIG.DND5E.weaponTypeMap.exoticR = "ranged";
  
	// Adding new Weapon Properties
	CONFIG.DND5E.itemProperties.bst = {
		label: "Burst"
	}; CONFIG.DND5E.validProperties.weapon.add("bst");
  
	CONFIG.DND5E.itemProperties.mis = {
		label: "Misfire",
	}; CONFIG.DND5E.validProperties.weapon.add("mis");
  
	CONFIG.DND5E.itemProperties.prm = {
		label: "Primitive",
	}; CONFIG.DND5E.validProperties.weapon.add("prm");
  
	CONFIG.DND5E.itemProperties.sct = {
		label: "Scatter",
	}; CONFIG.DND5E.validProperties.weapon.add("sct");
	
	// Adding new Consumable Ammunition properties
	CONFIG.DND5E.itemProperties.brt = {
		label: "Brutal",
	}; CONFIG.DND5E.validProperties.consumable.add("brt");
	
	CONFIG.DND5E.itemProperties.cmb = {
		label: "Cumbersome",
	}; CONFIG.DND5E.validProperties.consumable.add("cmb");
  
  
	// Adding new Ammunition Types
	CONFIG.DND5E.consumableTypes.ammo.subtypes.round = "Firearm, Round";
	CONFIG.DND5E.consumableTypes.ammo.subtypes.jag = "Firearm, Jag";
	CONFIG.DND5E.consumableTypes.ammo.subtypes.bolt = "Firearm, Bolt";
	CONFIG.DND5E.consumableTypes.ammo.subtypes.impact = "Firearm, Impact";
	
	
	// Removing unwanted Ammunition Types
	delete CONFIG.DND5E.consumableTypes.ammo.subtypes.energyCell;
	delete CONFIG.DND5E.consumableTypes.ammo.subtypes.firearmBullet;
  
  
  
	// Removing unwanted Weapon Properties
	CONFIG.DND5E.validProperties.weapon.delete("fir");
	CONFIG.DND5E.validProperties.weapon.delete("foc");
	CONFIG.DND5E.validProperties.weapon.delete("spc");
  
  
	CONFIG.DND5E.weaponIds.thug = "Compendium.taltagor-foundry-integration.items.Item.SX4x98Lz91bJZuMP";
	CONFIG.DND5E.weaponIds.shot = "Compendium.taltagor-foundry-integration.items.Item.RUWa56fAZHjs9KuA";
	CONFIG.DND5E.weaponIds.slug = "Compendium.taltagor-foundry-integration.items.Item.7Aq1QxC3Q1KcN6J6";
  
});