import { updateData } from "../api";
export const calculateTotal = (products) => {
  return products.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);
};
export const calculateTotalQuantity = (products) => {
  let totalQuantity = 0;
  products.forEach((product) => {
    totalQuantity += product.quantity;
  });
  return totalQuantity;
};
export const calculateTotalDiscountPercentage = (products, quantity, price, discount) => {
  const totalPrice = calculateTotal(products) + quantity * price;
  const totalDiscountAmount = products.reduce((total, product) => {
    const productDiscount = product.discount === undefined ? 0 : product.discount;
    const productPrice = product.price * product.quantity;
    return total + (productPrice * productDiscount) / 100;
  }, 0);
  const newProductDiscount = (price * (discount === undefined ? 0 : discount) * quantity) / 100;

  if (totalPrice === 0) {
    return 0;
  }
  return ((totalDiscountAmount + newProductDiscount) / totalPrice) * 100;
};
export const calculateTotalDiscount = (products) => {
  const totalPrice = calculateTotal(products);
  const totalDiscountAmount = products.reduce((total, product) => {
    const productDiscount = product.discount === undefined ? 0 : product.discount;
    const productPrice = product.price * product.quantity;
    return total + (productPrice * productDiscount) / 100;
  }, 0);
  if (totalPrice === 0) {
    return 0;
  }
    return (totalDiscountAmount / totalPrice) * 100;
};

export const handleRemove = (books, id) => {
    const updatedProducts = books.products.filter(obj => obj.id !== id);
    return updatedProducts;
};

export const updateCartItem = (
  token,
  id,
  name,
  author,
  image,
  price,
  discount,
  quantity,
  updatedProducts
) => {
  const newCartItem = {
    id: token,
    userId: token,
    products: [
      ...updatedProducts,
      {
        id,
        name,
        author,
        image,
        price,
        discount: discount !== undefined ? discount : 0,
        quantity: quantity,
        total: quantity * price,
      },
    ],
    items: calculateTotalQuantity(updatedProducts) + quantity,
    subtotal: calculateTotal(updatedProducts) + quantity * price,
    totaldiscount: calculateTotalDiscountPercentage(updatedProducts, quantity, price, discount),
    alltotal: 0
  };
  newCartItem.alltotal = newCartItem.subtotal - (newCartItem.subtotal * newCartItem.totaldiscount) / 100;
  updateData(`/carts/${token}`, newCartItem);
};
export const removeCartItem = (
  token,
  updatedProducts
) => {
  const cartItems = {
                id: token,
                userId: token,
                products: updatedProducts,
                items: calculateTotalQuantity(updatedProducts),
                subtotal: calculateTotal(updatedProducts),
                totaldiscount: calculateTotalDiscount(updatedProducts),
                alltotal: 0,
            }
  cartItems.alltotal = cartItems.subtotal - (cartItems.subtotal * cartItems.totaldiscount) / 100;
  updateData(`/carts/${token}`, cartItems);
};
