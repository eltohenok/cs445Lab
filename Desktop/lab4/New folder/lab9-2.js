const shoppingCart = (function() {

    let basket = [];

    return {
        upsertItem: function(product) {
            for (let i = 0; i < basket.length; i++) {
                let temp = basket[i];
                if (temp.id === product.id) {
                    basket[i] = product;
                    return;
                }
            }
            basket.push(product);
        },
        getItemsCount: function() {
            return basket.length;
        },
        getTotalPrice() {
            return basket.reduce((total, p) => total + p.price * p.count, 0);
        },
        removeItemById(id) {
            basket = basket.filter(p => p.id !== id);
        }
    };

})();

const p1 = { id: 0, name: 'Coffee', description: 'Coffee Grounds from Ethiopia', price: 9.5, count: 1 }
const p2 = { id: 1, name: 'Tea', description: 'Oonlong Tea from China', price: 10.5, count: 5 }
const p3 = { id: 2, name: 'Bottled Water', description: 'Bottled Water from US', price: 2.5, count: 30 }

shoppingCart.upsertItem(p1);
shoppingCart.upsertItem(p2);
shoppingCart.upsertItem(p3);
console.log(shoppingCart.getTotalPrice());
p3.name = 'Himilayan Water';
p3.price = 10;
shoppingCart.upsertItem(p3);

console.log(shoppingCart.getItemsCount());
console.log(shoppingCart.getTotalPrice());
shoppingCart.removeItemById(1);
console.log(shoppingCart.getItemsCount());
console.log(shoppingCart.getTotalPrice());