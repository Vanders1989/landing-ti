const form = document.getElementById("formCadastro");
const lista = document.getElementById("listaUsuarios");


form.addEventListener("submit",function(event){
    event.preventDefault();

    const nome =document.getElementById("nome").value;
    const email =document.getElementById("email").value;


    const li = document.createElement("li");
    li.textContent = `${nome} - ${email}`;


    const btnRemover = document.createElement("button");
    btnRemover.textContent ="Remover";
    btnRemover.style.marginLeft = "10px";


    btnRemover.addEventListener("click",function(){
        lista.removeChild(li);

    });

     li.appendChild(btnRemover);
     lista.appendChild(li);

    form.reset();


});