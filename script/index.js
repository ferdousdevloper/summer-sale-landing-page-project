// console.log('connected')


let titleCount = 1;
let totalPrice = 0;
const cards = document.querySelectorAll(".card");


for (let index = 0; index < cards.length; index++) {
    const card = cards[index];

    card.addEventListener("click", function () {


        // get the title
        const title = card.querySelector("h2").innerText;

        const price = parseFloat(card.querySelector("p").innerText.split(" ")[0]);




        const titleContainer = document.getElementById('title-container');


        const h3 = document.createElement("h3");
        h3.innerText = titleCount + ". " + title;

        titleContainer.appendChild(h3);
        titleCount++;

        totalPrice += price;
        console.log(totalPrice)

        document.getElementById('total-price').innerText = totalPrice.toFixed(2);


    })
}

const btn = document.getElementById('apply');
btn.addEventListener('click', function () {

    const couponElement = document.getElementById('input-field').value;
    console.log(couponElement);

    const couponCode = couponElement.split(" ").join("").toUpperCase();

    console.log(couponCode);

    if (totalPrice >= 200) {
        if (couponCode === "SELL200") {
            const discountElement = document.getElementById('discount-price');
            const discountAmount = totalPrice * 0.2;
            discountElement.innerText = discountAmount.toFixed(2);

            const restTotal = document.getElementById('restTotal');
            restTotal.innerText = totalPrice - discountAmount.toFixed(2);

            document.getElementById('input-field').value = "";

        } else {
            alert('Invalid Coupon');
            document.getElementById('input-field').value = "";
        }
    } else {
        alert('Please Buy upto 200 tk for get this offer');
        document.getElementById('input-field').value = "";
    }

})