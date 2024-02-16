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
            const discount = totalPrice - total;
            getElementById("discountPrice").innerText = discount.toFixed(2);
            getElementById("total").innerText = total.toFixed(2);
            getElementById("input-field").value = " ";

        } else {
            alert("Your promo code is not valid!");
            getElementById("input-field").value = " ";
        }

    } else {
        alert("not allowed discount!");
        getElementById("input-field").value = " ";
    }
});


const welcomeMassage = () => {
    if (totalPrice === 0) {
        alert("please buy the product");
    }
    else {
        getElementById("display").classList.remove("hidden");
        getElementById("main").classList.add("hidden");
        getElementById("header").classList.add("hidden");
    }

}

const goHome = () => {
    getElementById("display").classList.add("hidden");
    getElementById("main").classList.remove("hidden");
    getElementById("header").classList.remove("hidden");
    // reset
    getElementById("discountPrice").innerText = '';
    getElementById("total").innerText = '';
    getElementById("totalPrice").innerText = '';
    getElementById("input-field").value = " ";
    getElementById("title-container").innerText = " ";
    titleCount = 1;
}