import {ProductItem} from "./ProductItem.tsx";
import productItems from "../api/product.json";

export const ProductItems = () => {
    return (
        <>
            {productItems.map((product) => {
                return <ProductItem
                    key={product.id}
                    productImage={product.productImage}
                    productImageAlt={product.productImageAlt}
                    productName={product.productName}
                    productDescription={product.productDescription}
                    productPrice={product.productPrice}
                />
            })}
        </>
    );
}