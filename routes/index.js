var express = require('express');
var router = express.Router();

/* GET home page.(index.ejs) */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET seccion.(nosotros.ejs) */
router.get('/nosotros', function(req, res, next) {
  res.render('nosotros', { title: 'nosotros somos...' });
});
/* GET seccion.(servicios.ejs) */
router.get('/servicios', function(req, res, next) {
  res.render('servicios', { title: 'nuestros servicios..' });
});
/* GET seccion.(productos.ejs) */
router.get('/productos', function(req, res, next) {
  res.render('productos', { title: 'nuestros productos..' });
});
/* GET seccion.(productos.ejs) */
router.get('/envivo', function(req, res, next) {
  res.render('envivo', { title: 'envivo..' });
});




module.exports = router;
