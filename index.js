/* Products Data */
var productsData = [
    {
        name: 'lafco',
        desc: 'Paradiso fig Anniversary Classic Candle',
        price: 50,
        image: 'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-727080240583-1_235x.jpg?v=1660241057',
    },
    {
        name: 'R+Co',
        desc: 'Labyrinth 3-in-1 Texturizing Shampoo + Conditioner + Styler',
        price: 28,
        image: 'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-bundle_balm-labs_clearbalm-3-step-system_072622-1_235x.jpg?v=1659385894'
    },
    {
        name: 'BalmLabs',
        desc: 'ClearBalm Power Elixir',
        price: 58,
        image: 'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-195893475407-1_235x.jpg?v=1659989243'
    },
    {
        name: 'Sisley-Paris',
        desc: 'Exfoliating Enzyme Mask',
        price: 135,
        image: 'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-3473311524355-1_235x.jpg?v=1661354823'
    },
    {
        name: 'Lake & Skye',
        desc: '11 11 Eau de Parfum',
        price: 98,
        image: 'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-size-17oz-087327005284-1_550x.jpg?v=1659760712'
    },
    {
        name: 'Lake & Skye',
        desc: '11 11 Candle',
        price: 48,
        image: 'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-087327005291-1_550x.jpg?v=1659760709'
    },
    {
        name: 'Oribe',
        desc: 'Limited Edition Dry Texturizing Spray',
        price: 49,
        image: 'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-840035217833-1_550x.jpg?v=1660205955',
    },
    {
        name: 'Lune+Aster',
        desc: 'Sunset Eyeshadow Palette',
        price: 48,
        image: 'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-814309022799-1_550x.jpg?v=1660624151'
    },
]

/*******************************
Start: Best seller slideshow
*******************************/

function slideshowBestSellers() {
    let slide_img = document.getElementById('slide-img');
    let img = document.createElement('img');

    let best_sellers_arr = ['https://cdn.shopify.com/s/files/1/0283/0185/2747/files/fall-color-collections-preview-hero-des_1300x.jpg?v=1660601083',
     'https://cdn.shopify.com/s/files/1/0283/0185/2747/files/routines-hydration-hero-des_1300x.jpg?v=1660589835',  
     'https://cdn.shopify.com/s/files/1/0283/0185/2747/collections/beauty-alfresco-brand-hero-wide_2880x650.jpg?v=1651844445'];

    img.src = best_sellers_arr[0];
    img.style.width = '100%';
    slide_img.append(img);
    let i = 1;
    setInterval(function () {
        img.src = best_sellers_arr[i % best_sellers_arr.length];
        img.style.width = '100%';
        i++;
        slide_img.append(img);
    }, 3000);

    let dots = document.getElementById('dots-slide');
    let dot_div = document.createElement('div');
    dot_div.style.display = 'inline-block';
}

slideshowBestSellers();

/******************************
 End: Bestsellers slideshow
******************************/

var productsData = [
    {
        name: 'lafco',
        desc: 'Paradiso fig Anniversary Classic Candle',
        price: 50,
        image: 'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-727080240583-1_235x.jpg?v=1660241057',
    },
    {
        name: 'R+Co',
        desc: 'Labyrinth 3-in-1 Texturizing Shampoo + Conditioner + Styler',
        price: 28,
        image: 'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-bundle_balm-labs_clearbalm-3-step-system_072622-1_235x.jpg?v=1659385894'
    },
    {
        name: 'BalmLabs',
        desc: 'ClearBalm Power Elixir',
        price: 58,
        image: 'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-195893475407-1_235x.jpg?v=1659989243'
    },
    {
        name: 'Sisley-Paris',
        desc: 'Exfoliating Enzyme Mask',
        price: 135,
        image: 'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-3473311524355-1_235x.jpg?v=1661354823'
    },
    {
        name: 'Lake & Skye',
        desc: '11 11 Eau de Parfum',
        price: 98,
        image: 'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-size-17oz-087327005284-1_550x.jpg?v=1659760712'
    },
    {
        name: 'Lake & Skye',
        desc: '11 11 Candle',
        price: 48,
        image: 'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-087327005291-1_550x.jpg?v=1659760709'
    },
    {
        name: 'Oribe',
        desc: 'Limited Edition Dry Texturizing Spray',
        price: 49,
        image: 'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-840035217833-1_550x.jpg?v=1660205955',
    },
    {
        name: 'Lune+Aster',
        desc: 'Sunset Eyeshadow Palette',
        price: 48,
        image: 'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-814309022799-1_550x.jpg?v=1660624151'
    },
]

/**********************************
New Arrivals js part
**********************************/

var startIndex = 0;
let prod_div = document.getElementById('products'); // DOM part

function productShow(startIndex, numOfProd) {

    // console.log("startIndex first: ", startIndex)
    prod_div.innerHTML = null;
  
    for (var i = startIndex; i < numOfProd; i++) {

        let div = document.createElement('div'); // Div for single products 

        let img = document.createElement('img');
        img.src = productsData[i].image;

        let p_name = document.createElement('p');
        p_name.innerHTML = productsData[i].name;

        let p_desc = document.createElement('p');
        p_desc.innerHTML = productsData[i].desc;

        let p_price = document.createElement('p');
        p_price.innerHTML =  productsData[i].price + "$";

        div.append(img, p_name, p_desc, p_price);
        div.style.display = 'inline-block';
        prod_div.append(div);

        // Merging of the Product page

        img.addEventListener("click", function () {
            window.location.href = "product.html";
        });

        p_name.addEventListener("click", function () {
            window.location.href = "product.html";
        });

        p_price.addEventListener("click", function () {
            window.location.href = "product.html";
        });
    }
}

var numOfProd = 4;
productShow(0, numOfProd);


// Carousel Section Sliding by nitesh
let a = 4;
let b = 8;
var next = document.getElementById('nextSlider-btn');
next.addEventListener('click', () => {
    productShow(a, b);
    a = 0;
    b = 4
});

var prev = document.getElementById('prevSlider-btn');
prev.addEventListener('click', () => {
   
    productShow(a, b);
    a = 0;
    b = 4
});