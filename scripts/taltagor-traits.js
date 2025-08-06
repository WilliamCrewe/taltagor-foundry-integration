Hooks.once("init", () => {
	// Add the Human Trait classification as a Feature Type and Subtype option.
  CONFIG.DND5E.featureTypes.humanTrait = {
	  
    label: "Trait",
    subtypes: {
      first: "Bodily Trait",
      second: "Mental Trait",
      third: "Physical Trait"
    }
	
  };
  
});