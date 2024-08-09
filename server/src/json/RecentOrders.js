const { faker, fakerAZ, fakerRU, fakerEN } = require("@faker-js/faker");

const RecentOrders = () => {
    const orders = [];
    const numOrders = faker.number.int({ min: 16, max: 128 });

    const statusTranslations = {
        "Processing": {
            "en": "Processing",
            "ru": "Обработка",
            "az": "Emal olunur"
        },
        "Shipped": {
            "en": "Shipped",
            "ru": "Отправлено",
            "az": "Göndərildi"
        },
        "Delivered": {
            "en": "Delivered",
            "ru": "Доставлено",
            "az": "Təhvil verildi"
        },
        "Canceled": {
            "en": "Canceled",
            "ru": "Отменено",
            "az": "Ləğv edilib"
        }
    };

   

    for (let idx = 0; idx < numOrders; idx++) {
        const subtext = faker.number.int({ min: 1, max: 5 });
        const status = faker.helpers.arrayElement(["Processing", "Shipped", "Delivered", "Canceled"]);
        orders.push({
            "id": idx,
            "orderId": `#${faker.number.int({ min: 100000, max: 999999 }).toString()}`,
            "image": faker.image.avatarLegacy(),
            "product_name": {
                "en": fakerEN.commerce.productName(),
                "ru": fakerRU.commerce.productName(),
                "az": fakerAZ.commerce.productName()
            },
            "subtext": {
                "en": `+${subtext} other products`,
                "ru": `+${subtext} другие продукты`,
                "az": `+${subtext} digər məhsullar`
            },
            "date": faker.date.past().getTime() / 1000,
            "customer": `${faker.person.firstName()} ${faker.person.lastName()}`,
            "customer_email": faker.internet.email(),
            "total": `$${faker.number.float({ min: 20, max: 1000 }).toFixed(2)}`,
            "payment": faker.helpers.arrayElement(["Mastercard", "Visa", "PayPal", "American Express"]),
            "status": {
                "en": statusTranslations[status].en,
                "ru": statusTranslations[status].ru,
                "az": statusTranslations[status].az
            }
        });
    }
    return orders;
}


module.exports = RecentOrders;