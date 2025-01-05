// Talentbaum-Daten
const talentTrees = [
    {
        id: "tree1",
        talents: createTalentTree(),
        backgroundImage: "Designs/PhysicalBackround.jpg"
    },
    {
        id: "tree2",
        talents: createTalentTree(),
        backgroundImage: "Designs/MagicalBackround.jpg"
    },
    {
        id: "tree3",
        talents: createTalentTree(),
        backgroundImage: "Designs/TankBackround.jpg"
    },
    {
        id: "tree4",
        talents: createTalentTree(),
        backgroundImage: "Designs/HealBackround.jpg"
    }
];

function createTalentTree() {
    return [
        { id: 1, row: 1, unlocked: true, active: false, required: 2, image: "Physical1.png", description: "Talent 1 Beschreibung" },
        { id: 2, row: 1, unlocked: true, active: false, required: 2, image: "talent2.png", description: "Talent 2 Beschreibung" },
        { id: 3, row: 1, unlocked: true, active: false, required: 2, image: "talent3.png", description: "Talent 3 Beschreibung" },
        { id: 4, row: 2, unlocked: false, active: false, required: 1, image: "talent4.png", description: "Talent 4 Beschreibung" },
        { id: 5, row: 2, unlocked: false, active: false, required: 1, image: "talent5.png", description: "Talent 5 Beschreibung" },
        { id: 6, row: 3, unlocked: false, active: false, required: 1, image: "talent6.png", description: "Talent 6 Beschreibung" },
        { id: 7, row: 3, unlocked: false, active: false, required: 1, image: "talent7.png", description: "Talent 7 Beschreibung" },
        { id: 8, row: 4, unlocked: false, active: false, required: 2, image: "talent8.png", description: "Talent 8 Beschreibung" },
        { id: 9, row: 4, unlocked: false, active: false, required: 2, image: "talent9.png", description: "Talent 9 Beschreibung" },
        { id: 10, row: 4, unlocked: false, active: false, required: 2, image: "talent10.png", description: "Talent 10 Beschreibung" },
        { id: 11, row: 5, unlocked: false, active: false, required: 1, image: "talent11.png", description: "Talent 11 Beschreibung" },
        { id: 12, row: 5, unlocked: false, active: false, required: 1, image: "talent12.png", description: "Talent 12 Beschreibung" },
        { id: 13, row: 6, unlocked: false, active: false, required: 1, image: "talent13.png", description: "Talent 13 Beschreibung" },
        { id: 14, row: 6, unlocked: false, active: false, required: 1, image: "talent14.png", description: "Talent 14 Beschreibung" },
        { id: 15, row: 7, unlocked: false, active: false, required: 2, image: "talent15.png", description: "Talent 15 Beschreibung" },
        { id: 16, row: 7, unlocked: false, active: false, required: 2, image: "talent16.png", description: "Talent 16 Beschreibung" },
        { id: 17, row: 7, unlocked: false, active: false, required: 2, image: "talent17.png", description: "Talent 17 Beschreibung" },
        { id: 18, row: 8, unlocked: false, active: false, required: 1, image: "talent18.png", description: "Talent 18 Beschreibung" }
    ];
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
            talentDiv.appendChild(talentImage);

            talentDiv.addEventListener("click", () => {
                toggleTalent(tree, talent.id);
                showTalentDescription(talent);
            });

            rows[talent.row].appendChild(talentDiv);
        });
    });
}

function showTalentDescription(talent) {
    const existingBubble = document.getElementById("talentBubble");
    if (existingBubble) existingBubble.remove();

    const bubble = document.createElement("div");
    bubble.id = "talentBubble";
    bubble.className = "talent-bubble";
    bubble.innerHTML = `
        <p>${talent.description}</p>
        <button id="closeBubble">&times;</button>
    `;
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

// Speicher- und Ladefunktion
function saveData() {
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

    const blob = new Blob([JSON.stringify(data)], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "character_data.json";
    link.click();
}

document.getElementById("saveButton").addEventListener("click", saveData);

function loadData() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = event => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            const data = JSON.parse(reader.result);

            // Load character data
            const character = data.character;
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

            // Load talent tree data
            data.talentTrees.forEach(treeData => {
                const tree = talentTrees.find(t => t.id === treeData.id);
                if (tree) {
                    treeData.talents.forEach(tData => {
                        const talent = tree.talents.find(t => t.id === tData.id);
                        if (talent) {
                            talent.active = tData.active;
                            if (talent.active) {
                                tree.talents
                                    .filter(t => t.row === talent.row + 1)
                                    .forEach(t => (t.unlocked = true));
                            }
                        }
                    });
                }
            });

            renderTalentTrees();
        };
        reader.readAsText(file);
    };
    input.click();
}

document.getElementById("loadButton").addEventListener("click", loadData);
