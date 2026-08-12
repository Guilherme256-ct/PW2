function Calcula(){
    
    var aA=document.getElementById("a").value;
    var bB=document.getElementById("b").value;
    var cC=document.getElementById("c").value;
    let deltaD=0;
    let xX1=0;
    let xX2=0;

    if(isNaN(aA)){
        alert("O primeiro termo não está númerico!");
        document.getElementById("a").value="";
        document.getElementById("a").focus();
    }
    else if(isNaN(bB)){
        alert("O segundo termo não é numérico!");
        document.getElementById("b").value="";
        document.getElementById("b").focus();
        
    }
    else if(isNaN(cC)){
        alert("O terceiro termo não é numérico");
        document.getElementById("c").value="";
        document.getElementById("c").focus();
    }
    else if(aA==""){
        alert("O primeiro termo é obrigatório existir!");
        document.getElementById("a").value="";
        document.getElementById("a").focus();
    }
    else if (bB==""){
        alert("O segundo termo é obrigatório existir!");
        document.getElementById("b").value="";
        document.getElementById("b").focus();
    }
    else if(cC==""){
        alert("O terceiro termo é obrigatório existir!");
        document.getElementById("c").value="";
        document.getElementById("c").focus();
    }
    else{
        aA=parseFloat(aA);
        bB=parseFloat(bB);
        cC=parseFloat(cC);
        if(aA==0){
            alert("O primeiro termo é obrigatório ser diferente de zero!");
            document.getElementById("a").focus();
        }
        else{
            deltaD=Math.pow(bB,2)-4*aA*cC;
            document.getElementById("delta").value=deltaD;
            if(deltaD<0){
                document.getElementById("raiz-1").value="Não há raízes reais.";
                document.getElementById("raiz-2").value="Não há raízes reais.";
            }
            else{
                xX1=(-bB+Math.sqrt(deltaD))/(2*aA);
                xX2=(-bB-Math.sqrt(deltaD))/(2*aA);
                document.getElementById("raiz-1").value=xX1.toFixed(2);
                document.getElementById("raiz-2").value=xX2.toFixed(2);
            }
        }
        
    }
}