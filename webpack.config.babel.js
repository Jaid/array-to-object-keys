import webpackConfigJaid from "webpack-config-jaid"

export default webpackConfigJaid({
  type: "lib",
  include: [
    "license.*",
    "readme.md",
  ],
  documentation: true,
  publishimo: {
    publishimoOptions: {
      fetchGithub: true,
    },
  },
})