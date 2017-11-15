$(document).ready(function () {
    $('#l_form_div').hide();
    $('#r_form_div').hide();
    $('#btn_login').on('click', function () {
        $('#lr_btn_div').hide();
        $('#l_form_div').fadeIn(800, function () {

        });

    });
    $('#btn_reg').on('click', function () {
        $('#lr_btn_div').hide();
        $('#r_form_div').fadeIn(800, function () {

        });
    });

    $('#btn_login_back').on('click', function () {
        $('#l_form_div').fadeOut(500, function () {
            $('#lr_btn_div').fadeIn(200);
        });
    });

    $('#btn_reg_back').on('click', function () {
        $('#r_form_div').fadeOut(500, function () {
            $('#lr_btn_div').fadeIn(200);
        });
    });


    /**
     * dologin
     */
    $('#inner_btn_login').on('click', function () {

        $('#le_username').text('')
        $('#le_password').text('')
        let username = $('#loginusername').val();
        let password = $('#loginpassword').val();
        if (stringIsEmpty(username)) {
            $('#le_username').text("账号不能为空！")
            return;
        }
        if (stringIsEmpty(password)) {
            $('#le_password').text("密码不能为空！")
            return;
        }
        let params = {
            username: username,
            password: password
        }

        $.ajax(
            {
                data: params,
                url: _HTTP + _SERVER_URL + _PORT + "/dologin",
                dataType: 'json',
                type: 'post',
                async: true,
                cache: false,
                timeout: _HTTP_TIMEOUT,
                beforeSend:function () {
                    showMaskLoading();
                },
                success: function (data) {
                    setTimeout(function () {
                        hideMaskLoading()
                        console.log("result=" + data.result)
                        if (data.result) {
                            ToastSuccess('登录成功')
                        } else {
                            ToastDanger(data.msg)
                        }
                    },1500)


                },
                error: function (data) {
                    setTimeout(function () {
                        hideMaskLoading()
                        ToastDanger('登录失败')
                    },1500)

                }
            }
        )

    });

    /***
     * doregister
     */
    $('#inner_btn_reg').on('click', function () {
        let username = $('#regusername').val();
        let phone = $('#regphone').val();
        let email = $('#regemail').val();
        let password1 = $('#regpassword1').val();
        let password2 = $('#regpassword2').val();

        let params = {
            username: username,
            email: email,
            phone: phone,
            password1: password1,
            password2: password2,
        }

        $.ajax(
            {
                data: params,
                url: _HTTP + _SERVER_URL + _PORT + "/doregister",
                dataType: 'json',
                type: 'post',
                async: true,
                cache: false,
                timeout: _HTTP_TIMEOUT,
                beforeSend:function () {
                  showMaskLoading();
                },
                success: function (data) {
                    setTimeout(function () {
                        hideMaskLoading()
                        console.log("result=" + data.result)
                        if (data.result) {
                            ToastSuccess("注册成功")
                        } else {
                            ToastDanger(data.msg)
                        }
                    },1500)

                },
                error: function (data) {
                    setTimeout(function () {
                        hideMaskLoading()
                        ToastDanger("注册失败！")
                    },1500)
                }
            }
        )
    });


});

