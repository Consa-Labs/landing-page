const eleventyImage = require("@11ty/eleventy-img");

module.exports = {

  img: function(filepath, alt, widths, classes = "", sizes = "(min-width: 22em) 30vw, 100vw") {

    let options = {
      formats: ["webp", "jpg"],
      widths: widths || [null],
      urlPath: "/_assets/img/built/",
      outputDir: "./dist/_assets/img/built/",
      cacheOptions: {
        duration: "2y",
        directory: ".imgCache",
        removeUrlQueryParams: false,
      },
    };

    eleventyImage(filepath, options);

    let imageAttrs = {
      alt,
      loading: "lazy",
      decoding: "async",
      sizes: sizes,
      class: classes,
    };

    let metadata = eleventyImage.statsSync(filepath, options);
    return eleventyImage.generateHTML(metadata, imageAttrs);
  },

}
