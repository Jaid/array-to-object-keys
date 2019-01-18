import webpackConfigJaid from "webpack-config-jaid"

export default webpackConfigJaid({
  type: "lib",
  publishimo: {
    publishimoOptions: {
      config: {
        author: {
          name: "Jaid",
          email: "jaid.jsx@gmail.com",
          github: true,
        },
        license: "MIT",
      },
    },
  },
})