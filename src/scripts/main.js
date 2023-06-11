$(document).ready(function(){
    function showImages(){
        $('.image__tablet').slideDown(600);
        $('.image__computer').slideDown(1000);
        $('.image__statistics').slideDown(1000);
        $('.image__number').slideDown(1000);
    }

    showImages();

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
            $('.image__tablet').slideUp(400);
            $('.image__computer').slideUp(400);
            $('.image__statistics').slideUp(400);
            $('.image__number').slideUp(400);
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
        showImages();
        $('input').val('')
    })
})
