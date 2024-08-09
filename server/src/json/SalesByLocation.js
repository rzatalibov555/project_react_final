const { faker } = require("@faker-js/faker");

const SalesByLocation = () => {
    const generateDateData = (minRevenue, maxRevenue, minSales, maxSales) => {
        const revenue = faker.number.int({ min: minRevenue, max: maxRevenue });
        const salesCount = faker.number.int({ min: minSales, max: maxSales });
        const percentage = (faker.number.float({ min: -7, max: 15 })).toFixed(2);

        return {
            sales_count: salesCount,
            revenue: revenue,
            percentage: percentage,
        }
    }

    return [
        {
            "id": 1,
            "country_name": {
                "en": "United Kingdom",
                "ru": "Соединённое Королевство",
                "az": "Birləşmiş Krallıq"
            },
            "country_flag": "http://127.0.0.1:5000/assets/flag/flag_uk.png",
            "date_data": {
                "all_time": generateDateData(30000, 60000, 800, 1000),
                "12_months": generateDateData(15000, 30000, 500, 800),
                "30_days": generateDateData(7500, 15000, 300, 500),
                "7_days": generateDateData(3750, 7500, 150, 300),
                "24_hour": generateDateData(1875, 3750, 20, 150)
            }
        },
        {
            "id": 2,
            "country_name": {
                "en": "Spain",
                "ru": "Испания",
                "az": "İspaniya"
            },
            "country_flag": "http://127.0.0.1:5000/assets/flag/flag_spain.png",
            "date_data": {
                "all_time": generateDateData(30000, 60000, 800, 1000),
                "12_months": generateDateData(15000, 30000, 500, 800),
                "30_days": generateDateData(7500, 15000, 300, 500),
                "7_days": generateDateData(3750, 7500, 150, 300),
                "24_hour": generateDateData(1875, 3750, 20, 150)
            }
        },
        {
            "id": 3,
            "country_name": {
                "en": "Indonesia",
                "ru": "Индонезия",
                "az": "İndoneziya"
            },
            "country_flag": "http://127.0.0.1:5000/assets/flag/flag_indonesia.png",
            "date_data": {
                "all_time": generateDateData(30000, 60000, 800, 1000),
                "12_months": generateDateData(15000, 30000, 500, 800),
                "30_days": generateDateData(7500, 15000, 300, 500),
                "7_days": generateDateData(3750, 7500, 150, 300),
                "24_hour": generateDateData(1875, 3750, 20, 150)
            }
        },
        {
            "id": 4,
            "country_name": {
                "en": "France",
                "ru": "Франция",
                "az": "Fransa"
            },
            "country_flag": "http://127.0.0.1:5000/assets/flag/flag_france.png",
            "date_data": {
                "all_time": generateDateData(30000, 60000, 800, 1000),
                "12_months": generateDateData(15000, 30000, 500, 800),
                "30_days": generateDateData(7500, 15000, 300, 500),
                "7_days": generateDateData(3750, 7500, 150, 300),
                "24_hour": generateDateData(1875, 3750, 20, 150)
            }
        },
        {
            "id": 5,
            "country_name": {
                "en": "Germany",
                "ru": "Германия",
                "az": "Almaniya"
            },
            "country_flag": "http://127.0.0.1:5000/assets/flag/flag_germany.png",
            "date_data": {
                "all_time": generateDateData(30000, 60000, 800, 1000),
                "12_months": generateDateData(15000, 30000, 500, 800),
                "30_days": generateDateData(7500, 15000, 300, 500),
                "7_days": generateDateData(3750, 7500, 150, 300),
                "24_hour": generateDateData(1875, 3750, 20, 150)
            }
        },
        {
            "id": 6,
            "country_name": {
                "en": "United Arab Emirates",
                "ru": "Объединённые Арабские Эмираты",
                "az": "Birləşmiş Ərəb Əmirlikləri"
            },
            "country_flag": "http://127.0.0.1:5000/assets/flag/flag_uae.png",
            "date_data": {
                "all_time": generateDateData(30000, 60000, 800, 1000),
                "12_months": generateDateData(15000, 30000, 500, 800),
                "30_days": generateDateData(7500, 15000, 300, 500),
                "7_days": generateDateData(3750, 7500, 150, 300),
                "24_hour": generateDateData(1875, 3750, 20, 150)
            }
        },
        {
            "id": 7,
            "country_name": {
                "en": "Turkey",
                "ru": "Турция",
                "az": "Türkiyə"
            },
            "country_flag": "http://127.0.0.1:5000/assets/flag/flag_turkey.png",
            "date_data": {
                "all_time": generateDateData(30000, 60000, 800, 1000),
                "12_months": generateDateData(15000, 30000, 500, 800),
                "30_days": generateDateData(7500, 15000, 300, 500),
                "7_days": generateDateData(3750, 7500, 150, 300),
                "24_hour": generateDateData(1875, 3750, 20, 150)
            }
        },
        {
            "id": 8,
            "country_name": {
                "en": "United States",
                "ru": "Соединённые Штаты",
                "az": "Birləşmiş Ştatlar"
            },
            "country_flag": "http://127.0.0.1:5000/assets/flag/flag_usa.png",
            "date_data": {
                "all_time": generateDateData(30000, 60000, 800, 1000),
                "12_months": generateDateData(15000, 30000, 500, 800),
                "30_days": generateDateData(7500, 15000, 300, 500),
                "7_days": generateDateData(3750, 7500, 150, 300),
                "24_hour": generateDateData(1875, 3750, 20, 150)
            }
        },
        {
            "id": 9,
            "country_name": {
                "en": "Japan",
                "ru": "Япония",
                "az": "Yaponiya"
            },
            "country_flag": "http://127.0.0.1:5000/assets/flag/flag_japan.png",
            "date_data": {
                "all_time": generateDateData(30000, 60000, 800, 1000),
                "12_months": generateDateData(15000, 30000, 500, 800),
                "30_days": generateDateData(7500, 15000, 300, 500),
                "7_days": generateDateData(3750, 7500, 150, 300),
                "24_hour": generateDateData(1875, 3750, 20, 150)
            }
        }
    ];
};

module.exports = SalesByLocation;