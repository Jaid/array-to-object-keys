import path from "path"

import webpackConfigJaid from "webpack-config-jaid"
import PublishimoWebpackPlugin from "publishimo-webpack-plugin"

const fromPackage = directive => path.resolve(__dirname, directive)

export default webpackConfigJaid({
  type: "lib",
  extra: {
    plugins: [
      new PublishimoWebpackPlugin
    ]
  }
})