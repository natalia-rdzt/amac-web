// Mejora opcional: muestra el nombre del archivo elegido en el campo de currículum.
(function () {
  var entrada = document.getElementById("curriculum");
  var nombre = document.getElementById("curriculum-nombre");
  if (!entrada || !nombre) return;

  entrada.addEventListener("change", function () {
    nombre.textContent = entrada.files.length ? entrada.files[0].name : "";
  });
})();
