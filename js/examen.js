const attr_toggle = "data-toggle";
const attr_target = "data-target";
const attr_dismiss = "data-dismiss";
const class_modal = "modal";
const class_show = "show";
const class_compl = "compl"
const tareaForm = document.forms["tareaForm"];
const tareaList = document.getElementById("tareas");
const tareasKey = tareas;
const Test = "data-esta"


eventListener();

function eventListener()
{
    tareaForm.addEventListener("submit",addTarea)
    document.addEventListener("DOMContentLoaded", showtareas)
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
    newTarea.id = "estadoTest";
    newTarea.innerHTML = 
           `<div class="col-9">
                <h6>${titulo}</6>
                </div>
                <div class="col-3"style="display: flex;justify-content: flex-end;">
                    ${fecha}
                </div>
                <div class="col-9">
                    ${Descripcion}
                </div>
                <div class="col-12"style="display: flex;justify-content: flex-end;">
                    <input type="checkbox" id="estado" data-esta="#estadoTest">completada
                </div>`
    tareaList.appendChild(newTarea);
    saveTarea(titulo,fecha,Descripcion);
}

function saveTarea(titulo,fecha,Descripcion)
{
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    
    if (dd < 10) {
      dd = '0' + dd;
    }
    
    if (mm < 10) {
      mm = '0' + mm;
    }
    
    today = mm + '/' + dd + '/' + yyyy;
    console.log(today)
    let tareas = getTareas();
    var objeto={'idaux':today,'titulo':titulo, 'fecha':fecha, 'descripcion':Descripcion , 'estado': 'false'}
    //se anade a la lista de tweets
    tareas.push(objeto);
    //guardar en LocalStorage
    localStorage.setItem(tareasKey, JSON.stringify(tareas));
}

function getTareas()
{
    //obtenemos los datos de localStorage
    let tareas = localStorage.getItem(tareasKey);

    //verificamos los datos de local storage
    if(tareas == null)
    {
        tareas = [];
    }
    else
    {
        tareas = JSON.parse(tareas);
    }
    return tareas;
}

function showtareas()
{
    let tareas = getTareas();
    var i=0;
    tareas.forEach(element => {

        const newTarea = document.createElement("div");
        //crear el nuevo elemento
        if(element.estado=='false'){
        newTarea.className = "row border-top";
        newTarea.id = "estadoTest"+i;
        newTarea.innerHTML = 
           `<div class="col-9">
                    <h6>${element.titulo}</h6>
                </div>
                <div class="col-3"style="display: flex;justify-content: flex-end;">
                    ${element.fecha}
                </div>
                <div class="col-9">
                    ${element.descripcion}
                </div>
                <div class="col-12"style="display: flex;justify-content: flex-end;">
                    <input type="checkbox" id="estado" data-esta="#estadoTest${i}">completada
                </div>`
                i++;
        }else{

        }
        tareaList.appendChild(newTarea);
    });
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
     //checkbox para cambiar estado de completado
     let estado_cambia = document.querySelectorAll(`[${Test}]`)

     estado_cambia.forEach(element => {
         element.addEventListener("click", cambiacolor)
     });
})

function cambiacolor(e)
{
    let estado_selector = e.target.getAttribute(Test);
    console.log(estado_selector);
     //Obtener el elemnto del DOM
     let estado = document.querySelector(estado_selector);
    console.log("hola",estado);
     //Agregar la clase para mostrar el modal
     estado.classList.toggle(class_compl);
}

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
     console.log(modal_selector);
     //Obtener el elemnto del DOM
     let modal = document.querySelector(modal_selector);
 
     //Agregar la clase para mostrar el modal
     modal.classList.remove(class_show);
 }
