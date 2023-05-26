function handleDiv(valorDiv) {
    const div1 = document.querySelector(".div-1");
    const div2 = document.querySelector(".div-2");
    const div3 = document.querySelector(".div-3");
    const validate = document.querySelector(".validate");
    const validate2 = document.querySelector(".validate-2");
    validate.style.opacity = 0;
    validate.style.height = '0px';
    validate.style.padding = '0px';
    validate2.style.opacity = 0;
    validate2.style.height = '0px';
    validate2.style.padding = '0px';

    const namepes = document.querySelector("#namepes").value;
    const nfantasia = document.querySelector("#nfantasia").value;
    const email = document.querySelector("#email").value;
    const nzapemp = document.querySelector("#nzapemp").value;

    const cep = document.querySelector("#cep").value;
    const logradouro = document.querySelector("#logradouro").value;
    const numero = document.querySelector("#numero").value;
    const bairro = document.querySelector("#bairro").value;
    const cidade = document.querySelector("#cidade").value;
    const uf = document.querySelector("#uf").value;

    if (!namepes) {
        validate.style.opacity = 1;
        validate.style.height = '40px';
        validate.style.padding = '10px';
        return validate.innerHTML = "<span style='font-weight: bold'>O campo nome dever ser preenchido</span><i onclick='noneValidate()' class='fa-solid fa-xmark' style='cursor: pointer'></i>"
    }

    if (!nfantasia) {
        validate.style.opacity = 1;
        validate.style.height = '40px';
        validate.style.padding = '10px';
        return validate.innerHTML = "<span style='font-weight: bold'>O campo nome da empresa dever ser preenchido</span><i onclick='noneValidate()' class='fa-solid fa-xmark' style='cursor: pointer'></i>"
    }

    if (!email) {
        validate.style.opacity = 1;
        validate.style.height = '40px';
        validate.style.padding = '10px';
        return validate.innerHTML = "<span style='font-weight: bold'>O campo email dever ser preenchido</span><i onclick='noneValidate()' class='fa-solid fa-xmark' style='cursor: pointer'></i>"
    }

    if (!nzapemp) {
        validate.style.opacity = 1;
        validate.style.height = '40px';
        validate.style.padding = '10px';
        return validate.innerHTML = "<span style='font-weight: bold'>O campo número whatsapp da empresa dever ser preenchido</span><i onclick='noneValidate()' class='fa-solid fa-xmark' style='cursor: pointer'></i>"
    }

    // car 2
    if (valorDiv == 3 && !cep) {
        validate2.style.opacity = 1;
        validate2.style.height = '40px';
        validate2.style.padding = '10px';
        return validate2.innerHTML = "<span style='font-weight: bold'>O campo cep dever ser preenchido</span><i onclick='noneValidate2()' class='fa-solid fa-xmark' style='cursor: pointer'></i>"
    }
    if (valorDiv == 3 && !logradouro) {
        validate2.style.opacity = 1;
        validate2.style.height = '40px';
        validate2.style.padding = '10px';
        return validate2.innerHTML = "<span style='font-weight: bold'>O campo logradouro dever ser preenchido</span><i onclick='noneValidate2()' class='fa-solid fa-xmark' style='cursor: pointer'></i>"
    }

    if (valorDiv == 3 && !numero) {
        validate2.style.opacity = 1;
        validate2.style.height = '40px';
        validate2.style.padding = '10px';
        return validate2.innerHTML = "<span style='font-weight: bold'>O campo número dever ser preenchido</span><i onclick='noneValidate2()' class='fa-solid fa-xmark' style='cursor: pointer'></i>"
    }

    if (valorDiv == 3 && !bairro) {
        validate2.style.opacity = 1;
        validate2.style.height = '40px';
        validate2.style.padding = '10px';
        return validate2.innerHTML = "<span style='font-weight: bold'>O campo bairro dever ser preenchido</span><i onclick='noneValidate2()' class='fa-solid fa-xmark' style='cursor: pointer'></i>"
    }

    if (valorDiv == 3 && !cidade) {
        validate2.style.opacity = 1;
        validate2.style.height = '40px';
        validate2.style.padding = '10px';
        return validate2.innerHTML = "<span style='font-weight: bold'>O campo cidade dever ser preenchido</span><i onclick='noneValidate2()' class='fa-solid fa-xmark' style='cursor: pointer'></i>"
    }
    if (valorDiv == 3 && !uf) {
        validate2.style.opacity = 1;
        validate2.style.height = '40px';
        validate2.style.padding = '10px';
        return validate2.innerHTML = "<span style='font-weight: bold'>O campo UF dever ser preenchido</span><i onclick='noneValidate2()' class='fa-solid fa-xmark' style='cursor: pointer'></i>"
    }

    const empresa_nome = document.querySelector("#empresa_nome");
    const empresa_numero = document.querySelector("#empresa_numero");

    //adicionar novo conteudo
    empresa_nome.innerHTML = `<span>Empresa/Negócio: ${nfantasia}</span>`;
    empresa_numero.innerHTML = `<span>Número do Whatsapp: ${nzapemp}</span>`;

    if (valorDiv == 1) {
        div1.style.display = "flex";
        div2.style.display = "none";
        div3.style.display = "none";
    }

    if (valorDiv == 2) {
        div1.style.display = "none";
        div2.style.display = "flex";
        div3.style.display = "none";
    }

    if (valorDiv == 3) {
        div1.style.display = "none";
        div2.style.display = "none";
        div3.style.display = "flex";
    }

}

function noneValidate() {
    const validate = document.querySelector(".validate");
    validate.style.opacity = 0;
    validate.style.height = '0px';
    validate.style.padding = '0px';
}


function noneValidate2() {
    const validate2 = document.querySelector(".validate-2");
    validate2.style.opacity = 0;
    validate2.style.height = '0px';
    validate2.style.padding = '0px';
}

