// * Funcionalidad encapsulada

import { Product, taxCalculation } from './06-function-destructuring';

const shoppingCart: Product[] = [
    {
        description: 'iPhone',
        price: 999.0
    },
    {
        description: 'iPad',
        price: 499.0
    }
]

const [total, taxTotal] = taxCalculation({ products: shoppingCart, tax: 0.15 });
console.log('total', total)
console.log('total taxed', taxTotal)