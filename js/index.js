function cargar()
{
    var divCuerpo = document.getElementById('cuerpo');
    fetch("http://www.raydelto.org/agenda.php").then(function(respuesta){
        return respuesta.json();
    }).then(function(respuesta){
        var contacto = respuesta[3];
        divCuerpo.innerHTML = contacto.nombre + " " + contacto.apellido + " " + contacto.telefono;
    });
}