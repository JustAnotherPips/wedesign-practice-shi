
function show(image) {
    const preview = document.getElementById("preview");
    preview.src = "images/" + image + ".jpg";
    preview.alt = image + " landscape";
}

function searchPlaces() {
    const value = document.getElementById("search").value.toLowerCase();

    document.querySelectorAll(".list button").forEach(button => {
        button.hidden = !button.textContent.toLowerCase().includes(value);
    });

    const first = document.querySelector(".list button:not([hidden])");
    document.getElementById("preview").hidden = !first;

    if (first && value) first.click();
}
