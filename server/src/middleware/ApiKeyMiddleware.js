const ApiKeyMiddleware = (request, response, next) => {
    const apiKey = request.query.api_key;
    if (!apiKey)
        return response.status(400).json({ "error": "API key is missing" });
    else if (apiKey !== "3f2504e0-4f89-11d3-9a0c-0305e82c3301")
        return response.status(403).json({ "error": "Invalid API key" });
    else
        next();
}

module.exports = ApiKeyMiddleware;