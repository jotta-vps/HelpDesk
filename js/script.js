$(document).ready(function(){
  $(window).scroll(function(){
      if(this.scrollY > 20){
          $('.navbar').addClass("sticky");
      }else{
          $('.navbar').removeClass("sticky");
      }
      if(this.scrollY > 500){
          $('.scroll-up-btn').addClass("show");
      }else{
          $('.scroll-up-btn').removeClass("show");
      }
  });
   $('.scroll-up-btn').click(function(){
       $('html').animate({scrollTop: 0});
   });

   var typed = new Typed(".typing", {
       strings:["Gestores", "Designers", "Desenvolvedores", "ESTRATEGISTAS!"],
       typeSpeed:100,
       backSpeed:60,
       loop:true
   });
   var typed = new Typed(".typing-2", {
      strings:["Gestores", "Designers", "Desenvolvedores", "ESTRATEGISTAS!"],
      typeSpeed:100,
      backSpeed:60,
      loop:true
  });

  $('.menu-btn').click(function(){
      $('.navbar .menu').toggleClass("active");
      $('.menu-btn i').toggleClass("active");
  });
  $('.carousel').owlCarousel({
      margin:20,
      loop:true,
      autoplayTimeOut:2000,
      autoplayHoverPauser:true,
      responsive:{
          0:{
              items:1,
              nav:false
          },
          600:{
              items:2,
              nav:false
          },
          1000:{
              items:3,
              nav:false
          }
      }
  });
  const evento = document.getElementById('send')
  const enviarFormulario = () => {
       let nome = document.getElementById('nome').values;
       let sobrenome = document.getElementById('sobrenome').values;
       let telefone = document.getElementById('telefone').values;
       let mensagem = document.getElementById('mensagem').values;
       let numero = 5534998424526
       console.log (document.getElementById('nome'))
       
  var win= window.open(encodeURI(`https://wa.me/${numero}?text=Olá, me chamo ${nome}. E gostaria de saber sobre: ${mensagem}\n\n\n`), '_blank');
}
//evento.addEventListener('click', enviarFormulario)
});
function getData(form) {
  var formData = new FormData(form);

  // iterate through entries...
  // for (var pair of formData.entries()) {
  //  console.log(pair[0] + ": " + pair[1]);
  // }

  // ...or output as an object
  console.log(Object.fromEntries(formData));
  const values = Object.fromEntries(formData)
  const numero = 5534998424526
  var win= window.open(encodeURI(`https://wa.me/${numero}?text=Olá, me chamo ${values.nome}. E gostaria de saber sobre: ${values.mensagem}\n\n\n`), '_blank');
}
document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  getData(e.target);
});