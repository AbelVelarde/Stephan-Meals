
'use strict'

function crearLayoutMultiple(e){

    let layout = document.createElement('div');
    layout.id = 'layoutMultiple';
    layout.style.height = 'auto';
    layout.style.display = 'flex';
    layout.style.justifyContent = 'center';
    layout.style.flexWrap = 'wrap';

    document.getElementById('principal').append(layout);

    for(let i = 0; i<e.meals.length;i++){
        crearRecetaM(e, i);
        crearImagenM(e, i);
        crearCont(i);
        crearNombreM(e, i);
        crearCategoriaM(e,i);
        crearZonaM(e, i);
    }
}

function crearRecetaM(e, i){
    let idReceta = e.meals[i].idMeal;
    let receta = document.createElement('div');
    receta.id = 'recetaM'+i;
    receta.style.order = i;
    receta.style.margin = '10px';
    receta.style.width = '600px';
    receta.style.height = '300px';
    receta.style.display = 'flex';
    receta.style.justifyContent = 'center';
    receta.style.flexWrap = 'wrap';
    receta.style.border = '2px black solid';
    receta.style.fontSize = '20px';
    receta.style.backgroundColor = 'white';

    receta.addEventListener('click', ()=>{
        document.getElementById('layoutMultiple').remove();
        document.getElementById('searchBox').value = '';
        document.getElementById('buscadorCat').value = '0';
        document.getElementById('buscadorZona').value = '0';
        document.getElementById('buscadorIngr').value = '0';
        buscarPorNombre(idReceta);
        window.scroll(0,0);
    })
    document.getElementById('layoutMultiple').append(receta); 
}

function crearCont(i){
    let contenedor = document.createElement('div');
    contenedor.id = 'recetaCont'+i;
    contenedor.style.width = '45%';
    contenedor.style.display = 'flex';
    contenedor.style.flexDirection = 'column';
    contenedor.style.alignItems = 'center';
    contenedor.style.justifyContent= 'center';
    document.getElementById('recetaM'+i).append(contenedor);    
}

function crearImagenM(e, i){
    let img = document.createElement('img');
    img.style.margin = '10px';
    img.style.width = '45%';
    img.style.border = '2px black solid';
    img.src = e.meals[i].strMealThumb;
    document.getElementById('recetaM'+i).append(img);
}

function crearNombreM(e, i){
    let nombre = document.createElement('p');
    nombre.style.margin = '10px';
    nombre.style.width = '200px';
    nombre.style.height = '50px';
    nombre.style.border = '2px black solid';
    nombre.style.textAlign = 'center';
    nombre.innerHTML = e.meals[i].strMeal;
    document.getElementById('recetaCont'+i).append(nombre);
}

function crearCategoriaM(e, i){
    let cat = document.createElement('p');
    cat.id = 'cat'+i;
    cat.style.margin = '10px';
    cat.style.width = '200px';
    cat.style.height = '50px';
    cat.style.border = '2px black solid';
    cat.style.textAlign = 'center';
    cat.innerHTML = 'Category: ' + e.meals[i].strCategory;
    document.getElementById('recetaCont'+i).append(cat);

    if(e.meals[i].strCategory == "" || e.meals[i].strCategory == null){
        document.getElementById('cat'+i).remove();
    }
}

function crearZonaM(e, i){
    let zona = document.createElement('p');
    zona.id='zona'+i;
    zona.style.margin = '10px';
    zona.style.width = '200px';
    zona.style.height = '50px';
    zona.style.border = '2px black solid';
    zona.style.textAlign = 'center';
    zona.innerHTML = 'Zone: ' + e.meals[i].strArea;
    document.getElementById('recetaCont'+i).append(zona);

    if(e.meals[i].strArea == "" || e.meals[i].strArea == null){
        document.getElementById('zona'+i).remove();
    }
}

