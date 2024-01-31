"use strict";
//Get the HTML elements
let addItem = document.querySelector('#add');
let productName = document.querySelector('#productName');
let productDescription = document.querySelector('#productDescription');
let productCategory = document.querySelector('#productCategory');
let quantity = document.querySelector('#quantity');
let SKU = document.querySelector('#SKU');
let variant = document.querySelector('#variant');
let img = document.querySelector('#img');
let weight = document.querySelector('#weight');
let Length = document.querySelector('#length');
let Weight = document.querySelector('#Weight');
let width = document.querySelector('#width');
let Price = document.querySelector('#Price');
let discount = document.querySelector('#discount');
let form = document.querySelector('.addProduct');
let adminData = document.querySelector('.adminData');
let content = document.querySelector('.content');
let fileInput = document.querySelector('#fileInput');
let addNew = document.querySelector('.navigate');
addNew.addEventListener('click', () => {
    adminData.style.display = 'none';
    productAdded.displayProduct();
    content.style.display = 'block';
});
//Create an empty array to store the properties of the new product
let product = [];
window.onload = () => {
    let items = localStorage.getItem("item");
    items = JSON.parse(items);
    items.forEach((item) => {
        product.push(item);
        productAdded.displayProduct();
    });
    if (content.style.display = 'none') {
        productAdded.displayProduct();
    }
    else {
        adminData.style.display = 'none';
    }
    // adminData.style.display = 'none'
};
//When the form is submitted by clicking on add product:
// fileInput.addEventListener('change',(e) => {
//     e.preventDefault();
//     // Call displayProduct only after the image has been uploaded
//     productAdded.displayProduct();
// });
form.addEventListener('submit', (e) => {
    //Prevent the page from reloading
    e.preventDefault();
    // Hide form 
    if (content.style.display = 'none') {
        productAdded.displayProduct();
    }
    else {
        adminData.style.display = 'none';
    }
    //Check that all of the values have been provided
    let productEntry = productName.value.trim() != '' && productDescription.value.trim() != '' && productCategory.value.trim() != '' && quantity.value.trim() != '' &&
        variant.value.trim() != '' && weight.value.trim() != '' && width.value.trim() != '' && Price.value.trim() != '' && discount.value.trim() != '';
    if (productEntry) {
        //initialize the interface 
        let newProduct = {
            //Remove spaces before and after the user input
            productName: productName.value.trim(),
            description: productDescription.value.trim(),
            category: productCategory.value.trim(),
            quantity: parseFloat(quantity.value.trim()),
            SKU: SKU.value.trim(),
            variant: variant.value.trim(),
            image: img.src,
            weight: parseFloat(weight.value.trim()),
            packageLength: parseFloat(Length.value.trim()),
            packageWeight: parseFloat(Weight.value.trim()),
            packageWidth: parseFloat(width.value.trim()),
            price: parseFloat(Price.value.trim()),
            comparePrice: parseFloat(discount.value.trim())
        };
        product.push(newProduct);
        console.log(newProduct);
        localStorage.setItem('item', JSON.stringify(product));
    }
});
// class Images {
//     async uploadFile() {
//         return new Promise<HTMLImageElement>((resolve, reject) => {
//             const fileInput = document.getElementById('fileInput') as HTMLInputElement;
//             const resultDiv = document.getElementById('result') as HTMLDivElement;
//             let uploadedImage = document.createElement('img');
//             if (fileInput.files) {
//                 const file = fileInput.files[0];
//                 if (file) {
//                     const reader = new FileReader();
//                     reader.onload = function (e) {
//                         if (e.target) {
//                             const dataURL = e.target.result;
//                             // Store the file in local storage
//                             localStorage.setItem('uploadedFile', JSON.stringify(dataURL));
//                             // Display the link to the stored file
//                             resultDiv.innerHTML = `<p>File uploaded successfully. Link: <a href="${dataURL}" target="_blank">${dataURL}</a></p>`;
//                             uploadedImage.src = `${dataURL}`;
//                             resultDiv.appendChild(uploadedImage);
//                             resolve(uploadedImage);
//                         }
//                     };
//                     reader.readAsDataURL(file);
//                 } else {
//                     resultDiv.innerHTML = '<p>Please select a file before uploading.</p>';
//                     reject(new Error('No file selected'));
//                 }
//             }
//         });
//     }
// }
class addedProduct {
    displayProduct() {
        //Convert back to JSON. Since the item stored may be empty, we have added the empty object
        let productObject = JSON.parse(localStorage.getItem("item") || '{}');
        console.log(productObject);
        //To be able to loop over the JSON object, we have stored the data in a new array
        productObject.forEach((element) => {
            //Create a div that wll be added to the parent div
            let adminDisplay = document.createElement('div');
            adminDisplay.className = "adminDisplay";
            //Create a div for each element 
            let itemName = document.createElement('div');
            itemName.className = "itemName";
            itemName.textContent = element.productName;
            let itemDescription = document.createElement('div');
            itemDescription.className = "itemDesc";
            itemDescription.innerHTML = element.description;
            let itemCategory = document.createElement('div');
            itemCategory.className = "itemDesc";
            itemCategory.innerHTML = element.category;
            let itemQuantity = document.createElement('div');
            itemQuantity.className = "itemDesc";
            itemQuantity.innerHTML = '' + element.quantity;
            let itemSKU = document.createElement('div');
            itemSKU.className = "itemDesc";
            itemSKU.innerHTML = '' + element.SKU;
            let itemVariant = document.createElement('div');
            itemVariant.className = "itemDesc";
            itemVariant.innerHTML = element.variant;
            let itemImage = document.createElement('img');
            itemImage.className = "itemImage";
            itemImage.innerHTML = '';
            let itemWeight = document.createElement('div');
            itemWeight.className = "itemDesc";
            itemWeight.innerHTML = '' + element.weight;
            let itemPkgLength = document.createElement('div');
            itemPkgLength.className = "itemDesc";
            itemPkgLength.innerHTML = '' + element.packageLength;
            let itemPrice = document.createElement('div');
            itemPrice.className = "itemDesc";
            itemPrice.textContent = "" + element.price;
            let itemDiscount = document.createElement('div');
            itemDiscount.className = "itemDesc";
            itemDiscount.innerHTML = '' + element.comparePrice;
            let itemPkgWidth = document.createElement('div');
            itemPkgWidth.className = "itemDesc";
            itemPkgWidth.innerHTML = "" + element.packageWidth;
            let itemPkgWeight = document.createElement('div');
            itemPkgWeight.className = "itemDesc";
            itemPkgWeight.innerHTML = "" + element.packageWeight;
            //Append all the divs to the admin display
            adminDisplay.appendChild(itemName);
            adminDisplay.appendChild(itemDescription);
            adminDisplay.appendChild(itemCategory);
            adminDisplay.appendChild(itemQuantity);
            adminDisplay.appendChild(itemSKU);
            adminDisplay.appendChild(itemVariant);
            adminDisplay.appendChild(itemImage);
            adminDisplay.appendChild(itemWeight);
            adminDisplay.appendChild(itemPkgLength);
            adminDisplay.appendChild(itemPkgWidth);
            adminDisplay.appendChild(itemPkgWeight);
            adminDisplay.appendChild(itemPrice);
            adminDisplay.appendChild(itemDiscount);
            //append to admin
            adminData.appendChild(adminDisplay);
        });
    }
}
let productAdded = new addedProduct;
