exports.summary = 'A methodology for documenting CSS and generating styleguides. ';

exports.usage = '<src> [options]';

exports.options = {
    "src": {
        describe: "Specify a source directory"
    },
    "dest": {
        describe: "Output to <src> when passing files"
    },

    "include": {
        describe: "Add <path> to lookup paths"
    },

    "import" : {
        describe: "Import stylus <file>"
    },

    "theam" : {
        alias : 't'
        ,default : 'ganam'
        ,describe : 'Specify the theme'
    },

    "compress" : {
        alias : 'c'
        ,describe : 'Compress css output'
    },

    "use" : {
        describe: "Utilize the stylus plugin at <path>"
    },

    "quiet": {
        describe: "Only show warn logs"
    },

    "verbose": {
        describe: "Show more logs"
    }
};

exports.run = function (options) {
    exports.ganma(options);
};

exports.ganma = function(options){
    var defaultOptions = {
        // stylus options
        includeCSS: false,
        paths: [],
        compress: false,
        plugins: [],
        imports: [],

        watch: false,
        quiet: false,
        verbose: false,
    };

    exports._.defaults(options, defaultOptions);

    if(options.include){
        options.paths.push(options.include);
    }

    if(options.import){
         options.imports.push(options.import);
    }

    options.out = options.dest;

    exports.log("Generating style guide:", options.src.green, '>', options.dest.green);

    var ganam = require('ganam-cli');
    ganam(options)
}
