import React from 'react';
import Product from '../Product/Product';
import './Products.css';

const products = [
    {id: 1, title: 'Наушники JBL Endurance SPRINT', price: 1949,
    discount: 10, img: 'https://avatars.mds.yandex.net/get-mpic/1246680/img_id1113703500810441195.jpeg/x166_trim'},
    {id: 2, title: 'Вода минеральная Сенежская газированная, ПЭТ', price: 115, img: 'https://avatars.mds.yandex.net/get-mpic/1081556/img_id5545254895440196313.jpeg/x166_trim'},
    {id: 3, title: 'Протеин Optimum Nutrition 100% Whey Gold Standard (2.225-2.353 кг)', price: 3250, discount: 7, img: 'https://avatars.mds.yandex.net/get-mpic/1525215/img_id2795445143072269737.png/x166_trim'},
    {id: 4, title: 'Bref туалетный блок Сила-Актив Лимонная свежесть', price: 83, img: 'https://avatars.mds.yandex.net/get-mpic/331398/img_id8606275073732889790.jpeg/x166_trim'},
    {id: 5, title: 'Наушники JBL Endurance DIVE', price: 2990, img: 'https://avatars.mds.yandex.net/get-mpic/1363210/img_id9091164100103917756.jpeg/x166_trim'},
];
export default function Products() {
    return (
        <div className="products">
            <h1 className="products__title">Приглядитесь к этим предложениям</h1>
            <div className="products__list">
                { products.map(product => <Product key={ product.id } product={ product } />) }
            </div>
        </div>
    )
}
