const { faker } = require("@faker-js/faker");

const Target = () => {
    const goal = faker.number.int({ min: 5, max: 50 }) * 10000;

    const generateDateData = (minRevenue, maxRevenue) => {
        const revenue = faker.number.int({ min: minRevenue, max: maxRevenue });
        const progress = parseFloat(((revenue / goal) * 100)).toFixed(2);
        const change = faker.number.float({ min: 0.1, max: 20, precision: 0.1 }).toFixed(1);
        const earnings_today = faker.number.int({ min: 25, max: 3500 });
        const week = faker.number.int({ min: earnings_today * 5, max: earnings_today * 7 });
        const is_revenue_price_rising = faker.datatype.boolean();
        const is_week_price_rising = faker.datatype.boolean();
        const is_goal_price_rising = faker.datatype.boolean();

        return {
            revenue,
            is_revenue_price_rising,
            progress,
            change,
            earnings_today,
            week,
            is_week_price_rising,
            is_goal_price_rising
        };
    }

    return {
        "goal": goal,
        "date_data": {
            "all_time": generateDateData(goal * 0.7, goal * 0.9),
            "12_months": generateDateData(goal * 0.5, goal * 0.7),
            "30_days": generateDateData(goal * 0.05, goal * 0.15),
            "7_days": generateDateData(goal * 0.01, goal * 0.05),
            "24_hour": generateDateData(goal * 0.001, goal * 0.01)
        }
    }
}

module.exports = Target;