//Seleccionamos los campos de input y el boton
let nombre = $('#txtNombre');
let apellido = $('#txtApellido');
let email = $('#txtEmail');
let tel = $('#txtTel');
let direccion = $('#txtDireccion');
let btnEnviar = $('#btnEnviar');

//Funcion que recorre todos los imput que sean requeridos y cambia el estilo
function cambiarEstilo(){
    $('input[required]').each(function(){
        if($(this).val() == ''){
            $(this).css('border', '.15em solid red');
        } else {
            $(this).css('border', '.15em solid green');
        }
    });
}

//Eventos de cada imput para validar los estilos al momento de escribir
nombre.keyup(function(){
    cambiarEstilo();
});
apellido.keyup(function(){
    cambiarEstilo();
});
email.keyup(function(){
    if($(this).val() == ''){
        $(this).css('border', '.15em dotted red');
    } else {
        $(this).css('border', '.15em solid green');
    }
});
tel.keyup(function(){
    cambiarEstilo();
});
direccion.keyup(function(){
    cambiarEstilo();
});
function vaciar(){
    nombre.val('')
    apellido.val('')
    email.val('')
    tel.val('')
    direccion.val('')
}
//Evento del boton
btnEnviar.click(function (e) { 
    e.preventDefault();
    
});

//Enviar datos
btnEnviar.click(function(){
if($("#txtNombre").val() && $("#txtApellido").val() && $("#txtEmail").val() && $("#txtTel").val() && $("#txtDireccion").val()) {
    swal({
        title: "Datos enviados exitosamente!",
        text: "Todos los campos están llenos.",
        icon: "success", 
    });
    
    vaciar();
    
} else {
    swal({
        title: "Error al enviar los datos!",
        text: "Aún hay campos por llenar.",
        icon: "error",
    });
}
  
});

