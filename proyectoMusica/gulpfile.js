const {src,dest,watch} = require("gulp")
const sass = require("gulp-sass")(require("sass"))

function css(params) {
    //identificar el archivo sass
//compilar

src("src/scss/app.scss").pipe(sass())
.pipe(dest("build/css"))

    params()//colba que avisa agulp cuando llego al  final
}
function dev(done){
    watch("src/scss/app.scss",css)

    done()
}
exports.css= css;
exports.dev = dev;