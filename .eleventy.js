module.exports = function (eleventyConfig){
    //copy dirs
    eleventyConfig.addPassthroughCopy ("src/images");
    eleventyConfig.addPassthroughCopy ("src/fonts");
    eleventyConfig.addPassthroughCopy ("src/script");

    //dirs
    return{
        dir:{
            input: "src",
            output: "public"
        },
    };
};