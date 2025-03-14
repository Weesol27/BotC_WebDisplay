class JinxList {
    static getJinxes() {
        return [
			{ pair: ["Bounty Hunter", "Kazali"], text: "An evil Townsfolk is only created if the Bounty Hunter is still in play after the Kazali acts." },
			{ pair: ["Bounty Hunter", "Philosopher"], text: "If the Philosopher gains the Bounty Hunter ability, a Townsfolk might turn evil." },
			{ pair: ["Cannibal", "Butler"], text: "If the Cannibal gains the Butler ability, the Cannibal learns this." },
			{ pair: [ "Bounty Hunter "," Kazali"], text: " An evil Townsfolk is only created if the Bounty Hunter is still in play after the Kazali acts." },
			{ pair: [ "Bounty Hunter "," Philosopher"], text: " If the Philosopher gains the Bounty Hunter ability, a Townsfolk might turn evil." },
			{ pair: [ "Cannibal "," Butler"], text: " If the Cannibal gains the Butler ability, the Cannibal learns this." },
			{ pair: [ "Cannibal "," Juggler"], text: " If the Juggler guesses on their first day and dies by execution, tonight the living Cannibal learns how many guesses the Juggler got correct." },
			{ pair: [ "Cannibal "," Poppy Grower"], text: " If the Cannibal eats the Poppy Grower, then dies or loses the Poppy Grower ability, the Demon and Minions learn each other that night." },
			{ pair: [ "Cannibal "," Zealot"], text: " If the Cannibal gains the Zealot ability, the Cannibal learns this." },
			{ pair: [ "Mathematician "," Chambermaid"], text: " The Chambermaid learns if the Mathematician wakes tonight or not, even though the Chambermaid wakes first." },
			{ pair: [ "Mathematician "," Lunatic"], text: " The Mathematician learns if the Lunatic attacks a different player(s) than the real Demon attacked." },
			{ pair: [ "Butler "," Organ Grinder"], text: " If the Organ Grinder is causing eyes closed voting, the Butler may raise their hand to vote but their vote is only counted if their master voted too." },
			{ pair: [ "Heretic "," Baron"], text: " The Baron might only add 1 Outsider, not 2." },
			{ pair: [ "Heretic "," Boffin"], text: " The Demon cannot have the Heretic ability." },
			{ pair: [ "Heretic "," Godfather"], text: " Only 1 jinxed character can be in play." },
			{ pair: [ "Heretic "," Lleech"], text: " If the Lleech has poisoned the Heretic then the Lleech dies, the Heretic remains poisoned." },
			{ pair: [ "Heretic "," Pit-Hag"], text: " A Pit-Hag can not create a Heretic." },
			{ pair: [ "Heretic "," Spy"], text: " Only 1 jinxed character can be in play." },
			{ pair: [ "Heretic "," Widow"], text: " Only 1 jinxed character can be in play." },
			{ pair: [ "Ogre "," Recluse"], text: " If the Recluse registers as evil to the Ogre, the Ogre learns that they are evil." },
			{ pair: [ "Plague Doctor "," Baron"], text: " If the Storyteller gains the Baron ability, up to two players become not-in-play Outsiders." },
			{ pair: [ "Plague Doctor "," Boomdandy"], text: " If the Plague Doctor is executed and the Storyteller would gain the Boomdandy ability, the Boomdandy ability triggers immediately." },
			{ pair: [ "Plague Doctor "," Evil Twin"], text: " The Storyteller cannot gain the Evil Twin ability if the Plague Doctor dies." },
			{ pair: [ "Plague Doctor "," Fearmonger"], text: " If the Plague Doctor dies, a living Minion gains the Fearmonger ability in addition to their own ability, and learns this." },
			{ pair: [ "Plague Doctor "," Goblin"], text: " If the Plague Doctor dies, a living Minion gains the Goblin ability in addition to their own ability, and learns this." },
			{ pair: [ "Plague Doctor "," Marionette"], text: " If the Demon has a neighbor who is alive and a Townsfolk or Outsider when the Plague Doctor dies, that player becomes an evil Marionette. If there is already an extra evil player, this does not happen." },
			{ pair: [ "Plague Doctor "," Scarlet Woman"], text: " If the Plague Doctor dies, a living Minion gains the Scarlet Woman ability in addition to their own ability, and learns this." },
			{ pair: [ "Plague Doctor "," Spy"], text: " If the Plague Doctor dies, a living Minion gains the Spy ability in addition to their own ability, and learns this." },
			{ pair: [ "Boffin "," Alchemist"], text: " If the Alchemist has the Boffin ability, the Alchemist does not learn what ability the Demon has." },
			{ pair: [ "Boffin "," Cult Leader"], text: " If the Demon has the Cult Leader ability, they can’t turn good due to this ability." },
			{ pair: [ "Boffin "," Drunk"], text: " If the Demon would have the Drunk ability, the Boffin chooses a Townsfolk player to have this ability instead." },
			{ pair: [ "Boffin "," Goon"], text: " If the Demon has the Goon ability, they can’t turn good due to this ability." },
			{ pair: [ "Boffin "," Ogre"], text: " The Demon cannot have the Ogre ability." },
			{ pair: [ "Boffin "," Politician"], text: " The Demon cannot have the Politician ability." },
			{ pair: [ "Boffin "," Village Idiot"], text: " If there is a spare token, the Boffin can give the Demon the Village Idiot ability." },
			{ pair: [ "Cerenovus "," Goblin"], text: " The Cerenovus may choose to make a player mad that they are the Goblin." },
			{ pair: [ "Marionette "," Balloonist"], text: " If the Marionette thinks that they are the Balloonist, +1 Outsider might have been added." },
			{ pair: [ "Marionette "," Damsel"], text: " The Marionette does not learn that a Damsel is in play." },
			{ pair: [ "Marionette "," Huntsman"], text: " If the Marionette thinks that they are the Huntsman, the Damsel was added." },
			{ pair: [ "Marionette "," Lil' Monsta"], text: " The Marionette neighbors a Minion, not the Demon. The Marionette is not woken to choose who takes the Lil' Monsta token, and does not learn they are the Marionette if they have the Lil' Monsta token." },
			{ pair: [ "Marionette "," Poppy Grower"], text: " When the Poppy Grower dies, the Demon learns the Marionette but the Marionette learns nothing." },
			{ pair: [ "Marionette "," Snitch"], text: " The Marionette does not learn 3 not in-play characters. The Demon learns an extra 3 instead." },
			{ pair: [ "Mastermind "," Al-Hadikhia"], text: " If the Al-Hadikhia dies by execution, and the Mastermind is alive, the Al-Hadikhia chooses 3 good players tonight:  if all 3 choose to live, evil wins. Otherwise, good wins." },
			{ pair: [ "Pit-Hag "," Cult Leader"], text: " If the Pit-Hag turns an evil player into the Cult Leader, they can't turn good due to their own ability." },
			{ pair: [ "Pit-Hag "," Damsel"], text: " If a Pit-Hag creates a Damsel, the Storyteller chooses which player it is." },
			{ pair: [ "Pit-Hag "," Goon"], text: " If the Pit-Hag turns an evil player into the Goon, they can't turn good due to their own ability." },
			{ pair: [ "Pit-Hag "," Ogre"], text: " If the Pit-Hag turns an evil player into the Ogre, they can't turn good due to their own ability." },
			{ pair: [ "Pit-Hag "," Politician"], text: " If the Pit-Hag turns an evil player into the Politician, they can't turn good due to their own ability." },
			{ pair: [ "Pit-Hag "," Village Idiot"], text: " If there is a spare token, the Pit-Hag can create an extra Village Idiot. If so, the drunk Village Idiot might change." },
			{ pair: [ "Scarlet Woman "," Al-Hadikhia"], text: " If there are two living Al-Hadikhias, the Scarlet Woman Al-Hadikhia becomes the Scarlet Woman again." },
			{ pair: [ "Scarlet Woman "," Fang Gu"], text: " If the Fang Gu chooses an Outsider and dies, the Scarlet Woman does not become the Fang Gu." },
			{ pair: [ "Spy "," Alchemist"], text: " If the Alchemist has the Spy ability, they do not see the Grimoire, and the real Spy cannot register falsely." },
			{ pair: [ "Spy "," Damsel"], text: " If the Spy is (or has been) in play, the Damsel is poisoned." },
			{ pair: [ "Spy "," Magician"], text: " When the Spy sees the Grimoire, the Demon and Magician's character tokens are removed." },
			{ pair: [ "Spy "," Ogre"], text: " The Spy registers as evil to the Ogre." },
			{ pair: [ "Spy "," Poppy Grower"], text: " If the Poppy Grower is in play, the Spy does not see the Grimoire until the Poppy Grower dies." },
			{ pair: [ "Summoner "," Alchemist"], text: " If there is an Alchemist-Summoner in play, the game starts with a Demon in play, as normal. If the Alchemist-Summoner chooses a player, they make that player a Demon but do not change their alignment." },
			{ pair: [ "Summoner "," Clockmaker"], text: " If the Summoner is in play, the Clockmaker does not receive their information until a Demon is created." },
			{ pair: [ "Summoner "," Courtier"], text: " If the Summoner is drunk on the 3rd night, the Summoner chooses which Demon, but the Storyteller chooses which player." },
			{ pair: [ "Summoner "," Engineer"], text: " If the Engineer removes a Summoner from play before that Summoner uses their ability, the Summoner uses their ability immediately." },
			{ pair: [ "Summoner "," Hatter"], text: " The Summoner cannot create an in-play Demon. If the Summoner creates a not-in-play Demon, deaths tonight are arbitrary." },
			{ pair: [ "Summoner "," Kazali"], text: " The Summoner cannot create an in-play Demon. If the Summoner creates a not-in-play Demon, deaths tonight are arbitrary." },
			{ pair: [ "Summoner "," Legion"], text: " If the Summoner creates Legion, most players (including all evil players) become evil Legion." },
			{ pair: [ "Summoner "," Lord of Typhon"], text: " If the Summoner creates a Lord of Typhon, the Lord of Typhon must neighbor a Minion. The other neighbor becomes a not-in-play evil Minion." },
			{ pair: [ "Summoner "," Marionette"], text: " The Marionette neighbors the Summoner. The Summoner knows who the Marionette is." },
			{ pair: [ "Summoner "," Pit-Hag"], text: " The Summoner cannot create an in-play Demon. If the Summoner creates a not-in-play Demon, deaths tonight are arbitrary." },
			{ pair: [ "Summoner "," Poppy Grower"], text: " If the Poppy Grower is alive when the Summoner acts, the Summoner chooses which Demon, but the Storyteller chooses which player." },
			{ pair: [ "Summoner "," Preacher"], text: " If the Preacher chose the Summoner on or before the 3rd night, the Summoner chooses which Demon, but the Storyteller chooses which player." },
			{ pair: [ "Summoner "," Pukka"], text: " The Summoner may choose a player to become the Pukka on the 2nd night." },
			{ pair: [ "Summoner "," Zombuul"], text: " If the Summoner turns a dead player into the Zombuul, the Storyteller treats that player as a Zombuul that has died once." },
			{ pair: [ "Vizier "," Alsaahir"], text: " If the Vizier is in play, the Alsaahir must also guess which Demon(s) are in play." },
			{ pair: [ "Vizier "," Courtier"], text: " If the Vizier loses their ability, they learn this. If the Vizier is executed while they have their ability, their team wins." },
			{ pair: [ "Vizier "," Fearmonger"], text: " The Vizier wakes with the Fearmonger, learns who they choose and cannot choose to immediately execute that player." },
			{ pair: [ "Vizier "," Investigator"], text: " If the Investigator learns that the Vizier is in play, the existence of the Vizier is not announced by the Storyteller." },
			{ pair: [ "Vizier "," Magician"], text: " If the Vizier and Magician are both in play, the Demon does not learn the Minions." },
			{ pair: [ "Vizier "," Politician"], text: " The Politician might register as evil to the Vizier." },
			{ pair: [ "Vizier "," Preacher"], text: " If the Vizier loses their ability, they learn this. If the Vizier is executed while they have their ability, their team wins." },
			{ pair: [ "Vizier "," Zealot"], text: " The Zealot might register as evil to the Vizier." },
			{ pair: [ "Widow "," Alchemist"], text: " If the Alchemist has the Widow ability, they do not see the Grimoire." },
			{ pair: [ "Widow "," Damsel"], text: " If the Widow is (or has been) in play, the Damsel is poisoned." },
			{ pair: [ "Widow "," Magician"], text: " When the Widow sees the Grimoire, the Demon and Magician's character tokens are removed." },
			{ pair: [ "Widow "," Poppy Grower"], text: " If the Poppy Grower is in play, the Widow does not see the Grimoire until the Poppy Grower dies." },
			{ pair: [ "Kazali "," Choirboy"], text: " The Kazali can not choose the King to become a Minion if a Choirboy is in play." },
			{ pair: [ "Kazali "," Goon"], text: " The Kazali can choose that the Goon player is one of their evil Minions." },
			{ pair: [ "Kazali "," Huntsman"], text: " If the Kazali chooses the Damsel to become a Minion, and a Huntsman is in play, a good player becomes the Damsel." },
			{ pair: [ "Kazali "," Marionette"], text: " If the Kazali chooses to create a Marionette, they must choose one of their neighbors." },
			{ pair: [ "Kazali "," Soldier"], text: " The Kazali can choose that the Soldier player is one of their evil Minions." },
			{ pair: [ "Legion "," Engineer"], text: " Legion and the Engineer can not both be in play at the start of the game. If the Engineer creates Legion, most players (including all evil players) become evil Legion." },
			{ pair: [ "Legion "," Hatter"], text: " If the Hatter dies and Legion is in play, nothing happens. If the Hatter dies and an evil player chooses Legion, all current evil players become Legion." },
			{ pair: [ "Legion "," Minstrel"], text: " If Legion died by execution today, Legion keeps their ability, but the Minstrel might learn they are Legion." },
			{ pair: [ "Legion "," Preacher"], text: " If the Preacher chooses Legion, Legion keeps their ability, but the Preacher might learn they are Legion." },
			{ pair: [ "Legion "," Zealot"], text: " The Zealot might register as evil to Legion's ability." },
			{ pair: [ "Leviathan "," Banshee"], text: " Each night*, the Leviathan chooses an alive good player (different to previous nights):  a chosen Banshee dies & gains their ability." },
			{ pair: [ "Leviathan "," Exorcist"], text: " Evil does not win when more than 1 good player has been executed, if the Exorcist is alive and has ever successfully chosen the Leviathan." },
			{ pair: [ "Leviathan "," Farmer"], text: " Each night*, the Leviathan chooses an alive good player (different to previous nights):  a chosen Farmer uses their ability but does not die." },
			{ pair: [ "Leviathan "," Grandmother"], text: " If Leviathan is in play and the Grandchild dies by execution, evil wins." },
			{ pair: [ "Leviathan "," Hatter"], text: " If the Hatter dies on or after day 5, the Demon cannot choose Leviathan." },
			{ pair: [ "Leviathan "," Innkeeper"], text: " If the Leviathan is in play, the Innkeeper-protected-players are safe from all evil abilities." },
			{ pair: [ "Leviathan "," King"], text: " If the Leviathan is in play, and at least 1 player is dead, the King learns an alive character each night." },
			{ pair: [ "Leviathan "," Mayor"], text: " If the Leviathan is in play & no execution occurs on day 5, good wins." },
			{ pair: [ "Leviathan "," Monk"], text: " If the Leviathan is in play, the Monk-protected-player is safe from all evil abilities." },
			{ pair: [ "Leviathan "," Pit-Hag"], text: " After day 5, the Pit-Hag cannot choose Leviathan." },
			{ pair: [ "Leviathan "," Ravenkeeper"], text: " Each night*, the Leviathan chooses an alive player (different to previous nights):  a chosen Ravenkeeper uses their ability but does not die." },
			{ pair: [ "Leviathan "," Sage"], text: " Each night*, the Leviathan chooses an alive good player (different to previous nights):  a chosen Sage uses their ability but does not die." },
			{ pair: [ "Leviathan "," Soldier"], text: " If the Leviathan is in play, the Soldier is safe from all evil abilities." },
			{ pair: [ "Lil' Monsta "," Hatter"], text: " If a Demon chooses Lil' Monsta, they also choose a Minion to become and babysit Lil' Monsta tonight." },
			{ pair: [ "Lil' Monsta "," Magician"], text: " Each night, the Magician chooses a Minion:  if that Minion & Lil' Monsta are alive, that Minion babysits Lil’ Monsta." },
			{ pair: [ "Lil' Monsta "," Poppy Grower"], text: " If the Poppy Grower is in play, Minions don't wake together. They are woken one by one, until one of them chooses to take the Lil' Monsta token." },
			{ pair: [ "Lil' Monsta "," Scarlet Woman"], text: " If there are 5 or more players alive and the player holding the Lil' Monsta token dies, the Scarlet Woman is given the Lil' Monsta token tonight." },
			{ pair: [ "Lil' Monsta "," Vizier"], text: " The Vizier can die by execution if they are babysitting Lil' Monsta." },
			{ pair: [ "Lleech "," Mastermind"], text: " If the Mastermind is alive and the Lleech's host dies by execution, the Lleech lives but loses their ability." },
			{ pair: [ "Lleech "," Slayer"], text: " If the Slayer slays the Lleech's host, the host dies." },
			{ pair: [ "Riot "," Banshee"], text: " Each night*, Riot chooses an alive good player (different to previous nights):  a chosen Banshee dies & gains their ability." },
			{ pair: [ "Riot "," Exorcist"], text: " If the Exorcist chooses Riot on the 3rd night, Minions do not become Riot." },
			{ pair: [ "Riot "," Farmer"], text: " Each night*, Riot chooses an alive good player (different to previous nights):  a chosen Farmer uses their ability but does not die." },
			{ pair: [ "Riot "," Grandmother"], text: " If Riot is in play and the Grandchild dies during the day, the Grandmother dies too." },
			{ pair: [ "Riot "," Innkeeper"], text: " If Riot is in play, the Innkeeper-protected player is safe from all evil abilities." },
			{ pair: [ "Riot "," King"], text: " If Riot is in play, and at least 1 player is dead, the King learns an alive character each night." },
			{ pair: [ "Riot "," Mayor"], text: " The Mayor may choose to stop nominations. If they do so when only 1 Riot is alive, good wins. Otherwise, evil wins." },
			{ pair: [ "Riot "," Monk"], text: " If Riot is in play, the Monk-protected player is safe from all evil abilities." },
			{ pair: [ "Riot "," Ravenkeeper"], text: " Each night*, Riot chooses an alive good player (different to previous nights):  a chosen Ravenkeeper uses their ability but does not die." },
			{ pair: [ "Riot "," Sage"], text: " Each night*, Riot chooses an alive good player (different to previous nights):  a chosen Sage uses their ability but does not die." },
			{ pair: [ "Riot "," Soldier"], text: " If Riot is in play, the Soldier is safe from all evil abilities." },
			{ pair: [ "Vortox "," Banshee"], text: " If the Vortox is in play and the Demon kills the Banshee, the players still learn that the Banshee has died." },
			{ pair: [ "Yaggababble "," Exorcist"], text: " If the Exorcist chooses the Yaggababble, the Yaggababble ability does not kill tonight." },

        ];
    }

    // Function to display Jinxes
    static displayJinxes(matchedJinxes) {
        const container = document.getElementById("jinxList");
        container.innerHTML = ""; // Clear previous jinxes

        matchedJinxes.forEach((jinx, index) => {
            const row = document.createElement("tr");
            row.className = `list-item ${index % 2 === 0 ? 'even' : 'odd'}`;

            const nameCell = document.createElement("td");
            nameCell.className = "name";
            nameCell.textContent = `${jinx.pair[0]} / ${jinx.pair[1]}`;

            const textCell = document.createElement("td");
            textCell.className = "text";
            textCell.textContent = jinx.text;

            row.appendChild(nameCell);
            row.appendChild(textCell);
            container.appendChild(row);
        });
    }
}

// Ensure JinxList is accessible globally
window.JinxList = JinxList;