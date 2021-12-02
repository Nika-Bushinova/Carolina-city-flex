
/*------------------проверка на заполняемость поля email формы страницы e-gov.html----------------*/
function  thanksSubcsription(){
   if (document.getElementById("my__e-mail").value!="input email" && document.getElementById("my__e-mail").value!="" ){
       alert("Thank you for the subscription!")
   } else{
      alert("Please, input your e-mail!")
   }
}
/*------------------------------------------скрипт для кнопки Request an issues---------------------*/
function requestAnIssues() {
   var text=prompt('Please, ask your questions');
   var email=prompt('Please enter your e-mail');
   if(text && email){alert('Thank you for your request! We will reply you as soon as possible!')}
}



/*------------------------------------скрипт для меню бургер---------------------------------*/
$(document).ready(function() {
   $('.header__burger').click(function(event){
      $('.header__burger,.header__menu').toggleClass('_active');
   })
})

/*---------------------------------скрипт для кнопки Join volunteers--------------------*/

$(document).ready(function() {
   $('.join-volunteer, .cancel').click(function(event){
      $('.add__form').toggleClass('_active2');
   })
})
/*----------------------------------проверка на заполнение формы join volunteer--------------------*/
function thanksApplication() {
   if (document.getElementById("form__name").value!="Input name" && 
   document.getElementById("form__name").value!="" &&
   document.getElementById("form__surname").value!="Input surname" && 
   document.getElementById("form__surname").value!=""&&
   document.getElementById("form__age").value!="Input age" && 
   document.getElementById("form__age").value!=""&&
   document.getElementById("form__city").value!="Input city" && 
   document.getElementById("form__city").value!=""&&
   document.getElementById("form__email2").value!="Input email" && 
   document.getElementById("form__email2").value!=""&&
   document.getElementById("form__phone").value!="Input phone number" && 
   document.getElementById("form__phone").value!=""){ 
      alert("Thank you for the application!")}else{alert("Please, fill in all the fields!")}
}


/*-----------------------------------------скрипты для цифр на странице about.html--------------------------------*/

var currentNumber = $('#dynamic-number').text();
$({numberValue: currentNumber}).animate({numberValue: 50}, {
   duration: 3000,
   easing: 'linear',
   step: function() { 
       $('#dynamic-number').text(Math.ceil(this.numberValue)); 
   }
});

var currentNumber2 = $('#dynamic-number2').text();
$({numberValue: currentNumber2}).animate({numberValue: 32}, {
   duration: 3000,
   easing: 'linear',
   step: function() { 
       $('#dynamic-number2').text(Math.round(this.numberValue)/10); 
      } 
}
 );

var currentNumber3 = $('#dynamic-number3').text();
$({numberValue: currentNumber3}).animate({numberValue: 8}, {
   duration: 3000,
   easing: 'linear',
   step: function() { 
       $('#dynamic-number3').text(Math.ceil(this.numberValue)); 
   }
});

var currentNumber4 = $('#dynamic-number4').text();
$({numberValue: currentNumber4}).animate({numberValue: 150}, {
   duration: 3000,
   easing: 'linear',
   step: function() { 
       $('#dynamic-number4').text(Math.ceil(this.numberValue)); 
   }
});

