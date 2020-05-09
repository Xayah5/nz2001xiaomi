//引入gulp模块
let gulp = require("gulp");
let htmlmin = require("gulp-htmlmin");
let cssmin = require("gulp-clean-css");
let concat = require("gulp-concat");
let uglify = require("gulp-uglify");
let sass = require("gulp-sass");

gulp.watch("./src/*.scss",async ()=>{
    gulp.src("./src/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./dist"));
 });