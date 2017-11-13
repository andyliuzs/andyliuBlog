$(document).ready(function () {
    $('#lr_btn_div').fadeIn();
    $('#l_form_div').hide();
    $('#r_form_div').hide();
    $('#btn_login').on('click', function () {
        $('#lr_btn_div').hide();
        $('#l_form_div').fadeIn(800,function () {

        });
        
    });
    $('#btn_reg').on('click', function () {
        $('#lr_btn_div').hide();
        $('#r_form_div').fadeIn(800,function () {

        });
    });

    $('#btn_login_back').on('click', function () {
        $('#l_form_div').fadeOut(500,function () {
            $('#lr_btn_div').fadeIn(200);
        });
    });

    $('#btn_reg_back').on('click', function () {
        $('#r_form_div').fadeOut(500,function () {
            $('#lr_btn_div').fadeIn(200);
        });
    });


});