//funcionamento do botão de voltar ao topo
window.onscroll = function() {
    const btn = document.getElementById("botao");
     if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      btn.style.display = "block";
     } else {
      btn.style.display = "none";
    }
  };

  // Função para voltar ao topo
  function voltarAoTopo() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };


