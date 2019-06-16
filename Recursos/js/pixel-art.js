var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];


//Almaceno elementos del DOM en variables.
var paleta = document.getElementById("paleta");
var grilla = document.getElementById("grilla-pixeles");


//Almaceno los dibujos precargados en variables.
var dibujoBatman = document.getElementById("batman");
var dibujoMaravilla = document.getElementById("wonder");
var dibujoFlash = document.getElementById("flash");
var dibujoInvisible = document.getElementById("invisible");

//Events para cargar los superhéroes.
dibujoBatman.addEventListener("click",
  function(){
  cargarSuperheroe(batman);
});

dibujoMaravilla.addEventListener("click",
  function(){
  cargarSuperheroe(wonder);
});

dibujoFlash.addEventListener("click",
  function(){
  cargarSuperheroe(flash);
});

dibujoInvisible.addEventListener("click",
  function(){
  cargarSuperheroe(invisible);
});


//Genero paleta de colores.
function paletaDeColores(){
  for(var i = 0; i < nombreColores; i++){
    var newDiv = document.createElement("div");
    newDiv.style.backgroundColor = nombreColores[i];
    newDiv.className="color-paleta";
    paleta.appendChild(newDiv);
  }
}

//Genero grilla de pixeles y agrego la clase "pixel" a cada elemento.
function grillaDePixeles(){
  for(var i = 0; i < 1750; i++){
    var newDiv = document.createElement("div");
    newDiv.className = "pixel";
    grilla.appendChild(newDiv);
  }
}


//Variable del color seleccionado para la paleta.
var colorSeleccionado = document.getElementById("indicador-de-color");

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener("change",
  (function(e) {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    colorSeleccionado.style.backgroundColor = colorActual;
  })
);


//Event para pintar los pixeles de la grilla.
grilla.addEventListener("mousedown", pintarPixel);

function pintarPixel(e){
  e.target.style.backgroundColor = colorPersonalizado.value;
}

//Events para detectar si el mouse se encuentra presionado.
var estadoMouse;

grilla.addEventListener("mousedown", mousePresionado);
grilla.addEventListener("mouseup", mouseSuelto);

function mousePresionado(e){
  estadoMouse = true;
}

function mouseSuelto(e){
  estadoMouse = false;
}

//Event para pintar mientras el mouse se encuentre presionado.
grilla.addEventListener("mousemove", movimientoPincel);

function movimientoPincel(e){
  if(estadoMouse == true){
    e.target.style.backgroundColor = colorPersonalizado.value;
  }
}

//Event para eliminar los dibujos.
var botonBorrar = $("#borrar");

botonBorrar.click(borrarGrilla);

function borrarGrilla(){
  $(".pixel").animate({"background-color":"white"}, 500);
}

//Event para guardar los dibujos.
var botonGuardar = document.getElementById("guardar");

botonGuardar.addEventListener("click",
  function(){
  guardarPixelArt();
});

//Ejecuto funciones.
paletaDeColores();
grillaDePixeles();
