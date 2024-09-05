const product = [
    
    {
        id: 0,
        image: '/images/single-light.png',
        title: 'Green Screen',
        price: 30,
    },
    {
        id: 1,
        image: '/images/tripod.png',
        title: 'Flex Tripod',
        price: 50.8,
    },
    {
        id: 2,
        image: '/images/mic.png',
        title: 'Microphone',
        price: 120,
    },
    {
        id: 3,
        image: '/images/airpod.png',
        title: 'Airbuds',
        price: 230,
    },
    {
        id: 4,
        image: '/images/drone.png',
        title: 'Drone',
        price: 900,
    },
    {
        id: 5,
        image: '/images/lights.png',
        title: 'Light Setup',
        price: 120,
    },

    {
        id: 6,
        image: '/images/setup.png',
        title: 'Photoshoot set',
        price: 820,
    },
    {
        id: 7,
        image: '/images/camera2.png',
        title: 'Vlogging Carmera',
        price: 1500,
    },
    {
        id: 8,
        image: '/images/action.png',
        title: 'Action Camera',
        price: 230,
    },
    {
        id: 9,
        image: '/images/mobile.jpg',
        title: 'Foldable Mobile',
        price: 120,
    },
    {
        id: 10,
        image: '/images/airburd.jpeg',
        title: 'Air Pods Pro',
        price: 60,
    },
    {
        id: 11,
        image: '/images/camera.jpeg',
        title: 'DSLR Camera',
        price: 230,
    },
    
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    let {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button class='btn-cart' onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')


var cart =[];


function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}


function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:14px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }
}
