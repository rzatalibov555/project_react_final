const { faker } = require("@faker-js/faker");

const generateIncomeData = () => {
    return Array.from({ length: 12 }, () => faker.number.int({ min: 400, max: 4000 }));
};

const generateExpensesData = () => {
    return Array.from({ length: 12 }, () => faker.number.int({ min: 200, max: 2000 }));
};

const Statistic = () => {
    return [
        {
            "id": 1,
            "label": {
                "en": "Incomes",
                "ru": "Доходы",
                "az": "Gəlir"
            },
            "bg_color": "#2BB2FE",
            "bg_gradient": [
                "#22CAAD",
                "#2BB2FE",
            ],
            "date_data": {
                "all_time": {
                    "data": generateIncomeData()
                },
                "12_months": {
                    "data": generateIncomeData()
                },
                "30_days": {
                    "data": generateIncomeData()
                },
                "7_days": {
                    "data": generateIncomeData()
                },
                "24_hour": {
                    "data": generateIncomeData()
                }
            }
        },
        {
            "id": 2,
            "label": {
                "en": "Expenses",
                "ru": "Расходы",
                "az": "Xərclər"
            },
            "bg_color": "#F86624",
            "bg_gradient": [
                "#F9C80E",
                "#F86624"
            ],
            "date_data": {
                "all_time": {
                    "data": generateExpensesData()
                },
                "12_months": {
                    "data": generateExpensesData()
                },
                "30_days": {
                    "data": generateExpensesData()
                },
                "7_days": {
                    "data": generateExpensesData()
                },
                "24_hour": {
                    "data": generateExpensesData()
                }
            }
        }
    ];
};

module.exports = Statistic;