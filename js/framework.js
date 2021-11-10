const attr_toggle = "data-toggle";
const attr_target = "data-target";
const attr_dismiss = "data-dismiss";
const class_modal = "modal";
const dropdown_class = "dropdown";
const dropdown_toggle = "dropdown-toggle";
const dropdown_menu_class = "dropdown-menu";
const navbar_toggle = "navbar-toggle";
const menu_collapse_class = "navbar-collapse";
const class_show = "show";

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

     //Dropdown del submenu
     let dropdown_buttons = document.querySelectorAll(`.${dropdown_class} > .${dropdown_toggle}`)

     dropdown_buttons.forEach(element => {
         element.addEventListener("click", ToggleDropdown)
     });

    //Collapse del menu
    let collapse_menu_buttons = document.querySelectorAll(`.${navbar_toggle}`);

    collapse_menu_buttons.forEach(element => {
        element.addEventListener("click", ToggleMenu)
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

 /**
  * abrir y cerra el submenu
  * @param {Pointer event} e 
  */
 function ToggleDropdown(e)
 {
    e.preventDefault();

    let submenu = e.target.parentNode.querySelector(`.${dropdown_menu_class}`);

    submenu.classList.toggle(class_show);
 }

 /**
  * abrir y cerra el menu
  * @param {Pointer event} e 
  */
  function ToggleMenu(e)
  {
     e.preventDefault();
 
     let menu = e.target.parentNode.querySelector(`.${menu_collapse_class}`);
 
     menu.classList.toggle(class_show);
  }