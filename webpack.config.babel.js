import webpackConfigJaid from "webpack-config-jaid"

export default webpackConfigJaid({
  documentation: {},
  publishimo: {
    publishimoOptions: {
      fetchGithub: true,
    },
  },
})