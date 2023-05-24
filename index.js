function handleDiv(numero) {
    const div1 = document.querySelector(".div-1");
    const div2 = document.querySelector(".div-2");
    const div3 = document.querySelector(".div-3");

    const empresa_nome = document.querySelector("#empresa_nome");
    const nome_empresa = document.querySelector("#nome_empresa").value;
    const empresa_numero = document.querySelector("#empresa_numero");
    const telefone_empresa = document.querySelector("#telefone_empresa").value;

    //adicionar novo conteudo
    empresa_nome.innerHTML = `<span>Empresa/Negócio: ${nome_empresa}</span>`;
    empresa_numero.innerHTML = `<span>Número do Whatsapp: ${telefone_empresa}</span>`;

    if (numero == 1) {
        div1.style.display = "flex";
        div2.style.display = "none";
        div3.style.display = "none";
    }

    if (numero == 2) {
        div1.style.display = "none";
        div2.style.display = "flex";
        div3.style.display = "none";
    }

    if (numero == 3) {
        div1.style.display = "none";
        div2.style.display = "none";
        div3.style.display = "flex";
    }
}

