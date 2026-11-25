
const images = ["mountain", "ocean", "forest"];

const titles = [
    "Beyond the Ordinary.",
    "Into the Deep Blue.",
    "Escape into Nature."
];

const descriptions = [
    "Discover breathtaking mountain views.",
    "Explore beautiful oceans and coastlines.",
    "Find peace in the beauty of the forest."
];

function show(i) {
    document.querySelector(".hero").style.setProperty(
        "--image", `url("images/${images[i]}.jpg")`
    );

    document.getElementById("title").textContent = titles[i];
    document.getElementById("description").textContent = descriptions[i];
}

function searchPlaces() {
    const value = document.getElementById("search").value.toLowerCase().trim();
    let first = -1;

    document.querySelectorAll(".card").forEach((card, i) => {
        card.hidden = !card.textContent.toLowerCase().includes(value);

        if (!card.hidden && first === -1) first = i;
    });

    document.getElementById("empty").hidden = first !== -1;

    if (first !== -1 && value) show(first);
}
