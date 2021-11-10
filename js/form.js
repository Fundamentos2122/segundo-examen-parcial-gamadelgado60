const tareaForm = document.forms["tareaForm"];
const tareaList = document.getElementById("tareas");
const tareasKey = tareas;


eventListener();

function eventListener()
{
    //agregar twets
    tareaForm.addEventListener("submit",addTarea)

    //La pagina termine de cargar
   // document.addEventListener("DOMContentLoaded", showTareas)
}


function addTarea(e){
    //Detener el envio del formulario
    e.preventDefault();
    
    //obtener el texto del tweet
    const titulo = tareaForm["titulo"].value;
    const Descripcion = tareaForm["Descripcion"].value;
    const fecha = tareaForm["fecha"].value;
    //crear el nuevo elemento
    const newTarea = document.createElement("div");

    //anadir estilos y contenido
    newTarea.className = "row border-top";
    newTarea.innerHTML = 
           `<div class="col-9">
                    ${titulo}
                </div>
                <div class="col-3"style="display: flex;justify-content: flex-end;">
                    ${fecha}
                </div>
                <div class="col-9">
                    ${Descripcion}
                </div>
                <div class="col-12"style="display: flex;justify-content: flex-end;">
                    <input type="checkbox">completada
                </div>`
    tareaList.appendChild(tareaList);
    //saveTweet(tweet);
}