
    function encontrarEstacao(M)
    {
   
       
        switch (M) {
        case 12:
        case 1:
        case 2:
            document.write("Inverno" + "<br/>");
            break;
        case 3:
        case 4:
        case 5:
            document.write("Primavera" + "<br/>");
            break;
        case 6:
        case 7:
        case 8:
            document.write("Verão"  + "<br/>");
            break;
        case 9:
        case 10:
        case 11:
            document.write("Outono" + "<br/>");
            break;
        default:
         
            document.write("Número de Mês Invalido");
            break;
        }
    }
 
     
 
     
        let M = 5;
        document.write("No mês de número: "
                           + M + "<br/>");
        encontrarEstacao(M);
   
        M = 10;
        document.write("No mês de número: "
                           + M + "<br/>");
        encontrarEstacao(M);
  