const funcionPredeterminada = () => {
    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();
        const valorPorHora = document.getElementById('valorPorHora').value;
        const interfazHoras = document.getElementById('interfazHoras').value;
        const descuentoDia = document.getElementById('descDias').value;
        const diasRet = document.getElementById('diasRet').value;
        const total = parseFloat(valorPorHora)*parseFloat(interfazHoras);
        const descuento = parseFloat(descuentoDia)*parseFloat(diasRet);
        valorReal = total-descuento;
        const campoInput = document.getElementById('valorTotal')
        campoInput.value = valorReal+' $';
        campoInput.disabled = true;
      });
  };
  
  funcionPredeterminada();

