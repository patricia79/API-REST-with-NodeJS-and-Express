const express = require("express");
const bodyParser = require('body-parser');


const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(2500, () => {
    console.log('API REST en http://localhost:2500');
  });

  /*
let Libro = mongoose.model('Libro',{ name: String });
let miLibro = new Libro({ name: 'Mi Libro' });

miLibro.save((err, resuls) => {
    if(err){
        console.log(err);
        process.exit(1);
    }
    console.log('Documento almacenado', results);
    process.exit(0);
});

miLibro.save((err, results) => {
  if(err){
      console.error(err);
      process.exit(1);
  }
  console.log('Resultado', results);
  process.exit(0);
});


/*
const publicacionSchema = new mongoose.Schema({
  titulo: String,
  genero: String,
});
const autorSchema = new mongoose.Schema({
  nombre: String,
  publicaciones: [publicacionSchema],
});
const author = new mongoose.model('Autor', autorSchema);

const autorSchema = mongoose.Schema({
  _id: Number,
  nombre: String,
  publicaciones: [{
      type: Schema.Types.ObjectId,
      ref: 'Publicaciones'
  }],
});

const publicacionSchema = mongoose.Schema({
  _autor: { type: Number, ref: 'Autor' },
  titulo: String,
});

const Publicacion = mongoose.model('Publicacion', publicacionSchema);
const Autor = mongoose.model('Autor', autorSchema);

Autor.findOne({ name: 'Gabriel Garcia Marquez' })
  .populate('publicaciones')
  .exec((err, autor) => {
      if(err){
          console.log(err);
          process.exit(-1);
      }
      console.log(`Tl autor ${autor.nombre} tiene ${autor.publicaciones.length} publicaciones`);
  })

  Persona.virtual('nombreCompleto')
    .get(function(){
        return `${this.nombre} ${this.apellido}`;
    });

    esquemaLibro.pre('save', (next) =>{
      // guardar pdf
      // ...
      return next();
  });

  esquemaLibro.pre('remove', (next) => {
    // procesar ordenes pendientes
    // ...
    return next();
});

Los hooks y los métodos deben de ser agregados a los esquemas 
antes de ser incorporados dentro de los modelos, es decir antes de 
utilizar mongoose.model.

libroSchema.method({
    comprar(cantidad, cliente, callback){
        const libroAComprar = this;
        const results = procesarCompra();
        return callback(results);
    },
    reembolso(cliente, callback){
        const results = procesarReembolso();
        return callback(results);
    },
});

libroSchema.method({
    librosConCeroVentas(callback){
        const libros = consultarLibrosConCeroVentas();
        return callback(libros);
    },
    librosDelAutorId(autorId, callback){
        const libros = librosDelAutorId(autorId);
        return callback(libros);
    },
});

const postSchema = new mongoose.Schema({
    slug: {
        type: String,
        set: function(slug){
            return slug.toLowerCase();
        },
    },
    numeroDeLikes: {
        type: Number,
        get: function(value){
            return `${value} likes`;
        },
    },
    creadoEn: {
        type: String,
        get: function(value){
            if(!value) return null;
            return value.toUTCString();
        },
    },
})

const esquemaDeLibro = mongoose.Schema({
    name: String,
})

const ObjectId = mongoose.Schema.Types.ObjectId;
const Mixed = mongoose.Schema.Types.Mixed;
const esquemaDelLibro = mongoose.Schema({
    nombre: String,
    creado_en: Date,
    actualizado_en: { type: Date, default: Date.now },
    publicado: Boolean,
    idDelAuthor: {
        type: ObjectId,
        required: true,
    },
    descripcion: {
        type: String,
        default: null,
    },
    activo: {
        type: Boolean,
        default: false,
    },
    version: {
        type: Number,
        default: function() {
            return 1
        },
    },
    contribuyentes: [ObjectId],
});

*/