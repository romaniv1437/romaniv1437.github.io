import React from 'react';
import s from './Products.module.css'
import ProductForm from "../assets/Forms/ProductForm/ProductForm";
import {ICartProduct} from "../../models/ICart";
import {IProduct} from "../../models/IProduct";
import {Navigate} from "react-router-dom";

type PrivateProps = {
    currentProduct: IProduct,
    cartProducts: Array<ICartProduct>
    ProductData: {details: string, shipping: string, buttonText:string, inputName: string, choiceOneTime: string, choiceSubscribe: {title: string, subTitle: string}},
    addProducts: (id: number, productId:number, productTitle:string, productImage:string, price: number, count:number) => void
}

const Products = ({currentProduct, addProducts, ProductData, cartProducts}:PrivateProps) => {
    if (!currentProduct) {
        return <Navigate to='/'/>
    }
    return (
        <div className={s.product}>
            <main className={s.product__container}>
                <div className={s.left}>
                    <img src={currentProduct.imageURL} alt="products"/>
                    <div className={s.left_titles}>
                        <h2 className={s.title}>{ProductData.details}</h2>
                        <h2 className={s.subTitle}>{ProductData.shipping}</h2>
                    </div>
                </div>
                <div className={s.right}>
                    <div className={s.right_title}>
                        <h2 className={s.title}>{currentProduct.title}</h2>
                        <h2 className={s.price}>$ {currentProduct.price}.00</h2>
                    </div>
                    <div className={s.right_form}>
                        <ProductForm buttonText={ProductData.buttonText}
                                     inputName={ProductData.inputName}
                                     choiceOneTime={ProductData.choiceOneTime}
                                     choiceSubscribe={ProductData.choiceSubscribe}
                                     addProducts={addProducts}
                                     currentProduct={currentProduct}
                                     cartProducts={cartProducts}
                        />
                    </div>
                    <div className={s.right_description}>
                        <p>{currentProduct.description}</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Products;
