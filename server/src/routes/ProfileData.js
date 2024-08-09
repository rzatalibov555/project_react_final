const express = require("express");
const { faker, fakerAZ, fakerEN, fakerRU } = require("@faker-js/faker");
const router = express.Router();

const generateNotification = (notificationCount = faker.number.int({ min: 0, max: 32 })) => {
    const notification_list = [];

    for (let idx = 0; idx < notificationCount; idx++) {
        const orderNumber = faker.number.int({ min: 10000 + idx, max: 90000 + idx });

        notification_list.push({
            "id": idx,
            "type": faker.helpers.arrayElement(["Stock", "Orders"]),
            "title": {
                "en": `New Order #${orderNumber}`,
                "ru": `Новый Заказ #${orderNumber}`,
                "az": `Yeni Sifariş #${orderNumber}`
            },
            "description": {
                "en": fakerEN.lorem.sentence({ min: 16, max: 128 }),
                "ru": fakerRU.lorem.sentence({ min: 16, max: 128 }),
                "az": fakerAZ.lorem.sentence({ min: 16, max: 128 })
            },
            "is_readed": faker.datatype.boolean(),
            "timestamp": Math.floor(Date.now() / 1000) - faker.number.int({ min: 1, max: 256000 })
        })
    }

    return notification_list;
}

router.get("/profile", (request, response) => {
    const chatEnvelope = faker.number.int({ min: 0, max: 256 });
    const discussionEnvelope = faker.number.int({ min: 0, max: 64 });
    const reviewsEnvelope = faker.number.int({ min: 0, max: 2 });
    const supportEnvelope = faker.number.int({ min: 0, max: 1 });
    const totalCountEnvelope = [chatEnvelope, discussionEnvelope, reviewsEnvelope, supportEnvelope].filter(item => item !== 0).length;
    const notificationsBell = generateNotification();

    response.json({
        "envelope": {
            "total_count": totalCountEnvelope,
            "data": {
                "chat": chatEnvelope,
                "discussion": discussionEnvelope,
                "reviews": reviewsEnvelope,
                "support": supportEnvelope
            }
        },
        "notification": {
            "total_count": notificationsBell.length,
            "data": notificationsBell
        },
    });
});

module.exports = router;