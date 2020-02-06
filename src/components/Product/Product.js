import React from 'react';
import './Product.css';

export default function Product({product}) {
    let discount, price;
    if (product.discount) {
        discount = <div className="product__discount">{ product.discount } %</div>;
        price = Math.round(product.price - (product.price / 100 * product.discount));
      } else {
        discount = false;
        price = product.price;
      }
    return (
        <div className="product">
            { discount }
            <div className="product__img-wrapper">
                <img className="product__img" src={ product.img } alt={ product.title }/>
            </div>
            <div className="product__price">
                <span className="product__price-current">
                    { price } ₽
                </span>
                { discount && <span className="product__price-original"> { product.price }  ₽</span> }
            </div>
            <div className="product__title">
                { product.title }
            </div>
        </div>
    )
}
