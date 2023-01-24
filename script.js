var regiones = [
  {
    nombre: "Region de Arica y Parinacota",
    atractivos: "Morro de Arica, zofri",
    imagen: "./img/arica y parinacota.jpg"
  },

  {
    nombre: "Region de Tarapaca",
    atractivos:"hola",
    imagen: "./img/tarapaca.jpg"
  },
  {
    nombre: "Region de Antofagasta",
    atractivos:"chao",
    imagen: "./img/antofagasta.jpg"
  },
  {
    nombre: "Region de Copiapo",
    atractivos:"",
    imagen: "./img/copiapo.jpg"
  },
  {
    nombre: "Region de Coquimbo",
    atractivos:"",
    imagen: "./img/coquimbo.jpg"
  },
  {
    nombre: "Region de Valparaiso",
    atractivos:"",
    imagen: "./img/valparaiso.jpg"
  },
  {
    nombre: "Region Metropolitana",
    atractivos:"",
    imagen: "./img/santiago.jpg"
  },
  {
    nombre: "Region de Libertador Bernardo O'higgins",
    atractivos:"",
    imagen: "./img/rancagua.jpg"
  },
{
    nombre: "Region de Maule",
    atractivos:"",
    imagen: "./img/maule.png"
  },
{
    nombre: "Region de Nuble",
    atractivos: "",
    imagen: "./img/ñuble.jpg"
  },
{
    nombre: "Region de Biobio",
    atractivos:"",
    imagen: "./img/concepcion.jpg"
  },
{
    nombre: "Region de la Araucania",
    atractivos:"",
    imagen: "./img/araucania.jpg"
  },
{
    nombre: "Region de Los Rios",
    atractivos:"",
    imagen: "./img/los rios.jpg"
  },
{
    nombre: "Region de Los Lagos ",
    atractivos:"",
    imagen: "./img/los lagos.jpg"
  },
{
    nombre: "Region de Aysen",
    atractivos:"",
    imagen: "./img/aysen.jpg"
  },
{
    nombre: "Region de Magallanes",
    atractivos:"",
    imagen: "./img/magallanes (2).jpg"
  }
]

console.log(regiones[15].nombre)


$('#arica').mouseenter (function(){
    $("#foto").attr("src",regiones[0].imagen)
    $("#region").html(regiones[0].nombre)
    $("#atractivos").html(regiones[0].atractivos)
})



