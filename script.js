const song = [
    {
        pt: "E nessa loucura de dizer que não te quero",
        en: "And in this madness of saying I don't want you"
    },
    {
        pt: "Vou negando as aparências",
        en: "I keep denying appearances"
    },
    {
        pt: "Disfarçando as evidências",
        en: "And disguising the evidence"
    }
];

const lyricsDiv = document.getElementById("lyrics");

for (const line of song) {

    const card = document.createElement("div");
    card.className = "lyric-card";

    const pt = document.createElement("div");
    pt.className = "portuguese";
    pt.textContent = line.pt;

    const en = document.createElement("div");
    en.className = "english";
    en.textContent = line.en;

    card.appendChild(pt);
    card.appendChild(en);

    lyricsDiv.appendChild(card);
}