import { updateData } from "../api";
export const removeFromWishlist = (
    token,
    updatedProducts
) => {
    const newItem = {
        id: token,
        userId: token,
        products: updatedProducts,
        items: updatedProducts.length,
    }
    updateData(`/wishlists/${token}`, newItem);
};
export const addToWishlist = (
    token,
    id,
    name,
    author,
    rating,
    price,
    discount,
    image,
    bestseller,
    description,
    Genre,
    books
) => {
    const newItem = {
        id: token,
        userId: token,
        products: [
            ...books.products,
            {
                name, author, rating, id, price, discount, image, bestseller, description, Genre,
            },
        ],
        items: books.products.length+1,
    }
    updateData(`/wishlists/${token}`, newItem);
};