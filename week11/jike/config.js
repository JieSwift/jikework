/* gulp命令会由gulpfile.js运行，所以src和build文件夹路径如下（根目录下） */
var dest = './dist';

module.exports = {
    sass: {
        all: "/sass/app.scss", //所有sass
        src: "/sass/*.scss", //需要编译的sass
        dest: dest + "/css", //输出目录
        rev: dest + "/rev/css",
        settings: { //编译sass过程需要的配置，可以为空

        }
    },
    js: {
        src: "/js/index.js",
        dest: dest + "/js",
        rev: dest + "/rev/js"
    },
    clean: {
        src: dest
    },
    rev: { //use rev to reset html resource url
        revJson: dest + "/rev/**/*.json",
        src: "*.html", //root index.html
        dest: ""
    }
}
