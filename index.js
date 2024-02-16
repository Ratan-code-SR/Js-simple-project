let titleCount = 1;
let totalPrice = 0;

const cards = document.querySelectorAll(".card");
for (const card of cards) {
    card.addEventListener("click", function () {
        const title = card.querySelector("h3").innerText;
        const price = parseFloat(card.querySelector("span").innerText.split(" ")[1]);
        totalPrice += price;


        const titleContainer = document.getElementById("title-container");
        const p = document.createElement("p");
        p.innerText = `${titleCount} ${title}`;
        titleContainer.appendChild(p);
        titleCount++;

        const allPrice = document.getElementById("totalPrice");
        allPrice.innerText = totalPrice.toFixed(2)
    })
}



const button = getElementById("apply-btn");
button.addEventListener("click", function () {
    const input = getElementById("input-field").value;
    const promoCode = input.split(" ").join("").toUpperCase();


    if (totalPrice >= 200) {
        if (promoCode === "SELL2020") {
            const total = totalPrice - totalPrice * 20 / 100;
            const discount = totalPrice - total ;
             getElementById("discountPrice").innerText = discount.toFixed(2);
             getElementById("total").innerText = total.toFixed(2);      

        } else {
            alert("Your promo code is not valid!");
        }

    } else {
        alert("not allowed discount!");
    }


})