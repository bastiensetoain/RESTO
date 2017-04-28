// Requis
var gulp = require('gulp');

// Include plugins
var plugins = require('gulp-load-plugins')(); // tous les plugins de package.json

// Variables de chemins
var source = './src'; // dossier de travail
var destination = './dist'; // dossier à livrer


// le code est éxécuté en strict mode

'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 

//le module "sass" compile tous les fichiers (.scss) d'un dossier spécifié

gulp.task('sass', function () {
    //déclare le dossier source et le type de fichier
  return gulp.src('./css/*.scss')
  //intègre une gestion des erreurs
    .pipe(sass().on('error', sass.logError))
  //déclare le dossier de destination une fois compilé
    .pipe(gulp.dest('.'));
});
 

//le module "watch" surveille tout changement opéré dans un dossier défini, içi tous les fichiers (.scss) dans le dossier "css"
//puis compile grace au module "sass"

gulp.task('sass:watch', function () {
    //défini le dossier à observer et le type de fichier
  gulp.watch('./css/*.scss', ['sass']);
});