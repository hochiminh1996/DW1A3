


function verificar(){
	var nome = document.getElementById("nome").value;
	var email = document.getElementById("email").value;
	var msg = document.getElementById("msg").value;

	var result = document.getElementById("resultado");

	console.log(result);
			// alert(resultado);

	if(nome == "" || nome==null){
		resultado.classList.add("invalido");
		document.getElementById("resultado").innerHTML = "*Campo nome vazio*";
		// resultado.style.color = "red";

		document.getElementById("nome").focus();
		document.getElementById("nome").style.border = "*1px solid red*";



	}else if(email==""){
		resultado.classList.add("invalido");

		document.getElementById("resultado").innerHTML = "*Campo e-mail vazio*";

		document.getElementById("email").focus();
		document.getElementById("email").style.border = "1px solid red";
	}else if(msg ==""){
		resultado.classList.add("invalido");

		document.getElementById("resultado").innerHTML = "*Campo mensagem vazio*";
		document.getElementById("msg").focus();
		document.getElementById("msg").style.border = "1px solid red";
	}else{
		document.getElementById("nome").style.border = "";
		document.getElementById("email").style.border = "";
		document.getElementById("msg").style.border = "";


		document.getElementById("resultado").innerHTML = "*Mensagem enviada com sucesso*";
		resultado.classList.add("valido");

	}
}