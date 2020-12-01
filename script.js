$(window).scroll(function() {
    window.scrollY > 50 ? $('.navbar').addClass('scrolled') : $('.navbar').removeClass('scrolled')

    $('.card').each((i, el) => {
        let position = $(el).position().top - 700
        
        if($(window).scrollTop() >= position) {
            setTimeout(() => {
                // i > 2 ? i = i - 2 : ''
                $(el).css('transform', 'none').css('opacity', '1')
                return false
            }, i * 100)
        }
    })
})
$('.contato:not(:has(a))').on('click', function(){
    let rede = $($(this).children()[1]).text().toLowerCase()

    $('body').append(`<input id="social" value="${$($(this).children().last()).text()}" />`)
    
    $('#social').select()
    document.execCommand('copy')
    
    $('#social').remove()

    Swal.fire({
        icon: 'success',
        title: 'Pronto!',
        text: `Meu ${rede} foi copiado pra sua área de transferência`,

        showConfirmButton: true,
        showCloseButton: true,
        confirmButtonText: 'Fechar',

        timer: 3000,
        timerProgressBar: true
   });
})

$('.menuIcon').on('click', function(){
    $('.navbar ul').toggleClass('navOpen')
})
$('a').on('click', function(e){
  e.preventDefault();


  $('html, body').animate({
    scrollTop: $(this.hash).offset().top
  }, 1000, function(){
    window.location.hash = this.hash;
  });

})