document.addEventListener("DOMContentLoaded", function () {
    const headings = {
        hello: 65,
        im: 77,
        chaeyeon: 47,
        jin: 74.5
    };

    Object.keys(headings).forEach(id => {
        const element = document.getElementById(id);
        let moved = false;

        element.addEventListener("click", function () {
            if (moved) {
                element.style.transform = "translateX(0)";
            } else {
                element.style.transform = `translateX(${headings[id]}vw)`;
            }
            moved = !moved;
        });
    });
});