function verificador (){
  var data = new Date();
  var ano = data.getFullYear();
  var a = document.getElementById('txtano');
  var res = document.getElementById('res');
  if (a.value.length == 0 || Number(a.value) > ano) {
      window.alert("[ERRO] Verifique os dados");
  } else {
       var sex = document.getElementsByName('radsex');
       var idade= ano - Number(a.value) ;
       var genero = '';
    
  }  if (sex[0].checked) {
      genero = 'Homem' 
  
    if (idade >= 0 && idade < 12) {
         //CRIANÇA//
         res.innerHTML = `Tem ${idade} anos, e é um menino`
     } else if (idade < 18 ){
       //Adolescente//
       res.innerHTML = `Tem ${idade} anos, e é um adolescente.`
    } else if ( idade < 21){
        //Jovem//
        res.innerHTML = `Tem ${idade} anos, e é um jovem.`
    } else if (idade < 50) {
        //Adulto//
        res.innerHTML = `Tem ${idade} anos, e é um adulto.`
    } else {
         //idoso//
        res.innerHTML= `Tem ${idade} anos, e é idoso.`
    }
}
     else if (sex[1].checked) {
       genero = 'Mulher'
   
   if (idade >= 0 && idade < 12 ){
     //criança//
      res.innerHTML = `Tem ${idade} anos, e é uma menina.`
   } else if (idade < 19){
      //adolescente//
      res.innerHTML = `Tem ${idade} anos, e é uma adolescente.`
   } else if (idade < 21) {
       res.innerHTML = `Tem ${idade} anos, e é uma jovem.`
   } else if ( idade < 50 ){
    res.innerHTML = `Tem ${idade} anos, e é uma adulta.`
   } else {
     res.innerHTML= `Tem ${idade} anos, e é idosa.`
   }
     
  }
}
    
