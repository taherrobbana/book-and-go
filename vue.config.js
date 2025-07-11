const {defineConfig} = require('@vue/cli-service')
const path = require("path");
module.exports = defineConfig(
    {
        transpileDependencies: [
            'vuex-module-decorators',
            'quasar'
        ],

        pluginOptions: {
            quasar: {
                importStrategy: 'kebab',
                rtlSupport: false
            },
            i18n: {
                localeDir: 'locales',
                enableLegacy: true,
                runtimeOnly: false,
                compositionOnly: true,
                fullInstall: true
            }
        },

        publicPath: '/',
        configureWebpack: {
            module: {
                rules: [
                    {
                        test: /config.*config\.js$/,
                        use: [
                            {
                                loader: 'file-loader',
                                options: {
                                    name: 'config.js'
                                },
                            }
                        ]
                    }
                ]
            }
        }

    })
