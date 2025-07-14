function mostrarInfo(curso) {
  document.getElementById("modal-texto").innerText = "Información de: " + curso;
  document.getElementById("modal").style.display = "block";
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}
