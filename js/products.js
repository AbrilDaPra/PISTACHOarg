let products = [];
fetch("../js/products.json")
    .then(response => response.json())
    .then(data => {
        products = data;
        loadProducts(products);
    })

function loadProducts(chosenProducts){
    let productContainer = document.getElementById("productContainer");
    //Vaciamos el contenedor antes de cargar los productos
    productContainer.innerHTML = "";

    //Utilizo un forEach para crear todos los productos
    chosenProducts.forEach((product) => {
        let div = document.createElement("div");
        div.classList.add("card-product"); 
        div.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <h4>Price: $${product.price}</h4>
            <button class="buy-btn addtocart-btn" id="agregar-${product.id}">ADD TO CART</button>
        `;
        
        //Agrego la card product al contenedor de productos
        productContainer.append(div);

        //Agrego el evento onclick al botón "ADD TO CART"
        let addToCartButton = document.getElementById(`agregar-${product.id}`);
        addToCartButton.addEventListener('click', () => addToCart(product));
    });
}

function increasePrices(products){
    const increasedProducts = products.map(product => {
      const increasedPrice = product.price * 1.2; // Aumento del 20%
      return { ...product, price: increasedPrice };
    });
  
    return increasedProducts;
}

const updatedProducts = increasePrices(products);
console.log(updatedProducts);

  