import x570 from "./images/products/eletronics/asusx570.png";
import ramCorsair8gb from "./images/products/eletronics/corsairVengeance8gb.webp";
import ryzen5600x from "./images/products/eletronics/ryzen5600x.jpg";
import videoCard4090 from "./images/products/eletronics/videocard4090.png";
import sombraDoVento from "./images/products/books/aSombraDoVento.jpg"

export const products =
{
    books: 
    [
        {
            name: "A Sombra do Vento",
            date: "14/10/2022",
            price: 2.5,
            image: sombraDoVento,
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
    ],
    eletronics:
    [
        {
            name: "Asus x570",
            date: "03/02/2022",
            price: 0.1,
            image: x570,
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            name: "Memoria Ram Corsair 8gb",
            date: "28/05/2022",
            price: 0.1,
            image: ramCorsair8gb,
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            
        },
        {
            name: "AMD Ryzen 5600x",            
            date: "17/09/2022",
            price: 0.1,
            image: ryzen5600x,
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            name: "RTX 4090Ti",            
            date: "19/10/2022",
            price: 0.1,
            image: videoCard4090,
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
    ]
}

