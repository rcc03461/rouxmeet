$( document ).ready(function() {
    console.log( "ready!" );
    
    $('.new_menber').on('click', function(){
        $('form').toggleClass('hide');
//        $('form').addClass('hide');
    });
});