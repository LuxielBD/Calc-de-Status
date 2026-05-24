$("#calcular").click(function(){

  let nome = $("#nome").val();

  let inicial = Number($("#inicial").val());

  let porNivel = Number($("#porNivel").val());

  let nivelMax = Number($("#nivelMax").val());

  $("#resultado").html("");

  let html = "";

  let grupoAtual = -1;

  for(let nivel = 1; nivel <= nivelMax; nivel++){

    let valor = inicial + (porNivel * (nivel - 1));

    let grupo = Math.floor((nivel - 1) / 10);

    if(grupo != grupoAtual){

      grupoAtual = grupo;

      let inicioGrupo = 1 + (grupo * 10);
      let fimGrupo = inicioGrupo + 9;

      html += `
        <div class="grupo">
          <h2>Níveis ${inicioGrupo}-${fimGrupo}</h2>
      `;
    }

    html += `
      <div class="linha">
        Nível ${nivel} → ${nome}: ${valor}
      </div>
    `;

    let proximoGrupo = Math.floor(nivel / 10);

    if(proximoGrupo != grupoAtual || nivel == nivelMax){
      html += `</div>`;
    }

  }

  $("#resultado").html(html);

});


if("serviceWorker" in navigator){
  navigator.serviceWorker.register("./sw.js");
}
