const express = require("express");
const { faker } = require("@faker-js/faker");
const router = express.Router();

router.post("/auth", (request, response) => {
    const positionTranslations = {
        "Administrator": {
            "en": "Administrator",
            "ru": "Администратор",
            "az": "Administrator"
        },
        "Moderator": {
            "en": "Moderator",
            "ru": "Модератор",
            "az": "Moderator"
        },
        "Manager": {
            "en": "Manager",
            "ru": "Менеджер",
            "az": "Menecer"
        }
    };

    const position = faker.helpers.arrayElement(["Administrator", "Moderator", "Manager"]);

    response.json({
        "is_logged": true,
        "user_data": {
            "first_name": faker.person.firstName(),
            "last_name": faker.person.lastName(),
            "position": {
                "en": positionTranslations[position].en,
                "ru": positionTranslations[position].ru,
                "az": positionTranslations[position].az
            },
            "profile_img": faker.image.avatarLegacy(),
            "is_online": true
        },
        "token": "0x0123456789ABCDEF",
        "error": null
    });
});

module.exports = router;