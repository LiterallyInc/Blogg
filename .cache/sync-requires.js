const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("H:\\School code stuff\\GyarbBlogg\\node_modules\\gatsby-plugin-offline\\app-shell.js"))),
  "component---src-templates-post-js": hot(preferDefault(require("H:\\School code stuff\\GyarbBlogg\\src\\templates\\post.js"))),
  "component---src-templates-tag-js": hot(preferDefault(require("H:\\School code stuff\\GyarbBlogg\\src\\templates\\tag.js"))),
  "component---src-templates-category-js": hot(preferDefault(require("H:\\School code stuff\\GyarbBlogg\\src\\templates\\category.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("H:\\School code stuff\\GyarbBlogg\\src\\pages\\404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("H:\\School code stuff\\GyarbBlogg\\src\\pages\\about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("H:\\School code stuff\\GyarbBlogg\\src\\pages\\contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("H:\\School code stuff\\GyarbBlogg\\src\\pages\\index.js")))
}

