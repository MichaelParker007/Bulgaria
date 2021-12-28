$(function(){
    $('.name').slick({
      arrows:true,
      dots:true,
      
    });


  $("#button").click(function(){
    $('#exampleModal1').arcticmodal();
  sendAjaxForm('result_form', 'ajax_form', 'action_ajax_form.php');
        return false; 
});


  function sendAjaxForm(result_form, ajax_form, url) {
    $.ajax({
        url:"action_ajax_form.php",
        type:"POST", 
        dataType:"html", 
        data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
        success: function(response) { //Данные отправлены успешно
            result = $.parseJSON(response);
            $('#result_form').html('Имя: '+result.name+' <br>Email: '+result.email+' <br>Телефон: '+result.phonenumber);
        },
        error: function(response) { // Данные не отправлены
            $('#result_form').html('Ошибка. Данные не отправлены.');
        }
    })
}
});