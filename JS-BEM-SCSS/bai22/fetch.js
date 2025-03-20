//  get category 
// fetch("https://dummyjson.com/products/categories")
//     .then(response => response.json())
//     .then(data => {
//         let htmls = '';
//         data.forEach(item => {
//             htmls += `<div class="category-item">${item.name}</div>`;
//         });
//         console.log(htmls);
//         const divCategory = document.querySelector("#category");
//         divCategory.innerHTML = htmls;
//     });
// end get category 



// get laptop 
// fetch("https://dummyjson.com/products/category/laptops")
//     .then(response => response.json())
// .then(data => {
//     let htmls = '';
//     data.products.forEach(item => { // tra ve 1 danh sach products nen phai . vao moi lay dc 
//         htmls += `<div class="product-item">
//                         <img src="${item.thumbnail}" alt="anh...">
//                         <h3> ${item.title}</h3>
//                         <p>${item.price}</p>
//                     </div>`;
//     });
//     console.log(htmls);
//     const divCategory = document.querySelector("#products");
//     divCategory.innerHTML = htmls;
// });
// end get laptop 



// cach toi uu code ma chua co async-await

// const fetchApi = (url) => {
//     const resul = fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             return data;
//         });
//     return resul;
// } // co the export ham nay ra 1 file khac de cho gon

// fetchApi("https://dummyjson.com/products/categories")
//     .then(data => {
//         let htmls = '';
//         data.forEach(item => {
//             htmls += `<div class="category-item">${item.name}</div>`;
//         });
//         console.log(htmls);
//         const divCategory = document.querySelector("#category");
//         divCategory.innerHTML = htmls;
//     });

// fetchApi("https://dummyjson.com/products/category/laptops")
//     .then(data => {
//         let htmls = '';
//         data.products.forEach(item => { // tra ve 1 danh sach products nen phai . vao moi lay dc 
//             htmls += `<div class="product-item">
//                     <img src="${item.thumbnail}" alt="anh...">
//                     <h3> ${item.title}</h3>
//                     <p>${item.price}</p>
//                 </div>`;
//         });
//         console.log(htmls);
//         const divCategory = document.querySelector("#products");
//         divCategory.innerHTML = htmls;
//     });


// cach toi uu khi co 

const fetchApiasyncawait = async (url) => {
    const response = await fetch(url);
    const resul = await response.json();
    return resul;
}

fetchApiasyncawait("http://localhost:3000/categories")
    .then(data => {
        let htmls = '';
        data.forEach(item => {
            htmls += `<div class="category-item">${item.name}</div>`;
        });
        // console.log(htmls); 
        const divCategory = document.querySelector("#category");
        divCategory.innerHTML = htmls;
    });

fetchApiasyncawait("http://localhost:3000/products")
    .then(data => {
        let htmls = '';
        data.forEach(item => { // tra ve 1 danh sach products nen phai . vao moi lay dc 
            htmls += `<div class="product-item">
                    <img src="${item.thumbnail}" alt="anh...">
                    <h3> ${item.title}</h3>
                    <p>${item.price}</p>
                </div>`;
        });
        // console.log(htmls); 
        const divCategory = document.querySelector("#products");
        divCategory.innerHTML = htmls;
    });