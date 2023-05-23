let products = {
    data: [

        {
        productName : "Lorem1",
        price : "1",
        image: "https://media.discordapp.net/attachments/493767235744301070/1109705760453173268/fikutfdyqb1a1.jpg?width=454&height=454"
        },


        {
        productName : "Lorem2",
        price : "2",
        image: "https://media.discordapp.net/attachments/493767235744301070/1109705760453173268/fikutfdyqb1a1.jpg?width=454&height=454"
        },


        {
        productName : "Lorem3",
        price : "3",
        image: "https://media.discordapp.net/attachments/493767235744301070/1109705760453173268/fikutfdyqb1a1.jpg?width=454&height=454"
        },


        {
        productName : "Lorem4",
        price : "4",
        image: "https://media.discordapp.net/attachments/493767235744301070/1109705760453173268/fikutfdyqb1a1.jpg?width=454&height=454"
        },


        {
        productName : "Lorem5",
        price : "5",
        image: "https://media.discordapp.net/attachments/493767235744301070/1109705760453173268/fikutfdyqb1a1.jpg?width=454&height=454"
        },


        {
        productName : "Lorem6",
        price : "6",
        image: "https://media.discordapp.net/attachments/493767235744301070/1109705760453173268/fikutfdyqb1a1.jpg?width=454&height=454"
        },


        {
        productName : "Lorem7",
        price : "7",
        image: "https://media.discordapp.net/attachments/493767235744301070/1109705760453173268/fikutfdyqb1a1.jpg?width=454&height=454"
        },


        {
        productName : "Lorem8",
        price : "8",
        image: "https://media.discordapp.net/attachments/493767235744301070/1109705760453173268/fikutfdyqb1a1.jpg?width=454&height=454"
        }


    ]
}

for (let i of products.data) {

    let card = document.createElement("div")
    card.classList.add("card")

    let imgContainer = document.createElement("div")
    imgContainer.classList.add("image-container")

    let image = document.createElement("img")
    image.setAttribute("src", i.image) 
    imgContainer.appendChild(image)
    card.appendChild(imgContainer)

    let container = document.createElement("div")
    container.classList.add("container")

    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);

    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);

}

document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input").value.toUpperCase()
    let cards = document.querySelectorAll(".card")/* lấy tất cả thẻ có class card */
    let productsName = document.querySelectorAll(".product-name")
    let prices = document.querySelectorAll('h6')

    productsName.forEach((items, index) => {
        if (items.innerText.includes(searchInput)){
            cards[index].classList.remove("hide")
        } else{
            cards[index].classList.add("hide")
        }
    })
    

})
  



