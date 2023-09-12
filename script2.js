const noticias = [
    {
        titulo: 'Las veces que Chile y Colombia jugaron en Santiago: ¿cómo nos fue?',
        descripcion: 'Luego de la victoria contra Venezuela se viene el primer reto oficial de la era de Néstor Lorenzo como visitante. La tricolor llega en mejor momento, pero Chile necesita un buen resultado tras caer en la primera jornada.',
        imagen: 'noticia1.jpg',
        enlace: 'https://www.elespectador.com/deportes/seleccion-colombia/cal-y-arena-el-historial-de-colombia-en-santiago-chile-vs-colombia-en-las-eliminatorias-mundialistas/'
    },
    {
        titulo: 'Los jóvenes, ¿escépticos ante la democracia? El Barómetro de Open Society',
        descripcion: 'El Barómetro de Open Society da cuenta de las dudas que tienen los jóvenes frente a la democracia, así como de las principales prioridades y preocupaciones políticas, sociales y económicas en varios países del mundo. Infografía.',
        imagen: 'noticia2.jpg',
        enlace: 'https://www.elespectador.com/mundo/mas-paises/los-jovenes-escepticos-ante-la-democracia-el-barometro-de-open-society-noticias-hoy/'
    },
    {
        titulo: 'OIM: desapariciones y muertes de migrantes en América llegaron a 1.457 en 2022',
        descripcion: 'La Organización Internacional para las Migraciones afirmó que el número superó en un 10 % a las reportadas en el 2021. La mayoría de los casos se presentan en la frontera entre Estados Unidos y México.',
        imagen: 'noticia3.jpg',
        enlace: 'https://www.elespectador.com/mundo/america/la-cifra-de-desapariciones-y-muertes-de-migrantes-en-america-llego-a-1457-en-2022-noticias-hoy/'
    }
];

function cargarNoticias() {
    const noticiasContainer = document.getElementById('noticias-container');
    noticiasContainer.innerHTML = '';

    noticias.forEach((noticia) => {
        const noticiaElement = document.createElement('section');
        noticiaElement.className = 'noticia';

        noticiaElement.innerHTML = `
            <h2>${noticia.titulo}</h2>
            <p>${noticia.descripcion}</p>
            <img src="${noticia.imagen}" alt="Imagen de la Noticia">
            <a href="${noticia.enlace}" class="boton">Leer completa</a>
        `;

        noticiasContainer.appendChild(noticiaElement);
    });

    
    cargarPortales();
}

function cargarPortales() {
    const tablaPortales = document.querySelector('.tabla-portales');
    tablaPortales.style.display = 'table';
}

window.addEventListener('load', () => {
    cargarNoticias();
    cargarPortales();
});

const adminMenuItem = document.querySelector('nav ul li a[href="#admin"]');
const loginSection = document.getElementById('login-section');
const signupSection = document.getElementById('signup-section');

adminMenuItem.addEventListener('click', () => {
    loginSection.style.display = 'block';
    signupSection.style.display = 'none';
});
