const storyElement = document.getElementById('story');
const choicesElement = document.getElementById('choices');

let storyData = {
    start: {
        text: "Você está na entrada de uma floresta sombria. Você pode ouvir sons estranhos. O que você deseja fazer?",
        choices: [
            { text: "Entrar na floresta", next: 'enter_forest' },
            { text: "Voltar para casa", next: 'go_home' }
        ]
    },
    enter_forest: {
        text: "Dentro da floresta, você encontra um caminho dividido. Para onde você vai?",
        choices: [
            { text: "Seguir o caminho à esquerda", next: 'left_path' },
            { text: "Seguir o caminho à direita", next: 'right_path' }
        ]
    },
    left_path: {
        text: "Você encontra um lago mágico. O que você faz?",
        choices: [
            { text: "Beber da água", next: 'drink_water' },
            { text: "Explorar ao redor", next: 'explore_lake' }
        ]
    },
    right_path: {
        text: "Você encontra uma caverna escura. O que você faz?",
        choices: [
            { text: "Entrar na caverna", next: 'enter_cave' },
            { text: "Sair da floresta", next: 'go_home' }
        ]
    },
    drink_water: {
        text: "A água te dá poderes mágicos! Você ganhou o jogo!",
        choices: [{ text: "Recomeçar", next: 'start' }]
    },
    explore_lake: {
        text: "Você encontra um tesouro! Você ganhou o jogo!",
        choices: [{ text: "Recomeçar", next: 'start' }]
    },
    enter_cave: {
        text: "Na caverna, você encontra um dragão feroz. O que você faz?",
        choices: [
            { text: "Lutar contra o dragão", next: 'fight_dragon' },
            { text: "Fugir", next: 'go_home' }
        ]
    },
    fight_dragon: {
        text: "Você lutou bravamente, mas o dragão venceu. Fim do jogo.",
        choices: [{ text: "Recomeçar", next: 'start' }]
    },
    go_home: {
        text: "Você decidiu voltar para casa. Fim da aventura.",
        choices: [{ text: "Recomeçar", next: 'start' }]
    }
};

function startGame(node) {
    const currentNode = storyData[node];
    storyElement.innerText = currentNode.text;
    choicesElement.innerHTML = '';

    currentNode.choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice.text;
        button.onclick = () => startGame(choice.next);
        choicesElement.appendChild(button);
    });
}

startGame('start');
