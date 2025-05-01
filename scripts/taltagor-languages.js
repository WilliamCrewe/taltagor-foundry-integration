Hooks.on("init", function() {

	//Remove unwanted languages from the game.
	delete CONFIG.DND5E.languages.standard.children.dwarvish;
    delete CONFIG.DND5E.languages.standard.children.giant;
    delete CONFIG.DND5E.languages.standard.children.gnomish;
	delete CONFIG.DND5E.languages.standard.children.goblin;
	delete CONFIG.DND5E.languages.standard.children.orc;
	delete CONFIG.DND5E.languages.exotic.children.aarakocra;
	delete CONFIG.DND5E.languages.exotic.children.deep-speech;
	delete CONFIG.DND5E.languages.exotic.children.gith;
	delete CONFIG.DND5E.languages.exotic.children.gnoll;
	delete CONFIG.DND5E.languages.exotic.children.undercommon;
	
});

Hooks.on("ready", function() {
	
	//This must be run after the Initilisation stage as nested language structures are formed later.
	delete CONFIG.DND5E.languages.exotic.children.primordial
  
    //Add new languages into the game.
    CONFIG.DND5E.languages.standard.children.dragonborn = {
        label: "Dragonborn"
	};
	CONFIG.DND5E.languages.standard.children.human = {
        label: "Human"
    };
	CONFIG.DND5E.languages.standard.children.primordial = {
		label: "Primordial",
       children: {
			aquan: "Aquan",
			auran: "Auran",
			ignan: "Ignan",
			simulan: "Simulan",
            terran: "Terran"
        }
    };
	CONFIG.DND5E.languages.standard.children.reptilia = {
        label: "Reptilia"
    };
	CONFIG.DND5E.languages.standard.children.tabaxan = {
        label: "Tabaxan"
    };
	CONFIG.DND5E.languages.exotic.children.giant = {
        label: "Giant"
    };
	CONFIG.DND5E.languages.exotic.children.gnomish = {
        label: "Gnomish"
    };
	CONFIG.DND5E.languages.exotic.children.grave_speech = {
        label: "Grave Speech"
    };
	CONFIG.DND5E.languages.exotic.children.mechanus = {
        label: "Mechanus"
    };
	CONFIG.DND5E.languages.exotic.children.orcish = {
        label: "Orcish"
    };
});