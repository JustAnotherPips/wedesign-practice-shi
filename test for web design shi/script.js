
const destinations = [
    {
        image: "images/mountain.jpg",
        title: "Beyond the Ordinary.",
        description: "Discover breathtaking mountain views.",
        color: "#263c35"
    },
    {
        image: "images/ocean.jpg",
        title: "Into the Deep Blue.",
        description: "Explore beautiful oceans and coastlines.",
        color: "#235575"
    },
    {
        image: "images/forest.jpg",
        title: "Escape into Nature.",
        description: "Find peace in the beauty of the forest.",
        color: "#253f29"
    }
];

function changeHero(index) {
    const place = destinations[index];
    const hero = document.querySelector(".hero");

    hero.style.backgroundImage = `
        linear-gradient(to right, #000c, transparent),
        linear-gradient(to top, #101010, transparent),
        url("${place.image}")
    `;

    hero.style.backgroundColor = place.color;

    document.getElementById("title").textContent =
        place.title;

    document.getElementById("description").textContent =
        place.description;
}
