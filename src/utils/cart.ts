import type { CartItem, Product } from '../types';

export const addItem = (cart: CartItem[], product: Product): CartItem[] => {
  const existingItem = cart.find(item => item.product.id === product.id);
  
  if (existingItem) {
    return cart.map(item =>
      item.product.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  
  return [...cart, { product, quantity: 1 }];
};

export const removeItem = (cart: CartItem[], productId: number): CartItem[] => {
  return cart.filter(item => item.product.id !== productId);
};

export const updateQuantity = (cart: CartItem[], productId: number, quantity: number): CartItem[] => {
  if (quantity <= 0) {
    return removeItem(cart, productId);
  }
  
  return cart.map(item =>
    item.product.id === productId
      ? { ...item, quantity }
      : item
  );
};

export const computeSubtotal = (cart: CartItem[]): number => {
  return cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
};

export const computeDiscount = (subtotal: number): number => {
  // Apply 10% discount if subtotal is less than $500
  return subtotal < 500 ? subtotal * 0.1 : 0;
};

export const computeTotal = (cart: CartItem[]): { subtotal: number; discount: number; total: number } => {
  const subtotal = computeSubtotal(cart);
  const discount = computeDiscount(subtotal);
  const total = subtotal - discount;
  
  return { subtotal, discount, total };
};

export const getItemCount = (cart: CartItem[]): number => {
  return cart.reduce((count, item) => count + item.quantity, 0);
};