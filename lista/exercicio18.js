function classificar(nota){
    if (nota >= 9){
        console.log("EXCELENTE");
    } else if (nota >= 7){
        console.log("APROVADO");
    } else if (nota >= 5){
        console.log("RECUPERAÇÃO");
    } else {
        console.log("REPROVADO");
    }
}

classificar(9);
classificar(7);
classificar(5);
classificar(3);