$(document).ready(function(){
    $('.image__tablet').slideDown(600);
    $('.image__computer').slideDown(1000);
    $('.image__statistics').slideDown(1020);
    $('.image__number').slideDown(1020);

    $('#enviar').click(function(){
		$("form").submit(function () { return false; });
		var sEmail	= $(".form__input").val();
		var emailFilter=/^.+@.+\..{2,}$/;
		var illegalChars= /[\(\)\<\>\,\;\:\\\/\"\[\]]/

        const input = $('input');
        const mensagemErro = $('.mensagem-error');

		if(!(emailFilter.test(sEmail))||sEmail.match(illegalChars)){
			mensagemErro.css({display:'block'});
            input.addClass('form__input--is-erro');
		}else{
            mensagemErro.css({display:'none'});
            input.removeClass('form__input--is-erro');
			$('.container--page-main').slideUp(600);

            input.keyup(function(e){
                $('#email-digit').html(e.target.value)
            })

            $('.container--page-thanks').slideDown(800);
		}
	});
    
    $('#dismiss').click(function(){
        $('.container--page-thanks').slideUp(600);
        $('.container--page-main').slideDown(800);

        $('input').val('')
    })
})
