const { src, dest, watch } = require('gulp')

// CSS
const sass = require('gulp-sass')(require('sass'))
const plumber = require('gulp-plumber')

function css(done) {
  src('src/scss/**/*.scss') // Identifica el archivo .SCSS a compilar
  .pipe( plumber() ) // no frena el watch
  .pipe( sass() ) // Lo compila
  .pipe( dest('build/css') ) // Lo almacena en el disco duro
  done()
}

function dev(done) {
  watch( 'src/scss/**/*.scss', css )
  done()
}

exports.css = css
exports.dev = dev