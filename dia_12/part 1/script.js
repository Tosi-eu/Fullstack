<<<<<<< HEAD
$(document).ready(function () {
  $("#button").hide();
  $(".card").click(function () {
    $(this).animate(
      {
        top: "-410px"
      },
      {
        duration: "slow",
        start: function () {
          // Esconde a div .heart no início da animação
          $(".heart").fadeOut(0.3);
          $("#button").show();
        },
        complete: function () {
          // Após a animação de subida, define a animação para descer e aumentar de tamanho
          $(this).animate(
            {
              width: "750px",
              height: "800px",
              marginLeft: "-205px",
              marginTop: "-380px"
            },
            {
              duration: "slow",
              complete: function () {
                let cardWidth = $(this).width() - 24;
                let cardHeight = $(this).height() - 24;

                $(".card:before").css({
                  width: cardWidth + "px",
                  height: cardHeight + "px"
                });

                $(this).css("z-index", "12");
                $(".card:before").css("z-index", "11");
              }
            }
          );
          var audio = document.getElementById("audio")
          audio.play();   
        }
      }
    );
  });

  $(".container")
    .mouseenter(function () {
      $(".card").stop().animate(
        {
          top: "-90px"
        },
        "slow"
      );
    })
    .mouseleave(function () {
      $(".card").stop().animate(
        {
          top: 0
        },
        "slow"
      );
    });
});

$(document).ready(function () {
  $(".card").click(function () {
    $(this).addClass("zoomed");

    $(".card.zoomed .text").on("transitionend", function () {
      $(this).text("Mor, gostaria de te dizer isso pessoalmente, de estar do seu ladinho te abraçando e te beijando, mas enquanto não podemos vou fazer assim hihi. Nem acredito que já se passaram 9 meses(1 gestação já kk, até pq deve ser um parto ter que aguentar trovoadas) e a gente continua da mesma forma: felizes um com o outro. Agora nos conhecemos muito mais, vivemos várias e várias experiências(poucas perto das que virão) e só posso te agradecer, MUITO MUITO por cada dia você me ensinar o que é amar, a como é bom amar e ser amado(corrigi essa frase umas duas vezes pq digitei mamado sem querer, juro), além da forma que você me trata, que me deixa bobinho sempre, eu amo seu jeitinho, mor, então posso dizer com toda a certeza: Como é ruim estar sem você pertinho, moor :(. Além disso, agradeço muito por ter vc, a melhor mulher do meu lado, que tem de tudo que é qualidade um pouco(no mesmo passo que vc é difícil hihi), mas de longe o que mais me 'brilha os olhos' é ver que você é feliz, sempre sorridente apesar dos pesares. Acredito que esse tempo que ficamos longe foi bom e ruim, bom por que nos mostra que apesar de estarmos distante um do outro nesse tempo, nada muda, só aumenta a vontade de nos ver e nos abraçarmos até ficar com a costela quebrada igual a do Yuri Alberto, mas tbm é ruim justamente por não ter a felicidade dos meus dias aqui comigo, afinal, como que faço brigadeiro arenoso assim, mor? Quero desejar pra nós toda felicidade do mundo, que nosso amor só aumente, com muito carinho, companheirismo, sinceridade e piadas dignas de cancelamentos eternos como sempre fomos/fizemos um com o outro <3, e algo que quero que você saiba é que independente da distância, do momento, estou aqui para TUDO uqe você precisar, pq amo saber de qualquer coisa que vc fale, por mais simples que seja, todoss os momentos com você são únicos. Nesse tempo aqui sozinho, pensei nisso, que é bem simples, mas acho que você já deve ter percebido que ali embaixo tem um botão, né? Clica nele que tem mais coisa hihi. Amo mutio você e amo tudo que vivemos, que estamos vivendo e vamos viver ainda esse ano e nos próximos, o sentimento de ser amado por alguém tão especial pra mim me faz ser o homem mais feliz de todos, e isso me faz tentar ser o meu melhor para você, sempre sempre mor, em todos os momentos, te amo MUITO, sou inteiramente seu e vai continuar assim <3, aliás, eu ser inteiramente seu não tem nada a ver com bueiro hihi <3.\n. Com mtmt amor,\nGui"
      );
    });
  });

  $(".container")
    .mouseenter(function () {
      $(".card").stop().animate(
        {
          top: "-90px"
        },
        "slow"
      );
    })
    .mouseleave(function () {
      $(".card").stop().animate(
        {
          top: 0
        },
        "slow"
      );
    });
});

let button = document.getElementById("button");

button.addEventListener('mousemove', (e) => {
    x = e.offsetX;
    y = e.offsetY;
    button.style.setProperty('--mouse-x', x + "px");
    button.style.setProperty('--mouse-y', y + "px");
});
=======
$(document).ready(function () {
  $("#button").hide();
  $(".card").click(function () {
    $(this).animate(
      {
        top: "-410px"
      },
      {
        duration: "slow",
        start: function () {
          // Esconde a div .heart no início da animação
          $(".heart").fadeOut(0.3);
          $("#button").show();
        },
        complete: function () {
          // Após a animação de subida, define a animação para descer e aumentar de tamanho
          $(this).animate(
            {
              width: "750px",
              height: "800px",
              marginLeft: "-205px",
              marginTop: "-380px"
            },
            {
              duration: "slow",
              complete: function () {
                let cardWidth = $(this).width() - 24;
                let cardHeight = $(this).height() - 24;

                $(".card:before").css({
                  width: cardWidth + "px",
                  height: cardHeight + "px"
                });

                $(this).css("z-index", "12");
                $(".card:before").css("z-index", "11");
              }
            }
          );
          var audio = document.getElementById("audio")
          audio.play();   
        }
      }
    );
  });

  $(".container")
    .mouseenter(function () {
      $(".card").stop().animate(
        {
          top: "-90px"
        },
        "slow"
      );
    })
    .mouseleave(function () {
      $(".card").stop().animate(
        {
          top: 0
        },
        "slow"
      );
    });
});

$(document).ready(function () {
  $(".card").click(function () {
    $(this).addClass("zoomed");

    $(".card.zoomed .text").on("transitionend", function () {
      $(this).text("Mor, gostaria de te dizer isso pessoalmente, de estar do seu ladinho te abraçando e te beijando, mas enquanto não podemos vou fazer assim hihi. Nem acredito que já se passaram 9 meses(1 gestação já kk, até pq deve ser um parto ter que aguentar trovoadas) e a gente continua da mesma forma: felizes um com o outro. Agora nos conhecemos muito mais, vivemos várias e várias experiências(poucas perto das que virão) e só posso te agradecer, MUITO MUITO por cada dia você me ensinar o que é amar, a como é bom amar e ser amado(corrigi essa frase umas duas vezes pq digitei mamado sem querer, juro), além da forma que você me trata, que me deixa bobinho sempre, eu amo seu jeitinho, mor, então posso dizer com toda a certeza: Como é ruim estar sem você pertinho, moor :(. Além disso, agradeço muito por ter vc, a melhor mulher do meu lado, que tem de tudo que é qualidade um pouco(no mesmo passo que vc é difícil hihi), mas de longe o que mais me 'brilha os olhos' é ver que você é feliz, sempre sorridente apesar dos pesares. Acredito que esse tempo que ficamos longe foi bom e ruim, bom por que nos mostra que apesar de estarmos distante um do outro nesse tempo, nada muda, só aumenta a vontade de nos ver e nos abraçarmos até ficar com a costela quebrada igual a do Yuri Alberto, mas tbm é ruim justamente por não ter a felicidade dos meus dias aqui comigo, afinal, como que faço brigadeiro arenoso assim, mor? Quero desejar pra nós toda felicidade do mundo, que nosso amor só aumente, com muito carinho, companheirismo, sinceridade e piadas dignas de cancelamentos eternos como sempre fomos/fizemos um com o outro <3, e algo que quero que você saiba é que independente da distância, do momento, estou aqui para TUDO uqe você precisar, pq amo saber de qualquer coisa que vc fale, por mais simples que seja, todoss os momentos com você são únicos. Nesse tempo aqui sozinho, pensei nisso, que é bem simples, mas acho que você já deve ter percebido que ali embaixo tem um botão, né? Clica nele que tem mais coisa hihi. Amo mutio você e amo tudo que vivemos, que estamos vivendo e vamos viver ainda esse ano e nos próximos, o sentimento de ser amado por alguém tão especial pra mim me faz ser o homem mais feliz de todos, e isso me faz tentar ser o meu melhor para você, sempre sempre mor, em todos os momentos, te amo MUITO, sou inteiramente seu e vai continuar assim <3, aliás, eu ser inteiramente seu não tem nada a ver com bueiro hihi <3.\n. Com mtmt amor,\nGui"
      );
    });
  });

  $(".container")
    .mouseenter(function () {
      $(".card").stop().animate(
        {
          top: "-90px"
        },
        "slow"
      );
    })
    .mouseleave(function () {
      $(".card").stop().animate(
        {
          top: 0
        },
        "slow"
      );
    });
});

let button = document.getElementById("button");

button.addEventListener('mousemove', (e) => {
    x = e.offsetX;
    y = e.offsetY;
    button.style.setProperty('--mouse-x', x + "px");
    button.style.setProperty('--mouse-y', y + "px");
});
>>>>>>> db5adb854ee4fb5cdd699cf3ffc0dbb9ff87e4a4
