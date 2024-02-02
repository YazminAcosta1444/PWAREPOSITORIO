var videos = [
    { titulo: "Video 1", descripcion: "Descripcion video 1", url: "https://www.youtube.com/embed/RqQ1d1qEWlE?si=7ShokLRD7TAdyA4h" },
    { titulo: "Video 2", descripcion: "Descripcion video 2", url: "https://www.youtube.com/embed/RqQ1d1qEWlE?si=7ShokLRD7TAdyA4h" },
    { titulo: "Video 3", descripcion: "Descripcion video 3", url: "https://www.youtube.com/embed/RqQ1d1qEWlE?si=7ShokLRD7TAdyA4h" },
    { titulo: "Video 4", descripcion: "Descripcion video 4", url: "https://www.youtube.com/embed/RqQ1d1qEWlE?si=7ShokLRD7TAdyA4h" }
];

var listaVideos = document.getElementById('listaVideosArreglo');

mostrarListaVideos(videos);
function mostrarListaVideos(videosBuscados) {
    listaVideos.innerHTML = "";

    videosBuscados.forEach(indiceVideo =>{

        var fila = document.createElement('div');
        var colUrlVideo = document.createElement('div');
        var iframeVideo = document.createElement('iframe');

        fila.setAttribute('class', 'row');
        colUrlVideo.setAttribute('class', 'col')
        iframeVideo.setAttribute('src', indiceVideo.url);
        iframeVideo.setAttribute('width', '400px');
        iframeVideo.setAttribute('height', '400px');
        iframeVideo.setAttribute('frameborder', '0');
        colUrlVideo.appendChild(iframeVideo);
        fila.appendChild(colUrlVideo);




        var col2TituloVideo = document.createElement('div');
        var h4TituloVideo = document.createElement('h4');
        var h6DescripcionVideo = document.createElement('h6');

        col2TituloVideo.setAttribute('class', 'col');
        h4TituloVideo.textContent = indiceVideo.titulo;
        h6DescripcionVideo.textContent = indiceVideo.descripcion;

        col2TituloVideo.appendChild(h4TituloVideo);
        col2TituloVideo.appendChild(h6DescripcionVideo);
        fila.appendChild(col2TituloVideo);


        var col3BotonVideo = document.createElement('div');
        var botonVideo = document.createElement('button');

        col3BotonVideo.setAttribute('class', 'col');
        botonVideo.setAttribute('class', 'btn btn-outline-primary');
        botonVideo.innerHTML = '@';

        col3BotonVideo.appendChild(botonVideo);
        fila.appendChild(col3BotonVideo);

        listaVideos.appendChild(fila);

    });

}

function buscarVideos() {
    var textoVideo = document.getElementById("txtBuscar").value;
    // alert(" texto buscado " + textoVideo);
    var videosBuscados = videos.filter(
        indiceVideo => {
            return indiceVideo.titulo.includes(textoVideo);
        }
    );
    mostrarListaVideos(videosBuscados);
}