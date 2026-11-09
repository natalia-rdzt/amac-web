// Mejora opcional (JavaScript no es obligatorio en esta entrega).
// Sin JavaScript: el formulario envía a index.html y "Crear cuenta"
// lleva al registro de trabajador.
(function () {
  var formulario = document.getElementById("form-login");
  var enlaceCrear = document.getElementById("enlace-crear-cuenta");
  if (!formulario) return;

  var destinosRegistro = {
    trabajador: "registro-candidato.html",
    empresa: "registro-empresa.html"
  };

  // "Crear cuenta" cambia de destino según el rol elegido
  if (enlaceCrear) {
    formulario.querySelectorAll('input[name="rol"]').forEach(function (opcion) {
      opcion.addEventListener("change", function () {
        enlaceCrear.href = destinosRegistro[opcion.value];
      });
    });
  }

  // "Ingresar" manda a cada rol a su pantalla
  formulario.addEventListener("submit", function (evento) {
    var rol = formulario.querySelector('input[name="rol"]:checked');
    evento.preventDefault();
    window.location.href =
      rol && rol.value === "empresa" ? "empresa-vacantes.html" : "index.html";
  });
})();
