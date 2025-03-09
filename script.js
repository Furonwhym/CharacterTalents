// Talentbaum-Daten
const talentTrees = [
    {
        id: "tree1",
        talents: createTalentTree("Physical", [
            { id: 1, row: 1, image: "Designs/Physical1.jpg", description: "Schwertkunst: Klingenwaffen haben pro ausgerüsteter Waffe, die Fähigkeit einen D6 Trefferwürfel erneut zu würfeln." },
            { id: 2, row: 1, image: "Designs/Physical2.jpg", description: "Gezielter Schlag: Erhöhe deinen Schaden um 1 bei einem erfolgreichen Angriffswurf." },
            { id: 3, row: 1, image: "Designs/Physical3.jpg", description: "Klingenwirbel: Wenn du einen kritischen Treffer erzielst, füge benachbarten Gegnern 1D3 Schaden zu." },
            { id: 4, row: 2, image: "Designs/Physical4.jpg", description: "Stärke des Kriegers: Füge deinem Angriff zusätzlich 1D3 Schaden hinzu, wenn der Gegner über weniger als 50% seines max. Lebens verfügt." },
            { id: 5, row: 2, image: "Designs/Physical5.jpg", description: "Kriegskunst: Stumpfe Waffen haben pro ausgerüsteter Waffe, die Fähigkeit einen D6 Trefferwürfel erneut zu würfeln." },
            { id: 6, row: 3, image: "Designs/Physical6.jpg", description: "Präzisionsschlag: Füge deinem Angriff zusätzlich 1D3 Schaden hinzu, wenn der Gegner über mehr als 50% seines max. Lebens verfügt." },
            { id: 7, row: 3, image: "Designs/Physical7.jpg", description: "Blutdurst: Wenn du einen Gegner besiegst, regeneriere 1D6 Leben." },
            { id: 8, row: 4, image: "Designs/Physical8.jpg", description: "Klingenmeister: Waffen die eine Klinge haben, verursachen zusätzlich 1D3 Schaden." },
            { id: 9, row: 4, image: "Designs/Physical9.jpg", description: "Kampfrausch: Wenn jeder deiner Trefferwürfe trifft, füge 1D6 Schaden extra hinzu." },
            { id: 10, row: 4, image: "Designs/Physical10.jpg", description: "Raufbold: Stumpfe Waffen verursachen zusätzlich 1D3 Schaden." },
            { id: 11, row: 5, image: "Designs/Physical11.jpg", description: "Gezielte Attacke: Erhalte +1 auf den Wurf für einen Kritischen Treffer." },
            { id: 12, row: 5, image: "Designs/Physical12.jpg", description: "Durchdringender Schlag: Ignoriere einen gewürfelten Blockwürfel deines Gegners." },
            { id: 13, row: 6, image: "Designs/Physical13.jpg", description: "Zielgenauigkeit: Fernkampfwaffen haben die Fähigkeit, einen D6 Trefferwürfel erneut zu würfeln." },
            { id: 14, row: 6, image: "Designs/Physical14.jpg", description: "Schwächender Schwung: Der getroffene Gegner erleidet -2 Schaden auf seinen nächsten Angriff." },
            { id: 15, row: 7, image: "Designs/Physical15.jpg", description: "Wutentbrannt: Verdopple deinen Schaden, wenn du weniger als 25 % deines Lebens hast." },
            { id: 16, row: 7, image: "Designs/Physical16.jpg", description: "Scharfschütze: Physischer Fernkampfschaden, macht zusätzlich 1D3 Schaden." },
            { id: 17, row: 7, image: "Designs/Physical17.jpg", description: "Blutung: Wenn dein Angriff einen Gegner verwundet, erhält dieser 1d4 Schaden in der nächsten Runde." },
            { id: 18, row: 8, image: "Designs/Physical18.jpg", description: "Unbezwingbare Wucht: Dein nächster Angriff trifft automatisch und verursacht doppelten Schaden. (Kann einmal pro Tag eingesetzt werden)" }
        ]),
        backgroundImage: "Designs/PhysicalBackround.jpg"
    },
    {
        id: "tree2",
        talents: createTalentTree("Magical", [
            { id: 1, row: 1, image: "Designs/Magical1.jpg", description: "Elementarfokus: Feuer & Erde: Feuer-/Erdzauber haben pro gewürfeltem Treffer D6 die Fähigkeit, einen Würfel erneut zu werfen." },
            { id: 2, row: 1, image: "Designs/Magical2.jpg", description: "Magischer Sturm: Wenn ein Zauber kritisch trifft, füge allen Gegnern in einem Umkreis von 5 Fuß um das Ziel herum, 1D3 Schaden zu." },
            { id: 3, row: 1, image: "Designs/Magical3.jpg", description: "Erschöpfender Funke: Füge einem Gegner mit weniger als 50 % Leben zusätzlich 1D3 magischen Schaden zu." },
            { id: 4, row: 2, image: "Designs/Magical4.jpg", description: "Arkaner Präzisionsschlag: Erhöhe den Schaden deines Zaubers um 1D3, wenn der Gegner über mehr als 50 % Leben verfügt." },
            { id: 5, row: 2, image: "Designs/Magical5.jpg", description: "Elementarfokus: Wasser & Eis: Wasser-/Eiszauber haben pro gewürfeltem Treffer D6 die Fähigkeit, einen Würfel erneut zu werfen." },
            { id: 6, row: 3, image: "Designs/Magical6.jpg", description: "Mystischer Rausch: Wenn jeder deiner Trefferwürfe für Zauber in einer Runde trifft, füge 1D6 Schaden hinzu." },
            { id: 7, row: 3, image: "Designs/Magical7.jpg", description: "Lebensentzug: Wenn ein Gegner durch einen Zauber stirbt, regeneriere 1D6 Lebenspunkte." },
            { id: 8, row: 4, image: "Designs/Magical8.jpg", description: "Gezielte Arkanität: Erhalte +1 auf den Wurf für kritische Treffer bei Zaubern." },
            { id: 9, row: 4, image: "Designs/Magical9.jpg", description: "Schwächender Zauber: Der getroffene Gegner erleidet -2 Schaden auf seinen nächsten Angriff." },
            { id: 10, row: 4, image: "Designs/Magical10.jpg", description: "Magischer Durchbruch: Ignoriere einen gewürfelten Blockwürfel deines Gegners." },
            { id: 11, row: 5, image: "Designs/Magical11.jpg", description: "Arkanes wandeln: Du kannst bei deinen Bewegungswürfen einen D3 Würfel an Bewegung zusätzlich nutzen." },
            { id: 12, row: 5, image: "Designs/Magical12.jpg", description: "Phasenverschiebung: Einmal pro Tag kannst du einen Gegner zwischen zwei Dimensionen für 3 Runden fangen, dieser kann keine Aktionen ausführen, jedoch auch keinen Schaden erleiden." },
            { id: 13, row: 6, image: "Designs/Magical13.jpg", description: "Elementarfokus: Licht & Schatten: Licht-/Schattenzauber haben pro gewürfeltem Treffer D6 die Fähigkeit, einen Würfel erneut zu werfen." },
            { id: 14, row: 6, image: "Designs/Magical14.jpg", description: "Schrecken: Erhöhe deinen verursachten Zauberschaden eines Zaubers um einen D6." },
            { id: 15, row: 7, image: "Designs/Magical15.jpg", description: "Magische Ketten: Einmal pro Tag kann dein Magischer Angriff beliebig viele weitere Gegner treffen, pro weiterem getroffenen Gegner, reduziert sich der Schaden auf diesem um 1D3." },
            { id: 16, row: 7, image: "Designs/Magical16.jpg", description: "Manafluss: Wenn du einen Zauber wirkst, der einen Gegner kritisch trifft, regenerierst du 1D3 Mana." },
            { id: 17, row: 7, image: "Designs/Magical17.jpg", description: "Magische Rüstung: Solange die magische Rüstung aktiv ist, verhindert Sie 1D3 eingehenden Schaden, du verlierst jedoch pro Treffer 1 Mana." },
            { id: 18, row: 8, image: "Designs/Magical18.jpg", description: "Manaspiegel: Einmal pro Tag, kannst du einen Manaspiegel beschwören, der den eingehenden Schaden einer Runde reflektiert und zurückwirft." }
        ]),
        backgroundImage: "Designs/MagicalBackround.jpg"
    },
    {
        id: "tree3",
        talents: createTalentTree("Tank", [
            { id: 1, row: 1, image: "Designs/Tank1.jpg", description: "Eiserner Wille: Reduziere allen erlittenen Schaden um 1, solange dein Leben über 50 % ist." },
            { id: 2, row: 1, image: "Designs/Tank2.jpg", description: "Provokation: Alle Gegner im Umkreis von 20 Fuß, greifen dich an für die nächste Runde an." },
            { id: 3, row: 1, image: "Designs/Tank3.jpg", description: "Schildkunst: Erhalte die Fähigkeit, einen D6 bei einem Verteidigungswurf erneut zu würfeln, wenn du einen Schild trägst." },
            { id: 4, row: 2, image: "Designs/Tank4.jpg", description: "Fester Stand: Wenn du dich in der letzten Runde nicht bewegt hast, füge deinem nächsten Verteidigungswurf einen weiteren D6 hinzu." },
            { id: 5, row: 2, image: "Designs/Tank5.jpg", description: "Schwere Rüstung: Erhöhe deine Rüstung um 1." },
            { id: 6, row: 3, image: "Designs/Tank6.jpg", description: "Schildwall: Reduziere den eingehenden Schaden von allen Angriffen um 1D4, solange du einen Schild ausgerüstet hast." },
            { id: 7, row: 3, image: "Designs/Tank7.jpg", description: "Unaufhaltsamer Block: Blocke einen Angriff vollständig ab, wenn du mit jedem Würfel einen Block erzielst." },
            { id: 8, row: 4, image: "Designs/Tank8.jpg", description: "Rüstungsmeister: Erhöhe deine Rüstung um 2." },
            { id: 9, row: 4, image: "Designs/Tank9.jpg", description: "Kampfschrei: Ein Gegner deiner Wahl greift dich für die nächsten 2 Runden an." },
            { id: 10, row: 4, image: "Designs/Tank10.jpg", description: "Dornenrüstung: Gegner die dich treffen, erleiden 1D4 Schaden." },
            { id: 11, row: 5, image: "Designs/Tank11.jpg", description: "Unbezwingbar: Reduziere eingehenden Schaden um 1D6, wenn dein Leben unter 25% fällt." },
            { id: 12, row: 5, image: "Designs/Tank12.jpg", description: "Plattenrüstung: Erhöhe deine Rüstung um 3." },
            { id: 13, row: 6, image: "Designs/Tank13.jpg", description: "Einschüchtern: Gegner in einem Radius von 10 Fuß um dich herum, verursachen 1D4 weniger Schaden." },
            { id: 14, row: 6, image: "Designs/Tank14.jpg", description: "Lebensraub: Der von Dornenrüstung verursachte Schaden, heilt dich um den selben Betrag." },
            { id: 15, row: 7, image: "Designs/Tank15.jpg", description: "Göttlicher Wille: Reduziere allen erlittenen Schaden um zusätzlich 2, solange dein Leben über 50% ist." },
            { id: 16, row: 7, image: "Designs/Tank16.jpg", description: "Göttliche Rüstung: Erhöhe deine Rüstung um 4." },
            { id: 17, row: 7, image: "Designs/Tank17.jpg", description: "Eiserne Präsenz: Alle Gegner in einem Radius von 15 Fuß um dich herum, erhalten -1 Trefferwürfel." },
            { id: 18, row: 8, image: "Designs/Tank18.jpg", description: "Schild der Unsterblichkeit: Ein magischer Schild umgibt dich und deine Kameraden in einem 20 Fuß Radius für 2 Runden. Währenddessen wird erlittener Schaden um 2 reduziert und pro Runde 1D6 Leben regeneriert. (Einmal pro Tag)" }
        ]),
        backgroundImage: "Designs/TankBackround.jpg"
    },
    {
        id: "tree4",
        talents: createTalentTree("Heal", [
            { id: 1, row: 1, image: "Designs/Heal1.jpg", description: "Heiliger Verteidiger: Wenn du tödlichen Schaden erleidest, schützt dich ein astrales Wesen und fängt den Schaden ab. (Einmal pro Tag)" },
            { id: 2, row: 1, image: "Designs/Heal2.jpg", description: "Sanfte Woge: Erhöhe deine Heilung um 1." },
            { id: 3, row: 1, image: "Designs/Heal3.jpg", description: "Heilige Präsenz: Verbündete in einem Umkreis von 10 Fuß regenerieren +1 HP am Ende jeder Runde." },
            { id: 4, row: 2, image: "Designs/Heal4.jpg", description: "Genesendes Licht: Füge einer Heilung einen 1D4 zusätzlichen Heilungswürfel hinzu. (Einmal pro Ziel)" },
            { id: 5, row: 2, image: "Designs/Heal5.jpg", description: "Erneuernder Funke: Wenn ein Ziel auf 0 HP fällt, regeneriere automatisch 1D6 HP auf dieses Ziel. (Einmal pro Tag)" },
            { id: 6, row: 3, image: "Designs/Heal6.jpg", description: "Göttliche Ruhe: Senke den erlittenen Schaden eines Verbündeten um -2 für die nächste Runde. (Einmal pro Ziel." },
            { id: 7, row: 3, image: "Designs/Heal7.jpg", description: "Reinigender Segen: Entferne einen negativen Effekt oder Debuff von einem Ziel, wenn du es heilst. (Einmal pro Ziel)" },
            { id: 8, row: 4, image: "Designs/Heal8.jpg", description: "Segenslicht: Verbündete in einem Umkreis von 10 Fuß erhalten zusätzlich 1D3 Heilung, wenn du einen Zauber wirkst. (Einmal pro Tag)" },
            { id: 9, row: 4, image: "Designs/Heal9.jpg", description: "Lebensspender: Wenn du einen Gegner besiegst, regenerieren Verbündete in einem Umkreis von 15 Fuß 1D6 HP. (Einmal pro Tag)" },
            { id: 10, row: 4, image: "Designs/Heal10.jpg", description: "Schnelle Heilung: Wirke einen Heilzauber als Reaktion, wenn ein Verbündeter unter 25 % HP (aufgerundet) fällt. (Einmal pro Ziel)" },
            { id: 11, row: 5, image: "Designs/Heal11.jpg", description: "Himmlische Aegis: Ein Verbündeter erhält für die nächste Runde 1D6 Schadensreduktion. (Einmal pro Ziel)" },
            { id: 12, row: 5, image: "Designs/Heal12.jpg", description: "Lebensbrunnen: Erhöhe deine Heilung um 1." },
            { id: 13, row: 6, image: "Designs/Heal13.jpg", description: "Strahlende Berührung: Wenn du jemanden heilst, füge einem nahen Gegner 1D4 Lichtschaden zu." },
            { id: 14, row: 6, image: "Designs/Heal14.jpg", description: "Erhaltendes Licht: Ein Ziel erhält 1D6 zusätzliche HP, wenn du es auf maximale Gesundheit bringst." },
            { id: 15, row: 7, image: "Designs/Heal15.jpg", description: "Schützender Kreis: Erschaffe einen magischen Schild, der allen Verbündeten in einem Umkreis von 15 Fuß -1 Schaden für 2 Runden gewährt. (Zweimal pro Tag)" },
            { id: 16, row: 7, image: "Designs/Heal16.jpg", description: "Heilen: Erhöhe deine Heilung um 2." },
            { id: 17, row: 7, image: "Designs/Heal17.jpg", description: "Gesegnete Reihen: Alle Verbündeten in deinem Umkreis erhalten +1 auf ihre Verteidigungswürfe." },
            { id: 18, row: 8, image: "Designs/Heal18.jpg", description: "Göttlicher Regen: Beschwöre ein massives, heilendes Licht, das alle Verbündeten auf dem Schlachtfeld um 3D8 HP heilt. Während der nächsten Runde sind alle Verbündeten immun gegen negative Effekte und erhalten +2 auf alle Würfe. (Einmal pro Tag)" }
        ]),
        backgroundImage: "Designs/HealBackround.jpg"
    }
];

function createTalentTree(type, talentsData) {
    return talentsData.map(talent => ({
        ...talent,
        unlocked: talent.row === 1, // Erste Reihe immer entsperrt
        active: false,
        required: talent.row % 2 === 1 ? 2 : 1 // Reihenweise Anforderungen
    }));
}

function renderTalentTrees() {
    talentTrees.forEach(tree => {
        const treeDiv = document.getElementById(tree.id);
        treeDiv.innerHTML = ""; // Clear tree
        treeDiv.style.backgroundImage = `url('${tree.backgroundImage}')`; // Set individual background image
        treeDiv.style.backgroundSize = "cover";
        treeDiv.style.backgroundPosition = "center";

        const rows = {};
        tree.talents.forEach(talent => {
            if (!rows[talent.row]) {
                rows[talent.row] = document.createElement("div");
                rows[talent.row].classList.add("row");
                treeDiv.appendChild(rows[talent.row]);
            }

            const talentDiv = document.createElement("div");
            talentDiv.className = `talent ${talent.unlocked ? "unlocked" : "locked"} ${talent.active ? "active" : ""}`;

            const talentImage = document.createElement("img");
            talentImage.src = talent.image;
            talentImage.alt = `Talent ${talent.id}`;
            talentImage.style.width = "100%";
            talentImage.style.height = "100%";
            talentImage.style.filter = talent.active ? "none" : "grayscale(100%) brightness(50%)"; // Deaktivierte Talente grau

            talentDiv.appendChild(talentImage);

            talentDiv.addEventListener("click", () => {
                toggleTalent(tree, talent.id);
                showTalentDescription(tree, talent);
            });

            rows[talent.row].appendChild(talentDiv);
        });
    });
}

function showTalentDescription(tree, talent) {
    const treeDiv = document.getElementById(tree.id);
    const existingBubble = document.getElementById("talentBubble");
    if (existingBubble) existingBubble.remove();

    const bubble = document.createElement("div");
    bubble.id = "talentBubble";
    bubble.className = "talent-bubble";
    bubble.innerHTML = `
        <p>${talent.description}</p>
        <button id="closeBubble">&times;</button>
    `;

    bubble.style.position = "absolute";
    bubble.style.top = `${treeDiv.offsetTop + treeDiv.offsetHeight / 2 - bubble.offsetHeight / 2}px`;
    bubble.style.left = `${treeDiv.offsetLeft + treeDiv.offsetWidth / 2 - bubble.offsetWidth / 2}px`;

    document.body.appendChild(bubble);

    document.getElementById("closeBubble").addEventListener("click", () => {
        bubble.remove();
    });
}

function toggleTalent(tree, talentId) {
    const talent = tree.talents.find(t => t.id === talentId);
    if (!talent || (!talent.unlocked && !talent.active)) return;

    // Deactivate talent if allowed
    if (talent.active) {
        const nextRow = tree.talents.filter(t => t.row === talent.row + 1 && t.active);
        if (nextRow.length === 0) {
            talent.active = false;
        }
    } else {
        // Activate talent and check for unlocking next row
        talent.active = true;
    }

    updateTalentTreeUnlocks(tree);
    renderTalentTrees();
}

function updateTalentTreeUnlocks(tree) {
    // Reset all unlocks
    tree.talents.forEach(t => {
        if (t.row > 1) {
            t.unlocked = false;
        }
    });

    // Recalculate unlocks
    for (let row = 1; row <= 8; row++) {
        const currentRow = tree.talents.filter(t => t.row === row && t.active).length;
        const requiredForNextRow = tree.talents.find(t => t.row === row)?.required || 1;

        if (currentRow >= requiredForNextRow) {
            tree.talents
                .filter(t => t.row === row + 1)
                .forEach(t => (t.unlocked = true));
        }
    }
}

renderTalentTrees();

function saveDataToLocalStorage() {
    const data = {
        character: {
            name: document.getElementById("name").value,
            class: document.getElementById("class").value,
            level: document.getElementById("level").value,
            experience: document.getElementById("experience").value,
            strength: document.getElementById("strength").value,
            agility: document.getElementById("agility").value,
            intelligence: document.getElementById("intelligence").value,
            constitution: document.getElementById("constitution").value,
            wisdom: document.getElementById("wisdom").value,
            movement: document.getElementById("movement").value,
            life: document.getElementById("life").value,
            mana: document.getElementById("mana").value,
            attack: document.getElementById("attack").value,
            armor: document.getElementById("armor").value,
            gold: document.getElementById("gold").value,
            ammunition: document.getElementById("ammunition").value,
            other: document.getElementById("other").value,
            potions: document.getElementById("potions").value,
            armorDetails: document.getElementById("armorDetails").value,
            weapons: document.getElementById("weapons").value
        },
        talentTrees: talentTrees.map(tree => ({
            id: tree.id,
            talents: tree.talents.map(t => ({ id: t.id, active: t.active }))
        }))
    };
    localStorage.setItem("characterData", JSON.stringify(data));
    alert("Daten erfolgreich in LocalStorage gespeichert!");
}

function loadDataFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem("characterData"));
    if (!data) {
        alert("Keine gespeicherten Daten gefunden.");
        return;
    }

    // Lade die Charakterdaten
    const character = data.character;
    if (character) {
        document.getElementById("name").value = character.name;
        document.getElementById("class").value = character.class;
        document.getElementById("level").value = character.level;
        document.getElementById("experience").value = character.experience;
        document.getElementById("strength").value = character.strength;
        document.getElementById("agility").value = character.agility;
        document.getElementById("intelligence").value = character.intelligence;
        document.getElementById("constitution").value = character.constitution;
        document.getElementById("wisdom").value = character.wisdom;
        document.getElementById("movement").value = character.movement;
        document.getElementById("life").value = character.life;
        document.getElementById("mana").value = character.mana;
        document.getElementById("attack").value = character.attack;
        document.getElementById("armor").value = character.armor;
        document.getElementById("gold").value = character.gold;
        document.getElementById("ammunition").value = character.ammunition;
        document.getElementById("other").value = character.other;
        document.getElementById("potions").value = character.potions;
        document.getElementById("armorDetails").value = character.armorDetails;
        document.getElementById("weapons").value = character.weapons;
    }

    // Lade die Talentbäume
    data.talentTrees.forEach(savedTree => {
        const tree = talentTrees.find(t => t.id === savedTree.id);
        if (tree) {
            savedTree.talents.forEach(savedTalent => {
                const talent = tree.talents.find(t => t.id === savedTalent.id);
                if (talent) {
                    talent.active = savedTalent.active;
                }
            });
        }
    });

    renderTalentTrees();
    alert("Daten erfolgreich aus LocalStorage geladen!");
}

function downloadBackup() {
    const data = localStorage.getItem("characterData");
    if (!data) {
        alert("Keine gespeicherten Daten zum Download verfügbar.");
        return;
    }
    const blob = new Blob([data], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "character_data_backup.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function uploadBackup(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            localStorage.setItem("characterData", JSON.stringify(data));
            alert("Backup erfolgreich importiert!");
            loadDataFromLocalStorage();
        } catch (error) {
            alert("Fehler beim Importieren der Datei.");
        }
    };
    reader.readAsText(file);
}
document.getElementById("saveButton").addEventListener("click", saveDataToLocalStorage);
document.getElementById("loadButton").addEventListener("click", loadDataFromLocalStorage);
document.getElementById("backupButton").addEventListener("click", downloadBackup);
document.getElementById("uploadBackup").addEventListener("change", uploadBackup);

// Speicherung der neuen Felder in LocalStorage
function saveEquipmentData() {
    const data = {
        head: document.getElementById("head").value,
        torso: document.getElementById("torso").value,
        back: document.getElementById("back").value,
        arms: document.getElementById("arms").value,
        ring: document.getElementById("ring").value,
        weapon: document.getElementById("weapon").value,
        shield: document.getElementById("shield").value,
        bag: document.getElementById("bag").value,
        weaponBelt: [
            document.getElementById("weaponBelt1").value,
            document.getElementById("weaponBelt2").value,
            document.getElementById("weaponBelt3").value
        ],
        backpack: [
            document.getElementById("backpack1").value,
            document.getElementById("backpack2").value,
            document.getElementById("backpack3").value,
            document.getElementById("backpack4").value,
            document.getElementById("backpack5").value,
            document.getElementById("backpack6").value,
            document.getElementById("backpack7").value,
            document.getElementById("backpack8").value
        ]
    };
    localStorage.setItem("equipmentData", JSON.stringify(data));
}

// Laden der gespeicherten Werte
function loadEquipmentData() {
    const data = JSON.parse(localStorage.getItem("equipmentData"));
    if (!data) return;

    document.getElementById("head").value = data.head;
    document.getElementById("torso").value = data.torso;
    document.getElementById("back").value = data.back;
    document.getElementById("arms").value = data.arms;
    document.getElementById("ring").value = data.ring;
    document.getElementById("weapon").value = data.weapon;
    document.getElementById("shield").value = data.shield;
    document.getElementById("bag").value = data.bag;

    for (let i = 0; i < 3; i++) {
        const field = document.getElementById(`weaponBelt${i + 1}`);
        field.value = data.weaponBelt[i];
        field.removeAttribute("disabled"); // Sicherstellen, dass es aktiv ist
    }
    for (let i = 0; i < 8; i++) {
        const field = document.getElementById(`backpack${i + 1}`);
        field.value = data.backpack[i];
        field.removeAttribute("disabled"); // Sicherstellen, dass es aktiv ist
    }    
}

// Speicher- und Lade-Funktion mit den neuen Equipment-Feldern verknüpfen
document.getElementById("saveButton").addEventListener("click", () => {
    saveDataToLocalStorage();
    saveEquipmentData();
});

document.getElementById("loadButton").addEventListener("click", () => {
    loadDataFromLocalStorage();
    loadEquipmentData();
});

// Lade Equipment-Daten beim Start
loadEquipmentData();
