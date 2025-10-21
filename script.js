// Seleciona elementos
const html = document.documentElement
const img = document.querySelector("#profile img")

// Função para atualizar a imagem conforme o tema
function updateImage() {
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}

// Função que troca o tema
function toggleMode() {
  html.classList.toggle("light")
  updateImage() // atualiza a imagem imediatamente após trocar o tema
}

// Atualiza a imagem assim que a página carrega
window.addEventListener("DOMContentLoaded", updateImage)
