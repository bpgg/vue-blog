const path = require("path");
module.exports = {
    configureWebpack: config => {
        if (process.env.NODE_ENV === "production") {
            config.mode = "production";
        } else {
            config.mode = "development";
        }
        Object.assign(config, {

            resolve: {
                extensions: [".js", ".json", ".vue"],
                alias: {
                    "@": path.resolve(__dirname, "./src"),
                    "@c": path.resolve(__dirname, "./src/components"),
                    "@p": path.resolve(__dirname, "./src/pages")
                }
            }
        });
    },
    css: {
        loaderOptions: {
            // scss: {
            //     prependData: `@import "~@/styles/main.scss";`
            // }

        }
    }
}