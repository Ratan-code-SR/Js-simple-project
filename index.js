let titleCount = 1;
let totalPrice = 0;

const cards = document.querySelectorAll(".card");
for (const card of cards) {
    card.addEventListener("click", function () {
        const title = card.querySelector("h3").innerText;
        const price = parseFloat(card.querySelector("span").innerText.split(" ")[1]);
        totalPrice +=price;


        const titleContainer = document.getElementById("title-container");
        const p = document.createElement("p");
        p.innerText = `${titleCount} ${title}`;
        titleContainer.appendChild(p);
        titleCount++;

        const allPrice = document.getElementById("totalPrice");
        allPrice.innerText = totalPrice.toFixed(2)


    })
}