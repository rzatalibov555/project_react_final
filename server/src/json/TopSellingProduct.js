const { faker, fakerEN, fakerRU, fakerAZ } = require("@faker-js/faker");

const TopSellingProduct = () => {
    const products = [];
    const numProducts = faker.number.int({ min: 16, max: 64 });
    for (let idx = 0; idx < numProducts; idx++) {
        const amount = faker.number.int({ min: 0, max: 500 });

        const status = {
            "en": amount === 0 ? "Out of Stock" : amount < 100 ? "Low Stock" : "In Stock",
            "ru": amount === 0 ? "Нет в наличии" : amount < 100 ? "Мало в наличии" : "В наличии",
            "az": amount === 0 ? "Satışda yoxdur" : amount < 100 ? "Az qalıb" : "Mövcuddur"
        }

        products.push({
            "id": idx,
            "image": faker.image.avatarLegacy(),
            "product_name": {
                "en": fakerEN.commerce.productName(),
                "ru": fakerRU.commerce.productName(),
                "az": fakerAZ.commerce.productName()
            },
            "subtext": `SKU: ${faker.number.int({ min: 100000, max: 999999 }).toString()}`,
            "sales": faker.number.int({ min: 0, max: 1000 }),
            "amount": `${amount}`,
            "price": `$${faker.number.float({ min: 10, max: 5000 }).toFixed(2)}`,
            "status": status,
        });
    }
    return products;
}

module.exports = TopSellingProduct;
