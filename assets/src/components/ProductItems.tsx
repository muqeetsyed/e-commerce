import {ProductItem} from "./ProductItem.tsx";

export const ProductItems = () => {
    return (
        <>
            <ProductItem
                productImage="images/bamboo-cutlery-set.avif"
                productImageAlt="Product Image"
                productName="Bamboo cutlery set"
                productDescription="Short description of the product"
                productPrice="99.99"
            />

            <ProductItem
                productImage="images/eco-glass-jar.avif"
                productImageAlt="Product Image"
                productName="Eco glass jar"
                productDescription="Short description of the product"
                productPrice="43.32"
            />

            <ProductItem
                productImage="images/eco-glass-storage.avif"
                productImageAlt="Product Image"
                productName="Eco glass storage"
                productDescription="Short description of the product"
                productPrice="12.32"
            />


            <ProductItem
                productImage="images/organic-mesh-cloth.avif"
                productImageAlt="Product Image"
                productName="Organic mesh cloth"
                productDescription="Short description of the product"
                productPrice="2.32"
            />


            <ProductItem
                productImage="images/sponges.avif"
                productImageAlt="Product Image"
                productName="Sponges"
                productDescription="Short description of the product"
                productPrice="2.32"
            />

            <ProductItem
                productImage="images/stainless-stell-lunch-box.avif"
                productImageAlt="Product Image"
                productName="Stainless steel lunch box"
                productDescription="Short description of the product"
                productPrice="100.2"
            />
        </>
    );
}