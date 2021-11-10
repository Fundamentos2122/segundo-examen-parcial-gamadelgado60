const attr_toggle = "data-toggle";
const attr_target = "data-target";
const attr_dismiss = "data-dismiss";
const class_modal = "modal";
const class_show = "show";
const tareaForm = document.forms["tareaForm"];
const tareaList = document.getElementById("tareas");
const tareasKey = tareas;

eventListener();

function eventListener()
{
    tareaForm.addEventListener("submit",addTarea)
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
    console.log(titulo)
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
    tareaList.appendChild(newTarea);
    //saveTweet(tweet);
}

document.addEventListener("DOMContentLoaded",function(){
    //Botones que abren el modal 
    let modal_open_buttons = document.querySelectorAll(`[${attr_toggle}='${class_modal}']`)

    modal_open_buttons.forEach(element => {
        element.addEventListener("click", OpenModal)
    });
     //Botones que cierran el modal 
    let modal_close_buttons = document.querySelectorAll(`[${attr_dismiss}]`)

    modal_close_buttons.forEach(element => {
        element.addEventListener("click", CloseModal)
    });
     
})

/**
 *Muestra un modal 
 * @param {PointerEvent} e 
 */
function OpenModal(e)
{
    //obtener el selector del elemento a mostrar 
    let modal_selector = e.target.getAttribute(attr_target);

    //Obtener el elemnto del DOM
    let modal = document.querySelector(modal_selector);

    //Agregar la clase para mostrar el modal
    modal.classList.add(class_show);
}

/**
 *Cerrar un modal 
 * @param {PointerEvent} e 
 */
 function CloseModal(e)
 {
     //obtener el selector del elemento a ocultar
     let modal_selector = e.target.getAttribute(attr_dismiss);
 
     //Obtener el elemnto del DOM
     let modal = document.querySelector(modal_selector);
 
     //Agregar la clase para mostrar el modal
     modal.classList.remove(class_show);
 }
