
export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'iPhone',
    price: 999.0
}

const tablet: Product = {
    description: 'iPad',
    price: 499.0
}

interface taxCalculationOptions {
    tax: number;
    products: Product[];
}

export function taxCalculation(options: taxCalculationOptions): [number, number] {
    const { tax, products } = options;
    let total = 0;
    products.forEach(({ price }) => {
        total += price;
    });
    return [total, total * tax];
}


// const shoppingCart: Product[] = [phone, tablet]
// const tax = 0.15

// const [total, taxTotal] = taxCalculation({ products: shoppingCart, tax });
// console.log('total', total)
// console.log('total taxed', taxTotal)