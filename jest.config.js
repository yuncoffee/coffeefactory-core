exports = module.exports = {
    setupFilesAfterEnv: ["<rootDir>/jest-setup.js"],
    testEnvironment: "jsdom",
    moduleNameMapper: {
        ".(css|less|scss)$": "identity-obj-proxy",
    },
}
