function calculaIdade(dataNasc){ 

    var dataAtual = new Date();
   
    var anoAtual = dataAtual.getFullYear();
   
    var anoNascParts = dataNasc.split('/');
   
    var diaNasc =anoNascParts[0];
   
    var mesNasc =anoNascParts[1];
   
    var anoNasc =anoNascParts[2];
   
    var idade = anoAtual - anoNasc;
   
    var mesAtual = dataAtual.getMonth() + 1; 
   
    
   
    if(mesAtual < mesNasc){
   
    idade--; 
   
    } else {
   
 
   
    if(mesAtual == mesNasc){ 
   
    if(new Date().getDate() < diaNasc ){ 
   
    
   
    idade--; 
   
    }
   
    }
   
    } 
   
    return idade; 
   
   }
   
   console.log(calculaIdade('08/06/2004'));