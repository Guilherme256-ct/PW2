function Calcula(){
    let x=document.getElementById("n1").value;
    let y=document.getElementById("n2").value;
    let operacao=document.getElementById("opc").value;
    if (isNaN(x)){
        alert("O primero valor é não númerico, tente novamente.");
        document.getElementById("n1").focus();
    }
    else if(isNaN(y)){
        alert("O segundo valor é não númerico, tente novamente.");
        document.getElementById("n2").focus();
    }
    else {
        x=parseFloat(x);
        y=parseFloat(y);
        if(operacao=="mais"){
        document.getElementById("resultado").value=x+y;
        }
        else if(operacao=="menos"){
            document.getElementById("resultado").value=x-y;
        }
        else if(operacao=="multiplicacao"){
            document.getElementById("resultado").value=x*y;
        }
        else if(y!=0){              
            document.getElementById("resultado").value=(x/y).toFixed(2);
        }
        else{
            alert("Divisão por zero!");
            document.getElementById("n2").value="";
            document.getElementById("n2").focus();
            return;
            
        }
    }
}