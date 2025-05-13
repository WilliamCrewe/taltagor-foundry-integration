console.log("Taltagor Rests script read.")

Hooks.once("init", () => {
	
	// Add the True Rest activity period
	CONFIG.DND5E.activityActivationTypes.trueRest = {
		label: "End of a True Rest",
		group: "DND5E.ACTIVATION.Category.Rest",
		passive: true
	};
	
	
	// Add True Rest as a Rest Option
	CONFIG.DND5E.restTypes.trueRest = {
		duration: {
			normal: 43200,
			gritty: 302400,
			epic: 5400
		},
		label: "True Rest",
		activationperiods: ['trueRest'],
		recoverHitDice: true,
		recoverHitPoints: true,
		recoverPeriods: ["tr", "lr", "sr"],
		recoverSpellSlotTypes: new Set(["leveled", "pact"])
	};
	
	// Adding Limited Use Period for True Rests
	CONFIG.DND5E.limitedUsePeriods.tr = {
		abbreviation: "TR",
		label: "True Rest"
	}
});