const myLogo =
[
    {image : "img/logo1.jpg"}
];
var logo1 = "";
myLogo.forEach((element) => {
    logo1 =`
    <a href="https://www.gucci.com/us/en/"><img src="${element.image}" alt=""></a>
    `
    document.getElementsByClassName('logo')[0].innerHTML = logo1;
});

const mylink = [
    {image : "img/f1.png"},
    {image : "img/f2.jpg"},
    {image : "img/f3.png"},
    {image : "img/f4.png"},
    {image : "img/f5.png"}
];
var imgHTML = "";
mylink.forEach((element) => {
    imgHTML += `
    <a href=""><img src="${element.image}" alt=""></a>
    `;
    document.getElementsByClassName('logo-link')[0].innerHTML = imgHTML;
});
// <------------------------------------------->
const container = document.querySelector(".container");
const gucci = [
    {
        id : "1001",
        brand : "GUCCI",
        image : "img/s1.avif",
        price: "$590.00",
        describe : "COTTON JERSEY T-SHIRT WITH GUCCI EMBROIDERY",
        url : "https://rb.gy/1tuzz6"
    },
    {
        id : "1002",
        brand : "GUCCI",
        price: "$590.00",
        image : "img/s2.avif",
        describe : "T-SHIRT WITH GUCCI BLADE PRINT",
        url : "https://rb.gy/9uqigs"
    },
    {
        id : "1003",
        brand : "GUCCI",
        image : "img/s3.avif",
        price: "$1,500.00",
        describe : "GG COTTON JACQUARD POLO T-SHIRT",
        url : "https://rb.gy/j36bn2"
    },
    {
        id : "1004",
        brand : "GUCCI",
        image : "img/s4.avif",
        price: "$590.00",
        describe : "CHILDREN'S COTTON T-SHIRT WITH GUCCI LOGO",
        url : ""
    },
    {
        id : "1005",
        brand : "GUCCI",
        image : "img/s5.avif",
        price: "$1,790.00",
        describe : "GG MARMONT MATELASSÉ SHOULDER BAG",
        url : ""
    },
    {
        id : "1006",
        brand : "GUCCI",
        image : "img/s6.avif",
        price: "$2,980.00",
        describe : "GG MARMONT MEDIUM SHOULDER BAG",
        url : ""
    },
    {
        id : "1007",
        brand : "GUCCI",
        image : "img/s7.webp",
        price: "$2,550.00",
        describe : "GG MARMONT SMALL SHOULDER BAG",
        url : ""
    },
    {
        id : "1008",
        brand : "GUCCI",
        image : "img/s8.avif",
        price: "$1,790.00",
        describe : "OPHIDIA GG MINI TOP HANDLE BAG",
        url : ""
    }
];
// Function to create HTML for each card
// function createCard(product){
//     return `
//     <div class="card">
//         <div class="img-card">
//           <a href="#">
//             <img src="${product.image}" class="card-img-top" alt="...">
//           </a>
//         </div>
//         <div class="card-body">
//           <p class="card-text"><b>${product.price}<br>
//             <a href="">Brand : ${product.brand} || ID : ${product.id}</b> <br>${product.describe}</a>
//           </p>
//         </div>
//       </div>
//     `;
// }
// // Append the generated HTML for each card to the container
// gucci.forEach((product) => {
//     container.innerHTML += createCard(product);
// });

var myCard = "";
gucci.forEach((product) => {
    myCard += `
    <div class="card">
    <div class="img-card">
      <a href="${product.url}">
        <img src="${product.image}" class="card-img-top" alt="...">
      </a>
    </div>
    <div class="card-body">
      <p class="card-text"><b>${product.price}<br>
        <a href="">Brand : ${product.brand} || ID : ${product.id}</b> <br>${product.describe}</a>
      </p>
    </div>
  </div>
    `;
    document.getElementsByClassName('container')[0].innerHTML = myCard; 
});

// We can use the under function 
// function createCard(product){
//     return `
    
//     `;
// }
// // Append the generated HTML for each card to the container
// gucci.forEach((product) => {
//     container.innerHTML += createCard(product);
// });