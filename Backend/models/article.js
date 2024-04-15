'use strict'
var mongoose = require('mongoose');
var Schema =  mongoose.Schema;
var ArticleSchema = Schema({
        titulo : String,
        content : String,
        date : {type : Date , default: Date.now},
        image : String,

});


module.exports = mongoose.model('Article', ArticleSchema);
// articles --> guarda Documentos de este tipo y con esta estructura dentro de la coleccion