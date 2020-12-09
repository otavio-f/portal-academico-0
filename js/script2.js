//*************BOTÃO LIKE

// Muda o estilo de um botao sem destaque
function highlightLike(element){
  if(!element.classList.contains("botaoLike-clicado")){//NAO pode ser um botao clicado
    element.classList.add("botaoLike-up"); //transforma em um botao destacado
    //element.classList.remove("botao-normal");
    console.log("Mouse Entrou");
  }
}

// Muda o estilo de um botao com destaque
function tonedownLike(element){
  if(!element.classList.contains("botaoLike-clicado")){//NAO pode ser um botao clicado
    element.classList.remove("botaoLike-up"); //transforma em um botao normal
    //element.classList.add("botao-normal");
    console.log("Mouse Saiu");
  }
}

// Muda o estilo de um botao permanentemente
function clickswitchLike(element){
  if(!element.classList.contains("botaoLike-clicado")){//NAO eh um botao clicado?
    //element.classList.remove("botao-normal"); //entao transforme em um botao clicado
    element.classList.remove("botaoLike-up");
    element.classList.add("botaoLike-clicado");
    disableOpposite(element);
    console.log("Clicado");
  }
  else { //É um botão clicado?
    element.classList.remove("botaoLike-clicado"); //entao transforma em um botao normal
    //element.classList.add("botao-normal");
    console.log("Des-clicado");
  }
}

//************BOTÃO DISLIKE
// Muda o estilo de um botao sem destaque
function highlightDislike(element){
  if(!element.classList.contains("botaoDislike-clicado")){//NAO pode ser um botao clicado
    element.classList.add("botaoDislike-up"); //transforma em um botao destacado
    //element.classList.remove("botao-normal");
    console.log("Mouse Entrou");
  }
}

// Muda o estilo de um botao com destaque
function tonedownDislike(element){
  if(!element.classList.contains("botaoDislike-clicado")){//NAO pode ser um botao clicado
    element.classList.remove("botaoDislike-up"); //transforma em um botao normal
    //element.classList.add("botao-normal");
    console.log("Mouse Saiu");
  }
}

// Muda o estilo de um botao permanentemente
function clickswitchDislike(element){
  if(!element.classList.contains("botaoDislike-clicado")){//NAO eh um botao clicado?
    //element.classList.remove("botao-normal"); //entao transforme em um botao clicado
    element.classList.remove("botaoDislike-up");
    element.classList.add("botaoDislike-clicado");
    disableOpposite(element);
    console.log("Clicado");
  }
  else { //É um botão clicado?
    element.classList.remove("botaoDislike-clicado"); //entao transforma em um botao normal
    //element.classList.add("botao-normal");
    console.log("Des-clicado");
  }
}

//*******BOTÃO CLOSE
// Muda o estilo de um botao sem destaque
function highlightClose(element){
  if(!element.classList.contains("botaoClose-clicado")){//NAO pode ser um botao clicado
    element.classList.add("botaoClose-up"); //transforma em um botao destacado
    //element.classList.remove("botao-normal");
    console.log("Mouse Entrou");
  }
}

// Muda o estilo de um botao com destaque
function tonedownClose(element){
  if(!element.classList.contains("botaoClose-clicado")){//NAO pode ser um botao clicado
    element.classList.remove("botaoClose-up"); //transforma em um botao normal
    //element.classList.add("botao-normal");
    console.log("Mouse Saiu");
  }
}

// Muda o estilo de um botao permanentemente
function clickswitchClose(element){
  if(!element.classList.contains("botaoClose-clicado")){//NAO eh um botao clicado?
    //element.classList.remove("botao-normal"); //entao transforme em um botao clicado
    element.classList.remove("botaoClose-up");
    element.classList.add("botaoClose-clicado");
    console.log("Clicado");
  }
  else { //É um botão clicado?
    element.classList.remove("botaoClose-clicado"); //entao transforma em um botao normal
    //element.classList.add("botao-normal");
    console.log("Des-clicado");
  }
}

// Esconde a postagem
function clickvanishClose(element){
  var parent=element;
  while(parent.parentElement){ //Enquanto estiver dentro de outro elemento
    parent = parent.parentElement;//pegue o elemento de fora
    console.log(parent);
    if(parent.classList.contains("postagem")){ //se o elemento for uma postagem
      parent.style.display="none"; //esconda e termine
      break;
    }
  }
  console.log("Nao esta em uma postagem!");
}

// Esconde o botao like/dislike oposto
function disableOpposite(element){
  var parentDiv = element.parentElement.parentElement;
  if(parentDiv.classList.contains("botaoLike")){//esse eh um botao de like
    //console.log("Parent:",parentDiv);
    var elems = parentDiv.parentElement.children;//vai pra a postagem
    //console.log("Siblings: ", elems);
    for(var i in elems){
      var elem = elems[i];
      //console.log("Elem:", elem);
      if(elem.classList.contains("botaoDislike")){//alvo: botao de dislike
        elem.firstElementChild.firstElementChild.classList.remove("botaoDislike-clicado");
        break;
      }
    }
  }
  else if(parentDiv.classList.contains("botaoDislike")){//esse eh um botao de dislike
    console.log("Parent:",parentDiv);
    var elems = parentDiv.parentElement.children;//vai pra a postagem
    console.log("Siblings: ", elems);
    for(var i in elems){
      var elem = elems[i];
      console.log("Elem:", elem);
      if(elem.classList.contains("botaoLike")){//alvo: botao de like
        elem.firstElementChild.firstElementChild.classList.remove("botaoLike-clicado");
        break;
      }
    }
  }
}

// Verifica o estado da form e colore os elementos
function formcheck(element){
  var username = element.elements["username"];
  var pass = element.elements["pass"];
  var login = element.elements["login"];

  if(username.value!="" && pass.value!=""){//os dois campos nao estao vazios
    //alert("Login para o Portal Acadêmico efetuado com sucesso!");
    fetch('http://demo9431901.mockable.io/login', {
      method: 'post'
    }).then(responseStream => responseStream.json()).then(data => {
      console.log("Mensagem de Login:", data.msg);
      alert(data.msg);
      username.value = "";
      pass.value = "";
      window.location.reload();//erro estranho, se retornar true o fetch e interrompido, resulta em catch
    }).catch(error => {
      console.log(error);
      alert("Ocorreu um erro de rede.");
      username.value = "";
      pass.value = "";
      window.location.reload();
    });
    return false;//previne a interrupcao do fetch por causa do recarregamento da pagina
  }

  if(username.value=="")
    username.style.borderColor="red";
  if(pass.value=="")
    pass.style.borderColor="red";
    
  login.style.borderColor="red";
  return false;
}

// Restaura a cor dos elementos da form para o padrao
function formrestore(element){
  var username = element.elements["username"];
  var pass = element.elements["pass"];
  var login = element.elements["login"];

  username.style.borderColor="";
  pass.style.borderColor="";
  login.style.borderColor="";

  console.log("Estilo na form Restaurado!");
}

function getNews(elem, index){
  fetch('http://demo9431901.mockable.io/news/'+index, {
      method: 'get',
    }).then(responseStream => responseStream.json()).then(data => {
      console.log("Noticia "+index+":", data.msg);
      elem.textContent = data.msg;
    }).catch(err => {
      console.log(err);
    });
}

function infoRodape(){
  rodape = document.getElementById("rodape");
  fetch('http://demo9431901.mockable.io/info', {
      method: 'post',
      body: JSON.stringify({"num": 1})
    }).then(responseStream => responseStream.json()).then(data => {
      console.log("Autores: ", data.autores);
      console.log("Ano: ", data.ano);
      rodape.textContent += data.ano;
    }).catch(err => {
      console.log(err);
    });
}

//Quando a pagina carregar...
window.addEventListener('load', function(){
  infoRodape();
  getNews(document.getElementById("news1"), 1);
  getNews(document.getElementById("news2"), 2);
});
