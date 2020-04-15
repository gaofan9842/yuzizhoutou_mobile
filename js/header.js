
(function ($) {
    console.log($)
    function hasUserInfo() {
        var token = localStorage.getItem('token');
        return token ? true : false;
    }
    function changeUserTemplate(params) {
        if(hasUserInfo()){
            if($('#user_center').hasClass('d-none')) $('#user_center').removeClass('d-none')
            if($('#login_or_regist').hasClass('d-none')) $('#login_or_regist').addClass('d-none')
        }else{
            if($('#user_center').hasClass('d-none')) $('#user_center').addClass('d-none')
            if($('#login_or_regist').hasClass('d-none')) $('#login_or_regist').removeClass('d-none')
        }
    }
    $('docuemnt').ready(changeUserTemplate)
})(jQuery)