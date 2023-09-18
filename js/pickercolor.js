let productImage = document.getElementById("product-image");
let colorElements = document.querySelectorAll(".picker-color div");

colorElements.forEach(function(colorElement) {
    colorElement.addEventListener("click", function() {
        let color = this.getAttribute("data-color");

        productImage.src = `../../../images/catalogue-addams.PNG`;
    });
});

