module.exports = {
    printWidth: 80,
    singleQuote: false,
    jsxSingleQuote: false,
    semi: true,
    trailingComma: "all",
    tabWidth: 4,

    overrides: [
        {
            files: ["*.html"],
            options: {
                bracketSameLine: true,
                tabWidth: 4,
                singleQuote: false,
                jsxSingleQuote: false,
            },
        },
        {
            files: ["*.css"],
            options: { tabWidth: 4 },
        },
        {
            files: ["**/*.jsx", "**/*.tsx"],
            options: {
                bracketSameLine: false,
                tabWidth: 4,
            },
        },
    ],
};
