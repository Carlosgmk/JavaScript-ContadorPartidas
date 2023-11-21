function PartidasRankeds (vitorias, derrotas) {
     vitorias  = prompt("Digite quantas vitórias você possue em Partidas Rankeadas!")
     derrotas  = prompt("Digite quantas derrotas você possue em Partidas Rankeadas!")
     let partidas = vitorias - derrotas
     let classificacao;

     if (vitorias < 10) {
     classificacao = "Ferro";
        } else if (vitorias <= 20) {
           classificacao = "Bronze";
          } else if (vitorias <= 50) {
               classificacao = "Prata";
                } else if (vitorias <= 80) {
                    classificacao = "Ouro";
                    } else if (vitorias <= 90) {
                         classificacao = "Diamante";
                         } else if (vitorias <= 100) {
                              classificacao = "Lendário";
                              } else {
                                   classificacao = "Imortal";
                              }
       
      alert(`O Herói tem de saldo de ${partidas} vitorias e está no nível de ${classificacao} `)                      
       RepeatPartidas()
     
}
     function RepeatPartidas(){
          let opcao = prompt('Deseja fazer outro calculo?\n 1 - Sim\n 2 - Não')
          if (opcao == 1){
            PartidasRankeds()
               } else if(opcao == 2){
                     alert('Obrigado por usar nosso site')
                     } else{
                         alert ("Opção invalidaa, ecolha uma opção")
                      novaOperacao()
      }
}
     PartidasRankeds()