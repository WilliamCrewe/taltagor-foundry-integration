console.log("Taltagor Currency | Setup")
// During setup, replace standard D&D currency details with taltagor specific details.
Hooks.once("init", () => {
	CONFIG.DND5E.currencies.cp = {
		label: "Copper",
		abbreviation: "cb",
		conversion: 100,
		icon: "modules/taltagor-foundry-integration/assets/currency/copper.webp"
	}
	
	CONFIG.DND5E.currencies.sp = {
		label: "Bronze",
		abbreviation: "bb",
		conversion: 10,
		icon: "modules/taltagor-foundry-integration/assets/currency/bronze.webp"
	}
	
	CONFIG.DND5E.currencies.gp = {
		label: "Iron",
		abbreviation: "ib",
		conversion: 1,
		icon: "modules/taltagor-foundry-integration/assets/currency/iron.webp"
	}
	
	CONFIG.DND5E.currencies.ep = {
		label: "Silver",
		abbreviation: "sb",
		conversion: 0.1,
		icon: "modules/taltagor-foundry-integration/assets/currency/silver.webp"
	}
	
	CONFIG.DND5E.currencies.pp = {
		label: "Gold",
		abbreviation: "gb",
		conversion: 0.01,
		icon: "modules/taltagor-foundry-integration/assets/currency/gold.webp"
	}
	
	const currencies = Object.entries(CONFIG.DND5E.currencies).sort((a, b) => {
        return a[1].conversion - b[1].conversion;
    });
    CONFIG.DND5E.currencies = Object.fromEntries(currencies);
	
});

