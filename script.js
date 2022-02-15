//geoTest(preguntas,opciones,respuesta,imagen)
let i = 0;
const yei = "https://github.com/HectorBlisS/AnimatedCards/blob/master/yei.mp3?raw=true";
const geoTest = (question,options,answer,url) => {
  // ******** Se crea contenido (form), titulo del contenido, y la imagen ********
  //1- Se crea nodo
  const h2 = document.createElement("h2");
  const form = document.createElement("form");
  const audio1 = document.createElement('audio');
    //2- Se configura el nodo
  h2.innerText = question;
  audio1.src = yei
  // Se envia la información del form correspondiente al día en curso
  form.id = Date.now();
  //3- Se asigna contenido al nodo
  form.appendChild(h2);
  document.body.appendChild(form);
  if(url){
    //1- Se crea nodo
    const img = document.createElement("img");
    //2- Se configura el nodo
    img.src = url;
    //3- Se asigna contenido al nodo
    form.appendChild(img);
  }
  // ******** Se define la distribución de las opciones ********
  options.forEach((option)=>{
    //1- Se crea el nodo
    const label = document.createElement("label");
    const input = document.createElement("input");
    //2- Se configura
    label.innerHTML=option;
    input.name = question; // Esta relacionado a la pregunta del formulario(form) que se enviará (h2)
    input.value = option;
    input.type = "radio";
    // Agregando distribución de las opciones
    label.style="display:block;"
    //3- Se asigna contenido al nodo
    label.prepend(input);
    form.appendChild(label);
  })
  // ******** Se define el boton de enviar respeusta ********
  //1- Se crea nodo
  const btn = document.createElement("button");
  //2- Se configrua el nodo
  btn.innerText = "Enviar";
  btn.type="submint";
  //3- Se asigna contenido al nodo
  form.appendChild(btn);
  // ******** Se define la condición de la respeusta enviada ********
  form.onsubmit = (event) =>{
    event.preventDefault();
    const res = event.target[question].value;
    if(res === answer){
      //1- Se crea nodo
      const msg = document.getElementById('message');
      const btn = document.createElement('button');
      //2- Se configrua nodo
      msg.innerText = "¡Correcto!";
      btn.innerText = "Siguiente";
      btn.type="button";
      //3- Se asigna contendio al nodo
      msg.appendChild(btn);
      btn.onclick = () =>{
        form.remove();
        msg.innerHTML= "";
        if(i === 0){
          geoTest("¿Qué figura geométrica es?",["Círculo","Cuadrado","Triángulo"],"Círculo","https://solucionesproblemas.com/wp-content/uploads/2020/05/circulo.png")
        } else if (i === 1){
          geoTest("¿Qué figura geométrica es?",["Triángulo","Cuadrado","Círculo"],"Cuadrado","https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/04-L_Cuadrado.svg/1200px-04-L_Cuadrado.svg.png")
        }else{
          audio1.play();
          msg.innerText = "Felicidades, has terminado";
        }
          i++;
      }
    } else{
      const msg = document.getElementById('message');
      msg.innerText = "Incorrecto, Intentalo de nuevo.";
    }
  }
}
geoTest("¿Qué figura geométrica es?",["Círculo","Cuadrado","Triángulo"],"Triángulo","https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/03-L_Tri%C3%A1ngulo.svg/1200px-03-L_Tri%C3%A1ngulo.svg.png")