const { faker } = require("@faker-js/faker");

const Badges = () => {
    return [
        {
            "id": 1,
            "name": {
                "en": "Total Revenue",
                "ru": "Общее количество выручки",
                "az": "Ümumi gəlir"
            },
            "style": {
                "icon": "fi fi-sr-money",
                "linear_gradient": [
                    "#3250FF",
                    "#2BB2FE"
                ]
            },
            "date_data": {
                "all_time": {
                    "total_revenue": faker.number.int({ min: 50000, max: 120000 }),
                    "percent_change": faker.number.float({ min: 5, max: 15, precision: 0.1 }).toFixed(1),
                    "daily_change": faker.number.int({ min: 500, max: 2000 }),
                    "is_money_eq": true
                },
                "12_months": {
                    "total_revenue": faker.number.int({ min: 30000, max: 50000 }),
                    "percent_change": faker.number.float({ min: 5, max: 12, precision: 0.1 }).toFixed(1),
                    "daily_change": faker.number.int({ min: 300, max: 1200 }),
                    "is_money_eq": true
                },
                "30_days": {
                    "total_revenue": faker.number.int({ min: 8000, max: 30000 }),
                    "percent_change": faker.number.float({ min: 8, max: 15, precision: 0.1 }).toFixed(1),
                    "daily_change": faker.number.int({ min: 100, max: 300 }),
                    "is_money_eq": true
                },
                "7_days": {
                    "total_revenue": faker.number.int({ min: 2000, max: 8000 }),
                    "percent_change": faker.number.float({ min: 5, max: 8, precision: 0.1 }).toFixed(1),
                    "daily_change": faker.number.int({ min: 100, max: 400 }),
                    "is_money_eq": true
                },
                "24_hour": {
                    "total_revenue": faker.number.int({ min: 300, max: 1500 }),
                    "percent_change": faker.number.float({ min: 10, max: 20, precision: 0.1 }).toFixed(1),
                    "daily_change": faker.number.int({ min: 20, max: 100 }),
                    "is_money_eq": true
                }
            }
        },
        {
            "id": 2,
            "name": {
                "en": "Total Order",
                "ru": "Общее количество заказов",
                "az": "Ümumi sifariş"
            },
            "style": {
                "icon": "fi fi-sr-shopping-cart-check",
                "linear_gradient": [
                    "#2BB2FE",
                    "#22CAAD"
                ]
            },
            "date_data": {
                "all_time": {
                    "total_revenue": faker.number.int({ min: 20000, max: 48000 }),
                    "percent_change": faker.number.float({ min: 10, max: 15, precision: 0.1 }).toFixed(1),
                    "daily_change": faker.number.int({ min: 200, max: 600 }),
                    "is_money_eq": false
                },
                "12_months": {
                    "total_revenue": faker.number.int({ min: 15000, max: 30000 }),
                    "percent_change": faker.number.float({ min: 9, max: 14, precision: 0.1 }).toFixed(1),
                    "daily_change": faker.number.int({ min: 150, max: 500 }),
                    "is_money_eq": false
                },
                "30_days": {
                    "total_revenue": faker.number.int({ min: 5000, max: 15000 }),
                    "percent_change": faker.number.float({ min: 7, max: 12, precision: 0.1 }).toFixed(1),
                    "daily_change": faker.number.int({ min: 100, max: 250 }),
                    "is_money_eq": false
                },
                "7_days": {
                    "total_revenue": faker.number.int({ min: 1000, max: 4000 }),
                    "percent_change": faker.number.float({ min: 6, max: 10, precision: 0.1 }).toFixed(1),
                    "daily_change": faker.number.int({ min: 50, max: 200 }),
                    "is_money_eq": false
                },
                "24_hour": {
                    "total_revenue": faker.number.int({ min: 200, max: 700 }),
                    "percent_change": faker.number.float({ min: 4, max: 7, precision: 0.1 }).toFixed(1),
                    "daily_change": faker.number.int({ min: 20, max: 80 }),
                    "is_money_eq": false
                }
            }
        },
        {
            "id": 3,
            "name": {
                "en": "Total Customer",
                "ru": "Общее количество клиентов",
                "az": "Ümumi müştəri"
            },
            "style": {
                "icon": "fi fi-sr-user-add",
                "linear_gradient": [
                    "#EB3D4D",
                    "#FBA37C"
                ]
            },
            "date_data": {
                "all_time": {
                    "total_revenue": faker.number.int({ min: 15000, max: 35000 }),
                    "percent_change": faker.number.float({ min: 8, max: 12, precision: 0.1 }).toFixed(1),
                    "daily_change": faker.number.int({ min: 50, max: 150 }),
                    "is_money_eq": false
                },
                "12_months": {
                    "total_revenue": faker.number.int({ min: 12000, max: 30000 }),
                    "percent_change": faker.number.float({ min: 7, max: 11, precision: 0.1 }).toFixed(1),
                    "daily_change": faker.number.int({ min: 40, max: 120 }),
                    "is_money_eq": false
                },
                "30_days": {
                    "total_revenue": faker.number.int({ min: 3000, max: 9000 }),
                    "percent_change": faker.number.float({ min: 5, max: 9, precision: 0.1 }).toFixed(1),
                    "daily_change": faker.number.int({ min: 30, max: 100 }),
                    "is_money_eq": false
                },
                "7_days": {
                    "total_revenue": faker.number.int({ min: 800, max: 2500 }),
                    "percent_change": faker.number.float({ min: 4, max: 8, precision: 0.1 }).toFixed(1),
                    "daily_change": faker.number.int({ min: 20, max: 80 }),
                    "is_money_eq": false
                },
                "24_hour": {
                    "total_revenue": faker.number.int({ min: 200, max: 600 }),
                    "percent_change": faker.number.float({ min: 3, max: 7, precision: 0.1 }).toFixed(1),
                    "daily_change": faker.number.int({ min: 10, max: 60 }),
                    "is_money_eq": false
                }
            }
        },
        {
            "id": 4,
            "name": {
                "en": "Total Product",
                "ru": "Общее количество продуктов",
                "az": "Ümumi məhsul"
            },
            "style": {
                "icon": "fi fi-sr-box",
                "linear_gradient": [
                    "#3250FF",
                    "#2BB2FE"
                ]
            },
            "date_data": {
                "all_time": {
                    "total_revenue": faker.number.int({ min: 20000, max: 50000 }),
                    "percent_change": faker.number.float({ min: 5, max: 10, precision: 0.1 }).toFixed(1),
                    "daily_change": faker.number.int({ min: 50, max: 150 }),
                    "is_money_eq": false
                },
                "12_months": {
                    "total_revenue": faker.number.int({ min: 15000, max: 40000 }),
                    "percent_change": faker.number.float({ min: 6, max: 9, precision: 0.1 }).toFixed(1),
                    "daily_change": faker.number.int({ min: 40, max: 120 }),
                    "is_money_eq": false
                },
                "30_days": {
                    "total_revenue": faker.number.int({ min: 5000, max: 12000 }),
                    "percent_change": faker.number.float({ min: 4, max: 8, precision: 0.1 }).toFixed(1),
                    "daily_change": faker.number.int({ min: 30, max: 100 }),
                    "is_money_eq": false
                },
                "7_days": {
                    "total_revenue": faker.number.int({ min: 1000, max: 3000 }),
                    "percent_change": faker.number.float({ min: 4, max: 7, precision: 0.1 }).toFixed(1),
                    "daily_change": faker.number.int({ min: 20, max: 80 }),
                    "is_money_eq": false
                },
                "24_hour": {
                    "total_revenue": faker.number.int({ min: 200, max: 700 }),
                    "percent_change": faker.number.float({ min: 3, max: 6, precision: 0.1 }).toFixed(1),
                    "daily_change": faker.number.int({ min: 10, max: 60 }),
                    "is_money_eq": false
                }
            }
        }
    ];
}

module.exports = Badges;