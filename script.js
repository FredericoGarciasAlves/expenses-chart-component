const graphics = document.querySelectorAll(".graphics");
const boxDays = document.querySelectorAll(".box-days");
const boxGraphics = document.createElement("div");

boxGraphics.className = "box-dado";

let prices = [];

for (let i = 0; i < graphics.length; i++) {
    prices.push((Math.random() * 100 + 1).toFixed(2));
}

let maxPrice = Math.max(...prices);

graphics.forEach((graphicsDays, index) => {
    let height = (prices[index] / maxPrice) * 150;
    graphicsDays.style.height = `${height}px`;

    graphicsDays.addEventListener("click", () => {
        boxGraphics.textContent = `$${prices[index]}`;
        boxDays[index].insertBefore(boxGraphics, graphicsDays);
    });
});
setTimeout(() => {
    const graphics = document.querySelectorAll(".graphics");
    let largerBox = null;
    let maxHeight = 0;
    let maxHeightHover = 0;

    graphics.forEach((box, index) => {
        const height = box.offsetHeight;
        if (height > maxHeight) {
            maxHeight = height;
            largerBox = box;
        }
        box.addEventListener("mouseover", () => {
            if (box !== largerBox) {
                box.style.backgroundColor = "#ff9b86";
            }
        });

        box.addEventListener("mouseout", () => {
            if (box !== largerBox) {
                box.style.backgroundColor = "#ec755d";
            }
        });
    });
    console.log(largerBox.offsetHeight);

    if (largerBox) {
        largerBox.style.backgroundColor = "#76b5bc";
        largerBox.addEventListener("mouseover", () => {
            largerBox.style.backgroundColor = "#b4e0e5";
        });
        largerBox.addEventListener("mouseout", () => {
            largerBox.style.backgroundColor = "#76b5bc";
        });
    }
}, 5);
