import React from 'react';
import {ShoeCard} from "../ShoeCard";
import {Link} from "react-router-dom";
import "./style.scss"

const hardcodeArr=[
    {
        id:1,
        brand:"NIKE",
        name: "AIR MAX PLUS",
        poster:"https://www.freshshoes.pl/userdata/public/gfx/8546/2.jpg",
        price:389.99,
        color: "black",
        size:45,
        description:"Buty Nike Air Max TN Plus\n" +
            "                    (604133-050) to wyjątkowe obuwie, które łączy styl z\n" +
            "                    wygodą. Oto kilka informacji na ich temat:\n" +
            "\n" +
            "                    Cholewka: Buty mają solidną cholewkę wykonaną z połączenia skóry i siateczki. To gwarantuje\n" +
            "                    przewiewność, wytrzymałość i stylowy wygląd.\n" +
            "                    Poduszki gazowe Air-Sole: Liczne poduszki gazowe Air-Sole w podeszwie środkowej zapewniają lekkość i\n" +
            "                    doskonałą amortyzację na każdym kroku.\n" +
            "                    Stabilność: Model Air Max Plus jest znany również z doskonałej stabilności, co sprawia, że są\n" +
            "                    świetnym wyborem zarówno do biegania, jak i na co dzień."
    },    {
    id:2,
        brand:"NIKE",
        name: "AIR MAX PLUS",
        poster:"https://www.freshshoes.pl/userdata/public/gfx/8546/2.jpg",
        price:389.99,
        color: "black",
        size:45,
        description:"Buty Nike Air Max TN Plus\n" +
            "                    (604133-050) to wyjątkowe obuwie, które łączy styl z\n" +
            "                    wygodą. Oto kilka informacji na ich temat:\n" +
            "\n" +
            "                    Cholewka: Buty mają solidną cholewkę wykonaną z połączenia skóry i siateczki. To gwarantuje\n" +
            "                    przewiewność, wytrzymałość i stylowy wygląd.\n" +
            "                    Poduszki gazowe Air-Sole: Liczne poduszki gazowe Air-Sole w podeszwie środkowej zapewniają lekkość i\n" +
            "                    doskonałą amortyzację na każdym kroku.\n" +
            "                    Stabilność: Model Air Max Plus jest znany również z doskonałej stabilności, co sprawia, że są\n" +
            "                    świetnym wyborem zarówno do biegania, jak i na co dzień."
    },    {
    id:3,
        brand:"NIKE",
        name: "AIR MAX PLUS",
        poster:"https://www.freshshoes.pl/userdata/public/gfx/8546/2.jpg",
        price:389.99,
        color: "black",
        size:45,
        description:"Buty Nike Air Max TN Plus\n" +
            "                    (604133-050) to wyjątkowe obuwie, które łączy styl z\n" +
            "                    wygodą. Oto kilka informacji na ich temat:\n" +
            "\n" +
            "                    Cholewka: Buty mają solidną cholewkę wykonaną z połączenia skóry i siateczki. To gwarantuje\n" +
            "                    przewiewność, wytrzymałość i stylowy wygląd.\n" +
            "                    Poduszki gazowe Air-Sole: Liczne poduszki gazowe Air-Sole w podeszwie środkowej zapewniają lekkość i\n" +
            "                    doskonałą amortyzację na każdym kroku.\n" +
            "                    Stabilność: Model Air Max Plus jest znany również z doskonałej stabilności, co sprawia, że są\n" +
            "                    świetnym wyborem zarówno do biegania, jak i na co dzień."
    },    {
    id:4,
        brand:"NIKE",
        name: "AIR MAX PLUS",
        poster:"https://www.freshshoes.pl/userdata/public/gfx/8546/2.jpg",
        price:389.99,
        color: "black",
        size:45,
        description:"Buty Nike Air Max TN Plus\n" +
            "                    (604133-050) to wyjątkowe obuwie, które łączy styl z\n" +
            "                    wygodą. Oto kilka informacji na ich temat:\n" +
            "\n" +
            "                    Cholewka: Buty mają solidną cholewkę wykonaną z połączenia skóry i siateczki. To gwarantuje\n" +
            "                    przewiewność, wytrzymałość i stylowy wygląd.\n" +
            "                    Poduszki gazowe Air-Sole: Liczne poduszki gazowe Air-Sole w podeszwie środkowej zapewniają lekkość i\n" +
            "                    doskonałą amortyzację na każdym kroku.\n" +
            "                    Stabilność: Model Air Max Plus jest znany również z doskonałej stabilności, co sprawia, że są\n" +
            "                    świetnym wyborem zarówno do biegania, jak i na co dzień."
    },    {
    id:5,
        brand:"NIKE",
        name: "AIR MAX PLUS",
        poster:"https://www.freshshoes.pl/userdata/public/gfx/8546/2.jpg",
        price:389.99,
        color: "black",
        size:45,
        description:"Buty Nike Air Max TN Plus\n" +
            "                    (604133-050) to wyjątkowe obuwie, które łączy styl z\n" +
            "                    wygodą. Oto kilka informacji na ich temat:\n" +
            "\n" +
            "                    Cholewka: Buty mają solidną cholewkę wykonaną z połączenia skóry i siateczki. To gwarantuje\n" +
            "                    przewiewność, wytrzymałość i stylowy wygląd.\n" +
            "                    Poduszki gazowe Air-Sole: Liczne poduszki gazowe Air-Sole w podeszwie środkowej zapewniają lekkość i\n" +
            "                    doskonałą amortyzację na każdym kroku.\n" +
            "                    Stabilność: Model Air Max Plus jest znany również z doskonałej stabilności, co sprawia, że są\n" +
            "                    świetnym wyborem zarówno do biegania, jak i na co dzień."
    }
]
const PopularList = () => {
    return (
        <section className="sellers sellers-container container">
            <h2 className="sellers_title">Top sellers</h2>
            <div className="sellers_list">
                {
                    hardcodeArr.map(({id, brand, name, poster, price,description, size}) => <ShoeCard
                    id={id}
                    key={id}
                    name={name}
                    img={poster}
                    desc={description}
                    price={price}
                    size={size}

                    />).slice(0,4)
                }
            </div>
            <Link to="shoe" className="sellers_btn">Show more</Link>
        </section>
    );
};

export {PopularList};