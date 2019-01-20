const withTypeScript = require("@zeit/next-typescript");
const withCSS = require("@zeit/next-css");
module.exports = withTypeScript(withCSS());
