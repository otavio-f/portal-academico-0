function highlight(){
  getElementById("Like").style.fill="red";
}

		function fOnclick(){//clicado uma vez
			if (class == "botaoLike"){
        alert("botao like clicado 1x");
      }/*else if (class == botaoDislike){
        muda para vermelho
      }else if (botaoClose){
        muda para vermelho
      }*/
		}
		function fOndblclick(){//clicado duas vezes
			if (class == "botaoLike"){
        alert("botao like clicado 2x");
      }/*else if (class == botaoDislike){
        muda para vermelho
      }else if (botaoClose){
        muda para vermelho
      }*/
		}
		function fOnmouseup(){//clicado e liberado
      if (class == "botaoLike"){
        alert("botao like clicado e liberado");
      }/*else if (class == botaoDislike){
        muda para vermelho
      }else if (botaoClose){
        muda para vermelho
      }*/
		}
		function fOnmouseover(id){//mouse em cima do icone
      //document.getElementById("Like").fill="red";
      if (id === "Like"){
        alert("botao like acessado");
      }/*else if (class == botaoDislike){
        muda para vermelho
      }else if (botaoClose){
        muda para vermelho
      }*/
		}
		function fOnmouseout(){//mouse sai de cima do ícone
			if (class == "botaoLike"){
       alert("mouse saiu do botao like");
      }/*else if (class == botaoDislike){
        muda pra cor original
      }else if (botaoClose){
        muda pra cor original
      }*/
		}