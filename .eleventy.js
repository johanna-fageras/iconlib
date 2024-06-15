module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("public/css");
    eleventyConfig.addPassthroughCopy("public/js");
    eleventyConfig.addPassthroughCopy("public/images");
    eleventyConfig.addPassthroughCopy("public/fonts");
    eleventyConfig.addPassthroughCopy("public/symbols");

    return {
      markdownTemplateEngine: 'njk',
      dataTemplateEngine: 'njk',
      htmlTemplateEngine: 'njk',
      dir: {
        input: "src",
        includes: "_includes",
        output: "site"
        }
    };
};