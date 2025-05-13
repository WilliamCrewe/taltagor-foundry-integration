console.log("Taltagor Currency | Setup")
// During setup, replace standard D&D currency details with taltagor specific details.
Hooks.once("setup", () => {
	CONFIG.DND5E.currencies.cp = {
		label: "Copper",
		abbreviation: "cc",
		conversion: 100,
		icon: "systems/dnd5e/icons/currency/copper.webp"
	},
	
	CONFIG.DND5E.currencies.sp = {
		label: "Bronze",
		abbreviation: "bc",
		conversion: 10,
		icon: "systems/dnd5e/icons/currency/copper.webp"
	},
	
	CONFIG.DND5E.currencies.ep = {
		label: "Iron",
		abbreviation: "ic",
		conversion: 1,
		icon: "systems/dnd5e/icons/currency/electrum.webp"
	},
	
	CONFIG.DND5E.currencies.gp = {
		label: "Silver",
		abbreviation: "sc",
		conversion: 0.1,
		icon: "systems/dnd5e/icons/currency/platinum.webp"
	},
	
	CONFIG.DND5E.currencies.pp = {
		label: "Gold",
		abbreviation: "gc",
		conversion: 0.01,
		icon: "systems/dnd5e/icons/currency/gold.webp"
	}
});