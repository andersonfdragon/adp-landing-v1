//MOVIMIENTO SUAVIZADO ANCLAS
$(function(){

    $('a[href*=#]').click(function() {

    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {

            var $target = $(this.hash);

            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');

            if ($target.length) {

                var targetOffset = $target.offset().top;

                $('html,body').animate({scrollTop: targetOffset}, 700);

                return false;

            }

        }

    });

});

//FORMULARIO DE CONTACTO - ENVIAR DESDE FORMULARIO CONTACTO PC -01
$("#contactForm").validator().on("submit", function (event) {
    var valido_form = 0;
    var valido_select_01 = 0;
    var valido_check = 0;

    if (event.isDefaultPrevented("Complete este campo")) {
        // handle the invalid form...
        submitMSG(false, "Complete los campos que faltan.");
    } else {
        event.preventDefault();
        valido_form = 1;
    }

    //Opcion de visita
    if (!$('#visita').val() ){
        submitMSG_visita(false, "Seleccione una opción.");
        //console.log(valido_select_01);
    }
    else {
        event.preventDefault();
        submitMSG_visita(true, "");
        valido_select_01 = 1;
        //console.log(valido_select_01);
    }

    if ($("input[type='checkbox']").is(':checked') === false){
        submitMSG_condiciones(false, "Aún no acepta terminos y condiciones.");
    }

    else {
        event.preventDefault();
        submitMSG_condiciones(true, "");
        valido_check = 1;
    }

    if ((valido_form)&&(valido_select_01)&&(valido_check) === 1) {
        submitForm();
        submitMSG(true, "");
    }

    else {
        event.preventDefault();
        submitMSG(false, "Complete los campos que faltan");
    }
});

function submitForm(){
    // Initiate Variables With Form Content
    var first_name = $("#first_name").val();
    var telephone = $("#telephone").val();
    var email = $("#email").val();
    var visita = ($('select[id=visita]').val());

    $.ajax({
        type: "POST",
        url: "php/process_landing.php",
        data: "first_name=" + first_name + "&telephone=" + telephone + "&email=" + email + "&visita=" + visita,
        success : function(text){
            if (text == "success"){
                formSuccess();
                window.location.href = "agradecimiento_landing.html";
            } else {
                submitMSG(false,text);
            }
        }
    });
}

function formSuccess(){
    $("#contactForm")[0].reset();
    submitMSG(true, "Gracias por dejar sus datos, pronto estaremos en contacto.")
}

function submitMSG(valid, msg){
    if(valid){
        var msgClasses = "h4 text-center text-warning";
    } else {
        var msgClasses = "h4 text-center text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}

function submitMSG_condiciones(valid, msg){
    if(valid){
        var msgClasses = "h4 text-center text-warning";
    } else {
        var msgClasses = "h4 text-center text-danger";
    }
    $("#msgSubmit_condiciones").removeClass().addClass(msgClasses).text(msg);
}

function submitMSG_visita(valid, msg){
    if(valid){
        var msgClasses = "h4 text-center text-warning";
    } else {
        var msgClasses = "h4 text-center text-danger";
    }
    $("#msgSubmit_visita").removeClass().addClass(msgClasses).text(msg);
}

//FORMULARIO DE CONTACTO - ENVIAR DESDE FORMULARIO CONTACTO XS POPUP - 02
$("#contactForm_02").validator().on("submit", function (event) {
    var valido_form_modal = 0;
    var valido_check_modal = 0;

    if (event.isDefaultPrevented("Complete este campo")) {
        // handle the invalid form...
        submitMSG_02(false, "Complete los campos que faltan.");
    } else {
        event.preventDefault();
        valido_form_modal = 1;
    }

    if ($("input[type='checkbox']").is(':checked') === false){
        submitMSG_condiciones_02(false, "Aún no acepta terminos y condiciones.");
    }

    else {
        event.preventDefault();
        submitMSG_condiciones_02(true, "");
        valido_check_modal = 1;
    }

    if ((valido_form_modal)&&(valido_check_modal) === 1) {
        submitForm_02();
        submitMSG_02(true, "");
    }

    else {
        event.preventDefault();
        submitMSG_02(false, "Complete los campos que faltan");
    }
});

function submitForm_02(){
    // Initiate Variables With Form Content
    var first_name_02 = $("#first_name_02").val();
    var telephone_02 = $("#telephone_02").val();
    var email_02 = $("#email_02").val();

    $.ajax({
        type: "POST",
        url: "php/process_landing_modal.php",
        data: "first_name_02=" + first_name_02 + "&telephone_02=" + telephone_02 + "&email_02=" + email_02,
        success : function(text){
            if (text == "success"){
                formSuccess_02();
                window.location.href = "agradecimiento_descarga.html";
            } else {
                submitMSG_02(false,text);
            }
        }
    });
}

function formSuccess_02(){
    $("#contactForm_02")[0].reset();
    submitMSG_02(true, "Gracias por dejar sus datos, pronto estaremos en contacto.")
}

function submitMSG_02(valid, msg){
    if(valid){
        var msgClasses = "h4 text-center text-warning";
    } else {
        var msgClasses = "h4 text-center text-danger";
    }
    $("#msgSubmit_02").removeClass().addClass(msgClasses).text(msg);
}

function submitMSG_condiciones_02(valid, msg){
    if(valid){
        var msgClasses = "h4 text-center text-warning";
    } else {
        var msgClasses = "h4 text-center text-danger";
    }
    $("#msgSubmit_condiciones_02").removeClass().addClass(msgClasses).text(msg);
}



//FORMULARIO DE CONTACTO - ENVIAR DESDE FORMULARIO CONTACTO XS - 03
$("#contactForm_03").validator().on("submit", function (event) {
    var valido_form_pc = 0;
    var valido_select_01_pc = 0;
    var valido_check_pc = 0;

    if (event.isDefaultPrevented("Complete este campo")) {
        // handle the invalid form...
        submitMSG_03(false, "Complete los campos que faltan.");
    } else {
        event.preventDefault();
        valido_form_pc = 1;
    }

    //Opcion de visita
    if (!$('#visita_03').val() ){
        submitMSG_visita_03(false, "Seleccione una opción.");
        //console.log(valido_select_01);
    }
    else {
        event.preventDefault();
        submitMSG_visita_03(true, "");
        valido_select_01_pc = 1;
        //console.log(valido_select_01);
    }

    if ($("input[type='checkbox']").is(':checked') === false){
        submitMSG_condiciones_03(false, "Aún no acepta terminos y condiciones.");
    }

    else {
        event.preventDefault();
        submitMSG_condiciones_03(true, "");
        valido_check_pc = 1;
    }

    if ((valido_form_pc)&&(valido_select_01_pc)&&(valido_check_pc) === 1) {
        submitForm_03();
        submitMSG_03(true, "");
    }

    else {
        event.preventDefault();
        submitMSG_03(false, "Complete los campos que faltan");
    }
});

function submitForm_03(){
    // Initiate Variables With Form Content
    var first_name_03 = $("#first_name_03").val();
    var telephone_03 = $("#telephone_03").val();
    var email_03 = $("#email_03").val();
    var visita_03 = ($('select[id=visita_03]').val());

    $.ajax({
        type: "POST",
        url: "php/process_landing_xs.php",
        data: "first_name_03=" + first_name_03 + "&telephone_03=" + telephone_03 + "&email_03=" + email_03 + "&visita_03=" + visita_03,
        success : function(text){
            if (text == "success"){
                formSuccess_03();
                window.location.href = "agradecimiento_landing.html";
            } else {
                submitMSG_03(false,text);
            }
        }
    });
}

function formSuccess_03(){
    $("#contactForm_03")[0].reset();
    submitMSG_03(true, "Gracias por dejar sus datos, pronto estaremos en contacto.")
}

function submitMSG_03(valid, msg){
    if(valid){
        var msgClasses = "h4 text-center text-warning";
    } else {
        var msgClasses = "h4 text-center text-danger";
    }
    $("#msgSubmit_03").removeClass().addClass(msgClasses).text(msg);
}

function submitMSG_condiciones_03(valid, msg){
    if(valid){
        var msgClasses = "h4 text-center text-warning";
    } else {
        var msgClasses = "h4 text-center text-danger";
    }
    $("#msgSubmit_condiciones_03").removeClass().addClass(msgClasses).text(msg);
}

function submitMSG_visita_03(valid, msg){
    if(valid){
        var msgClasses = "h4 text-center text-warning";
    } else {
        var msgClasses = "h4 text-center text-danger";
    }
    $("#msgSubmit_visita_03").removeClass().addClass(msgClasses).text(msg);
}
