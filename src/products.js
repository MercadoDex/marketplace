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
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            date: "14/10/2022",
            price: 0.1,
            image: sombraDoVento
        }
    ],
    eletronics:
    [
        {
            name: "Asus x570",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            date: "03/02/2022",
            price: 0.1,
            image: x570
        },
        {
            name: "Memoria Ram Corsair 8gb",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            date: "28/05/2022",
            price: 0.1,
            image: ramCorsair8gb
        },
        {
            name: "AMD Ryzen 5600x",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            date: "17/09/2022",
            price: 0.1,
            image: ryzen5600x
        },
        {
            name: "RTX 4090Ti",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            date: "19/10/2022",
            price: 0.1,
            image: videoCard4090
        },
    ]
}

