//funcionamento do botão de voltar ao topo
window.onscroll = function() {
    const btn = document.getElementById("botao");
     if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      btn.style.display = "block";
     } else {
      btn.style.display = "none";
    }
  };
  //para voltar ao topo
  function voltarAoTopo() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };


  // Ampliar imagem ao clicar
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("ampliar");
    const modalImg = document.getElementById("ampliar-img");
  
    document.querySelectorAll(".zoom").forEach(img => {
      img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
      });
    });
  
    modal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  });

  let indiceAtual = 0;
  const imagens = document.querySelectorAll('.imgcarrossel img');
  
  // Função para exibir a imagem atual
  function mostrarImagem(indice) {
      imagens.forEach(img => img.classList.remove('ativo'));
      imagens[indice].classList.add('ativo');
  }
  
  // Avança automaticamente a cada 3 segundos
  function iniciarCarrosselAutomatico() {
      setInterval(() => {
          indiceAtual = (indiceAtual + 1) % imagens.length;
          mostrarImagem(indiceAtual);
      }, 3000);
  }
  
  // Inicia o carrossel quando a página carregar
  window.onload = () => {
      mostrarImagem(indiceAtual);
      iniciarCarrosselAutomatico();
  };
  

  