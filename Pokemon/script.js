const form = document.getElementById("meuForm");
const personagens = document.getElementById("personagens")


form.addEventListener("submit", function(evento){
    evento.preventDefault();

    const personagem = document.getElementById("personagens").value;

    buscarPersonagens(personagem);
});

async function buscarPersonagens(personagem) {
    const url = `https://pokeapi.co/api/v2/pokemon/${personagem}`;
    try {
        const resposta = await fetch(url);
        if (!resposta.ok){
            throw new Error("Pokemon não encontrado na base de dados!");
        }
        const dados = await resposta.json();
        document.getElementById("Nomepkn").textContent = dados.name;
        // document.getElementById("Alturapkn").textContent = dados.height;
        document.getElementById("Pesopkn").textContent = dados.weight;
        document.getElementById("Imagempkn").src = dados.sprites.front_default;
    } catch (erro) {
        console.error("falha na comunicação", erro);
    }
}