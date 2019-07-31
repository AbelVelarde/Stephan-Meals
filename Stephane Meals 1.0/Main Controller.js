'use strict'

function random() {

    let url = 'https://www.themealdb.com/api/json/v1/1/random.php';

    fetch(url)
        .then(e => e.json())
        .then(e => crearRandom(e))

}

function crearRandom(e) {
    let n = e.meals[0];
    if (document.getElementById('layoutIndividual') != null) {
        document.getElementById('layoutIndividual').remove();
    }
    if (document.getElementById('layoutMultiple') != null) {
        document.getElementById('layoutMultiple').remove();
    }
    crearLayoutIndividual(n);
    window.scroll(0, 0);
}

function buscarPorNombre(n) {
    document.getElementById('buscadorZona').value = '0';
    document.getElementById('buscadorCat').value = '0';
    document.getElementById('buscadorIngr').value = '0';
    let nombre = document.getElementById('searchBox').value;
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${nombre}`;
    if (n != null) {
        url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${n}`;
    }

    fetch(url)
        .then(e => e.json())
        .then(e => busqueda(e))
}

function busqueda(e) {


    if (document.getElementById('layoutMultiple') != null) {
        document.getElementById('layoutMultiple').remove();
    }
    if (document.getElementById('layoutIndividual') != null) {
        document.getElementById('layoutIndividual').remove();
    }
    let n = e.meals[0];
    e.meals.length > 1 ? crearLayoutMultiple(e) : crearLayoutIndividual(n);
    ordenar();
}

function main() {
    buscarPor('c');
    buscarPor('a');
    buscarPor('i');
}

function buscarPor(n) {
    let url = `https://www.themealdb.com/api/json/v1/1/list.php?${n}=list`;
    fetch(url)
        .then(e => e.json())
        .then(e => busquedaPor(e, n))

}

function busquedaPor(e, n) {
    if (n == 'c') {
        for (let i = 0; i < e.meals.length; i++) {
            let opcion = document.createElement('option');
            opcion.innerHTML = e.meals[i].strCategory;
            document.getElementById('buscadorCat').append(opcion);
        }
    }
    if (n == 'a') {
        for (let i = 0; i < e.meals.length; i++) {
            let opcion = document.createElement('option');
            opcion.innerHTML = e.meals[i].strArea;
            document.getElementById('buscadorZona').append(opcion);
        }
    }
    if (n == 'i') {
        for (let i = 0; i < e.meals.length; i++) {
            let opcion = document.createElement('option');
            opcion.innerHTML = e.meals[i].strIngredient;
            document.getElementById('buscadorIngr').append(opcion);
        }
    }
    window.scroll(0, 0);
}

function searchBy(n) {
    if (n == 1) {
        let valor = document.getElementById('buscadorCat').value;
        let url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${valor}`;
        document.getElementById('searchBox').value = '';
        document.getElementById('buscadorZona').value = '0';
        document.getElementById('buscadorIngr').value = '0';

        fetch(url)
            .then(e => e.json())
            .then(e => {
                if (e.meals.length > 1) {
                    busqueda(e);
                }
                else {
                    buscarPorNombre(e.meals[0].idMeal);
                }
            })
    }
    else if (n == 2) {
        let valor = document.getElementById('buscadorZona').value;
        let url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${valor}`;
        document.getElementById('searchBox').value = '';
        document.getElementById('buscadorCat').value = '0';
        document.getElementById('buscadorIngr').value = '0';

        fetch(url)
            .then(e => e.json())
            .then(e => {
                if (e.meals.length > 1) {
                    busqueda(e);
                }
                else {
                    buscarPorNombre(e.meals[0].idMeal);
                }
            })
    }
    else if (n == 3) {
        let valor = document.getElementById('buscadorIngr').value;
        let url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${valor}`;
        document.getElementById('searchBox').value = '';
        document.getElementById('buscadorCat').value = '0';
        document.getElementById('buscadorZona').value = '0';

        fetch(url)
            .then(e => e.json())
            .then(e => {
                if (e.meals.length > 1) {
                    busqueda(e);
                }
                else {
                    buscarPorNombre(e.meals[0].idMeal);
                }
            })
    }
}




function ordenar() {
    let categoria = document.getElementById('categoria');
    let zona = document.getElementById('area');
    let name = document.getElementById('name');

    if (name.checked) {
        sortBy(1);
    }
    else if (categoria.checked) {
        sortBy(2);
    }
    else if (zona.checked) {
        sortBy(3);
    }
}

function sortBy(p) {
    let layout = document.getElementById('layoutMultiple');
    for (let i = 0; i < layout.childNodes.length - 1; i++) {
        let n = document.getElementById('recetaM' + i);
        let menor = n;
        for (let j = i + 1; j < layout.childNodes.length; j++) {
            let m = document.getElementById('recetaM' + j);
            if (menor.childNodes[p].innerHTML > m.childNodes[p].innerHTML) {
                menor = m;
            }
        }
        let value = n.style.order;
        let idvalue = n.id;
        n.style.order = menor.style.order;
        n.id = menor.id;
        menor.style.order = value;
        menor.id = idvalue;
    }
    window.scroll(0, 0);
}


