const MultimediaModule = (function() {
    // Función privada para establecer la URL en el iframe
    function setVideoURL(url, id) {
        const iframe = document.getElementById(id);
        if (iframe) {
            iframe.setAttribute('src', url);
        }
    }

    // Retorno de la función pública que invoca la función privada
    return {
        setVideo: function(url, id) {
            setVideoURL(url, id);
        }
    };
})();

class Multimedia {
    constructor(url) {
        let _url = url; // Atributo privado

        this.getUrl = function() {
            return _url;
        };

        this.setUrl = function(newUrl) {
            _url = newUrl;
        };
    }

    setInicio() {
        return "Este método es para realizar un cambio en la URL del video.";
    }
}

class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this.id = id;
    }

    playMultimedia() {
        MultimediaModule.setVideo(this.getUrl(), this.id);
    }

    setInicio(tiempo) {
        const nuevaUrl = `${this.getUrl()}?start=${tiempo}`;
        this.setUrl(nuevaUrl);
        document.getElementById(this.id).setAttribute('src', nuevaUrl);
    }
}

// URLs de los videos
const musicaUrl = "https://www.youtube.com/embed/1rC9Wh4-RfQ";
const peliculaUrl = "https://www.youtube.com/embed/bK6ldnjE3Y0";
const serieUrl = "https://www.youtube.com/embed/IJ_AZCvCacw";

// Creación de instancias de la clase Reproductor
const reproductorMusica = new Reproductor(musicaUrl, 'musica');
const reproductorPelicula = new Reproductor(peliculaUrl, 'pelicula');
const reproductorSerie = new Reproductor(serieUrl, 'serie');

// Invocación del método playMultimedia para mostrar los videos
reproductorMusica.playMultimedia();
reproductorPelicula.playMultimedia();
reproductorSerie.playMultimedia();

// Modificación del tiempo de inicio en una instancia (por ejemplo, en la de música)
reproductorMusica.setInicio(25); // El video de música empezará en el segundo 25
