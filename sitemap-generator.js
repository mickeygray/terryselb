require("babel-register")({
 presets: ["es2015", "react"],
});

const router = require("./src/sitemap-routes").default;
const Sitemap = require("../").default;

function generateSitemap() {
 return new Sitemap(router)
  .build("https://www.terryselb.com")
  .save("./public/sitemap.xml");
}

generateSitemap();
