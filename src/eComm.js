//Get the HTML elements
var addItem = document.querySelector('#add');
var productName = document.querySelector('#productName');
var productDescription = document.querySelector('#productDescription');
var productCategory = document.querySelector('#productCategory');
var quantity = document.querySelector('#quantity');
var SKU = document.querySelector('#SKU');
var variant = document.querySelector('#variant');
var img = document.querySelector('#img');
var weight = document.querySelector('#weight');
var Length = document.querySelector('#length');
var Weight = document.querySelector('#Weight');
var width = document.querySelector('#width');
var Price = document.querySelector('#Price');
var discount = document.querySelector('#discount');
var form = document.querySelector('.addProduct');
var adminData = document.querySelector('.adminData');
var content = document.querySelector('.content');
var picture = document.querySelector('.itemImage');
var adminImage = document.querySelector('.adminDisplay');
var fileInput = document.querySelector('#fileInput');
//Create an empty array to store the properties of the new product
var product = [];
// window.onload=()=>{
//     let items:any = localStorage.getItem("item")
//     items = JSON.parse(items)
//     items.forEach((item:any)=>{
//         product.push(item)
//     })
//     // adminData.style.display = 'none'
// }
//When the form is submitted by clicking on add product:
form.addEventListener('submit', function (e) {
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
    var productEntry = productName.value.trim() != '' && productDescription.value.trim() != '' && productCategory.value.trim() != '' && quantity.value.trim() != '' &&
        variant.value.trim() != '' && weight.value.trim() != '' && width.value.trim() != '' && Price.value.trim() != '' && discount.value.trim() != '';
    if (productEntry) {
        //initialize the interface 
        var newProduct = {
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
    productAdded.displayProduct();
});
var addedProduct = /** @class */ (function () {
    function addedProduct() {
    }
    addedProduct.prototype.displayProduct = function () {
        newImage.uploadFile();
        //Convert back to JSON. Since the item stored may be empty, we have added the empty object
        var productObject = JSON.parse(localStorage.getItem("item") || '{}');
        console.log(productObject);
        //To be able to loop over the JSON object, we have stored the data in a new array
        productObject.forEach(function (element) {
            //Create a div that wll be added to the parent div
            var adminDisplay = document.createElement('div');
            adminDisplay.className = "adminDisplay";
            //Create a div for each element 
            var itemName = document.createElement('div');
            itemName.className = "itemName";
            itemName.textContent = element.productName;
            var itemDescription = document.createElement('div');
            itemDescription.className = "itemDesc";
            itemDescription.innerHTML = element.description;
            var itemCategory = document.createElement('div');
            itemCategory.className = "itemDesc";
            itemCategory.innerHTML = element.category;
            var itemQuantity = document.createElement('div');
            itemQuantity.className = "itemDesc";
            itemQuantity.innerHTML = '' + element.quantity;
            var itemSKU = document.createElement('div');
            itemSKU.className = "itemDesc";
            itemSKU.innerHTML = '' + element.SKU;
            var itemVariant = document.createElement('div');
            itemVariant.className = "itemDesc";
            itemVariant.innerHTML = element.variant;
            var itemImage = document.createElement('div');
            itemImage.className = "itemImage";
            var uploadedImage = document.createElement('img');
            uploadedImage.src = uploadedImage.src;
            itemImage.appendChild(uploadedImage);
            var itemWeight = document.createElement('div');
            itemWeight.className = "itemDesc";
            itemWeight.innerHTML = '' + element.weight;
            var itemPkgLength = document.createElement('div');
            itemPkgLength.className = "itemDesc";
            itemPkgLength.innerHTML = '' + element.packageLength;
            var itemPrice = document.createElement('div');
            itemPrice.className = "itemDesc";
            itemPrice.textContent = "" + element.price;
            var itemDiscount = document.createElement('div');
            itemDiscount.className = "itemDesc";
            itemDiscount.innerHTML = '' + element.comparePrice;
            var itemPkgWidth = document.createElement('div');
            itemPkgWidth.className = "itemDesc";
            itemPkgWidth.innerHTML = "" + element.packageWidth;
            var itemPkgWeight = document.createElement('div');
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
    };
    return addedProduct;
}());
var productAdded = new addedProduct;
fileInput.addEventListener('click', function (e) {
    e.preventDefault();
    var Images = /** @class */ (function () {
        function Images() {
        }
        Images.prototype.uploadFile = function () {
            var fileInput = document.getElementById('fileInput');
            var resultDiv = document.getElementById('result');
            var uploadedImage = document.createElement('img');
            if (fileInput.files) {
                var file = fileInput.files[0];
                if (file) {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        if (e.target) {
                            var dataURL = e.target.result;
                            // Store the file in local storage
                            localStorage.setItem('uploadedFile', JSON.stringify(dataURL));
                            // Display the link to the stored file
                            resultDiv.innerHTML = "<p>File uploaded successfully. Link: <a href=\"".concat(dataURL, "\" target=\"_blank\">").concat(dataURL, "</a></p>");
                            uploadedImage.src = "".concat(dataURL);
                            resultDiv.appendChild(uploadedImage);
                        }
                    };
                    reader.readAsDataURL(file);
                }
                else {
                    resultDiv.innerHTML = '<p>Please select a file before uploading.</p>';
                }
            }
            return uploadedImage.src;
        };
        return Images;
    }());
    var newImage = new Images;
    newImage.uploadFile();
});
