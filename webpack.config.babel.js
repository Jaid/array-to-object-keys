import webpackConfigJaid from "webpack-config-jaid"

export default webpackConfigJaid({
  type: "lib",
  include: [
    "license.*",
    "readme.md",
  ],
  publishimo: {
    publishimoOptions: {
      fetchGithub: true,
    },
  },
})