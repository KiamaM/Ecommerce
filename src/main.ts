// class Images{
//      uploadFile() {
//         const fileInput = document.getElementById('fileInput') as HTMLInputElement;
//         const resultDiv = document.getElementById('result') as HTMLDivElement;
//         let uploadedImage = document.createElement('img') 
    
//         if(fileInput.files)
//         {const file = fileInput.files[0];
    
//         if (file) {
//             const reader = new FileReader();
    
//             reader.onload = function (e) {
//                 if(e.target){
    
//                 const dataURL = e.target.result;
    
//                 // Store the file in local storage
//                 localStorage.setItem('uploadedFile', JSON.stringify(dataURL));
    
//                 // Display the link to the stored file
//                 resultDiv.innerHTML = `<p>File uploaded successfully. Link: <a href="${dataURL}" target="_blank">${dataURL}</a></p>`;
//                 uploadedImage.src = `${dataURL}`
    
//                 resultDiv.appendChild(uploadedImage)
    
//             }
    
//             };
    
//             reader.readAsDataURL(file);
//         } else {
//             resultDiv.innerHTML = '<p>Please select a file before uploading.</p>';
//         }
//     }
//     }
// }



// let newImage = new Images
// newImage.uploadFile()