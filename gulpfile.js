var gulp = require("gulp");
var uglify= require ("gulp-uglify");
var obfuscate = require ("gulp-obfuscate");
var sass = require ("gulp-sass");



var rutas = {
    rutaJS: "./src/assets/js/*.js",
    rutaSCSS: "./src/assets/scss/*.scss",
    rutaHTML:"src/*.html",
}

gulp.task("prepararHTML", function(){
    gulp.src(rutas.rutaHTML)
    .pipe(gulp.dest("public/"))
});

gulp.task("prepararJS", function(){
    gulp.src(rutas.rutaJS)
    .pipe(gulp.dest("public"))
});

gulp.task("prepararCSS", function(){
    gulp.src(rutas.rutaSCSS)
    .pipe(sass({outputStyle: "compressed"})
         .on("error", sass.logError))
    .pipe(gulp.dest("public"))
});