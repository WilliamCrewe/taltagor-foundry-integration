console.log("Taltagor Equipment script read.")

Hooks.once("init", () => {
	
	// Adding new Equipment Types to reflect Gnomish Enhancements
	CONFIG.DND5E.equipmentTypes.enhancement = "Gnomish Enhancement";
	CONFIG.DND5E.miscEquipmentTypes.enhancement = "Gnomish Enhancement";
	
});