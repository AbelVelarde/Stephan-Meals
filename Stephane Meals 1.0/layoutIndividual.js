'use strict'

function crearLayoutIndividual(n) {
    let layout = document.createElement('div');
    layout.id = 'layoutIndividual';
    layout.style.height = 'auto';
    layout.style.display = 'flex';
    layout.style.flexDirection = 'column';
    layout.style.alignItems = 'center';

    let receta = crearReceta();
    let imagen = crearImagen();
    let datos = crearDatos();
    let nombre = crearNombre();
    let datosReceta = crearDatosReceta();
    let otrosDatos = crearOtrosDatos();
    let categoria = crearCategoria();
    let zona = crearZona();
    let ingredientes = crearIngredientes();
    let listaIngr = crearListaIngr();
    let instrucciones = crearInstrucciones();

    document.getElementById('principal').append(layout);

    document.getElementById('layoutIndividual').append(receta);

    document.getElementById('receta').append(nombre);
    document.getElementById('receta').append(datos);

    document.getElementById('datos').append(imagen);
    document.getElementById('datos').append(datosReceta);

    document.getElementById('datosReceta').append(otrosDatos)

    document.getElementById('otrosDatos').append(categoria);
    document.getElementById('otrosDatos').append(zona);

    document.getElementById('datosReceta').append(ingredientes);


    document.getElementById('ingredientes').append(listaIngr);

    document.getElementById('receta').append(instrucciones);

    rellenarLayoutIndividual(n);
}

function crearReceta() {
    let receta = document.createElement('div');
    receta.id = 'receta';
    receta.style.height = 'auto';
    receta.style.width = '95%';
    receta.style.padding = '10px';
    receta.style.backgroundColor = 'white';
    receta.style.border = '2px black solid';
    receta.style.display = 'flex';
    receta.style.flexDirection = 'column';
    receta.style.alignItems = 'center';

    return receta;
}

function crearImagen() {
    let imagen = document.createElement('img');
    imagen.id = 'imagenComida';
    imagen.style.width = '30%';
    imagen.style.height = '320px';
    imagen.style.border = '2px black solid';
    imagen.style.alignSelf = 'center';
    imagen.alt = 'Imagen no encontrada';

    return imagen;
}

function crearDatos() {
    let datos = document.createElement('div');
    datos.id = 'datos';
    datos.style.height = '500px';
    datos.style.padding = '10px';
    datos.style.display = 'flex';
    datos.style.flexDirection = 'row';
    datos.style.alignContent = 'space-around';

    return datos;
}

function crearNombre() {
    let nombre = document.createElement('h2');
    nombre.id = 'nomComida';
    nombre.style.borderBottom = '2px black solid';
    nombre.style.fontSize = '36px';
    nombre.style.width = '800px';
    nombre.style.textAlign = 'center';

    return nombre;
}

function crearDatosReceta() {
    let datosReceta = document.createElement('div');
    datosReceta.id = 'datosReceta';
    datosReceta.style.height = '350px';
    datosReceta.style.display = 'flex';
    datosReceta.style.flexDirection = 'column';
    datosReceta.style.alignItems = 'center';
    return datosReceta;
}

function crearOtrosDatos() {
    let otrosDatos = document.createElement('div');
    otrosDatos.id = 'otrosDatos';
    otrosDatos.style.marginTop = '10px';
    otrosDatos.style.fontSize = '24px';
    otrosDatos.style.height = '30px';   
    otrosDatos.style.width = '800px'; 
    otrosDatos.style.display = 'flex';
    otrosDatos.style.justifyContent = 'space-around';

    return otrosDatos;
}

function crearCategoria() {
    let categoria = document.createElement('p');
    categoria.id = 'datosCategoria';
    categoria.style.borderBottom = '2px black solid';
    return categoria;
}

function crearZona() {
    let zona = document.createElement('p');
    zona.id = 'datosZona';
    zona.style.borderBottom = '2px black solid';
    return zona;
}

function crearIngredientes() {
    let ingredientes = document.createElement('div');
    let p = document.createElement('p');
    p.innerHTML = 'Ingredients:';
    p.style.fontSize = '22px';
    p.style.textAlign = 'center';
    p.style.width = '300px';
    p.style.borderBottom = '2px black solid';
    ingredientes.append(p);
    ingredientes.id = 'ingredientes';
    ingredientes.style.fontSize = '18px';
    ingredientes.style.padding = '20px';
    ingredientes.style.display = 'flex';
    ingredientes.style.flexDirection = 'column';
    ingredientes.style.alignItems = 'center';
    return ingredientes;
}

function crearListaIngr() {
    let listaIngr = document.createElement('ul');
    listaIngr.id = 'listaIngr';
    listaIngr.style.height = 'auto';
    listaIngr.style.margin = '10px'
    listaIngr.style.display = 'flex';
    listaIngr.style.justifyContent = 'center';
    listaIngr.style.flexFlow = 'row wrap';

    return listaIngr;
}

function crearInstrucciones() {
    let instrucciones = document.createElement('p');
    instrucciones.id = 'instrucciones';
    instrucciones.style.fontSize = '18px';
    instrucciones.style.margin = '50px';
    instrucciones.style.padding = '10px';
    instrucciones.style.width = '85%';
    instrucciones.style.border = '2px black solid';

    return instrucciones;
}



function rellenarLayoutIndividual(n) {
    document.getElementById('imagenComida').src = n.strMealThumb;
    document.getElementById('nomComida').innerHTML = n.strMeal;
    document.getElementById('datosCategoria').innerHTML = 'Category: ' + n.strCategory;
    document.getElementById('datosZona').innerHTML = 'Zone: ' + n.strArea;

    let result = Object.keys(n).map(function (key) {
        return [(key),n[key]];
    });

    for (let i = 0; i < result.length; i++) {
        let n = result[i];
        let m = result[i + 20]; //offset que nos devuelve la pos de la cantidad
        if ((n[0]).includes('Ingredient')) {
            if (n[1] != null && n[1].length != 0 ) {
                let ingr = document.createElement('li');
                ingr.style.height = '35px';
                ingr.style.width = '300px';
                ingr.innerHTML = n[1] + '(' + m[1] + ')';
                document.getElementById('listaIngr').append(ingr);
            }
        }
    }

    let myInstructions = (n.strInstructions).split('.');
    for(let step in myInstructions){
        let instr = document.createElement('p');
        instr.innerHTML =  myInstructions[step];
        document.getElementById('instrucciones').append(instr);
    }


}