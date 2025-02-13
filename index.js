let listaDeTeams = [];
let listaDeParticipantes = [];


function mostrarOverlay() {
    let modalBG = document.querySelector("#overlay");
    modalBG.classList.remove("invisible", "opacity-0");
}

function esconderOverlay() {
    let modalBG = document.querySelector("#overlay");
    modalBG.classList.add("invisible", "opacity-0");
    esconderCriar();
    esconderEditar();
}

function validarNumero(input){

    input.value = input.value.replace(/[^0-9]/g, '');
}

function mostrarCriar() {
    mostrarOverlay();

    let modalCriar = document.querySelector("#criar");
    modalCriar.classList.remove("invisible", "opacity-0");
    let inputNome = document.querySelector("#nome");
    inputNome.value = '';
    let inputCapacidade = document.querySelector("#capacidade");
    inputCapacidade.value = '';

}

function esconderCriar() {
    let modalEditar = document.querySelector("#criar");
    modalEditar.classList.add("invisible", "opacity-0");
}

function mostrarEditar() {
    mostrarOverlay();

    let modalEditar = document.querySelector("#editar");
    modalEditar.classList.remove("invisible", "opacity-0");

}

function esconderEditar() {
    let modalCriar = document.querySelector("#editar");
    modalCriar.classList.add("invisible", "opacity-0");
}

function criarTeam() {
    event.preventDefault();
    let nomeValue = document.querySelector("#nome").value;
    let capacidadeValue = document.querySelector("#capacidade").value;

    listaDeTeams.push({
        nome: nomeValue,
        capacidade: capacidadeValue,
        participantes: 0
    })

    nomeValue = '';
    capacidadeValue = '';

    esconderCriar();
    esconderOverlay();
    carregarTeams(listaDeTeams);
}

function carregarTeams(lista) {
    let teamsGrid = document.querySelector("#teams");
    teamsGrid.innerHTML = '';
    lista.forEach((team, index) => {
        teamsGrid.innerHTML += `
            <div class="bg-cinza2 rounded-lg p-4">
                <div class="flex items-center justify-between">
                    <h6 class="text-white text-[18px] font-bold">${team.nome}</h6>
                    <box-icon name='show' type='solid' class="fill-white cursor-pointer duration-200 hover:fill-rosa"></box-icon>
                </div>
                <div class="w-[100px] h-[100px] rounded-full bg-cinza1 flex flex-col justify-center items-center m-auto my-[26px]">
                    <h1 id=participantes class="text-white text-[50px] leading-[50px]">${team.participantes}</h1>
                    <h6 class="font-bold text-white">/ ${team.capacidade}</h6>
                </div>
                <div class="flex gap-4">
                    <button class="flex-1 h-[40px] flex items-center border-2 border-rosa rounded-lg text-white text-[12px] uppercase font-bold relative group" onclick="mostrarEditar()">
                        <span class="w-0 h-full absolute top-0 left-0 bg-rosa duration-200 group-hover:w-full"></span>
                        <span class="w-full relative z-10 text-center">Adicionar</span>
                    </button>
                    <button class="w-[40px] h-[40px] flex justify-center items-center border-2 border-rosa rounded-lg text-white text-[12px] uppercase font-bold relative group" onclick="apagarTeam()">
                        <span class="w-0 h-full absolute top-0 left-0 bg-rosa duration-200 group-hover:w-full"></span>
                        <box-icon name='trash' class="fill-white relative z-10"></box-icon>
                    </button>
                </div>
            </div>
        `;
    })
}


function adicionarParticipante(idParticipante){
    event.preventDefault();

    let nomeDoParticipande = document.querySelector("#nome-do-participante").value;
    let nomeValue = document.querySelector("#nome").value;
    let capacidadeValue = document.querySelector("#capacidade").value;
    let novoParticipante = listaDeTeams.find(novoParticipante => novoParticipante.id === idParticipante);
    if (novoParticipante) {
        novoParticipante.participantes++;
       
    }


    esconderEditar();
    esconderOverlay();
}


function apagarTeam(index) {
    listaDeTeams.splice(index, 1); // Remove o time da lista
    carregarTeams(listaDeTeams); // Atualiza a exibição dos times
}

function criarParticipante(idTime){
    event.preventDefault();

    let time = listaDeTeams.find(time => time.id === idTime);
    if(time) {
        time.participantes++;
        document.querySelector("#participantes").textContent = time.participantes;
    }


    esconderEditar();
    esconderOverlay();
}