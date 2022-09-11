const {src,dest,watch} = require("gulp")
const sass = require("gulp-sass")(require("sass"));
const plumber = require("gulp-plumber");

function css(params) {
    //identificar el archivo sass
//compilar

src("src/scss/**/*.scss")
.pipe(plumber())
.pipe(sass())
.pipe(dest("build/css"))

    params()//colba que avisa agulp cuando llego al  final
}
function dev(done){
    watch("src/scss/**/*.scss",css)

    done()
}
exports.css= css;
exports.dev = dev;