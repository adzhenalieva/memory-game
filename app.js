document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
        {
            name: 'bear',
            img: 'images/bear.png'
        },
        {
            name: 'bee',
            img: 'images/bee.png'
        },
        {
            name: 'cat',
            img: 'images/cat.png'
        },
        {
            name: 'duck',
            img: 'images/duck.png'
        },
        {
            name: 'puppy',
            img: 'images/puppy.png'
        },
        {
            name: 'monkey',
            img: 'images/monkey.png'
        },
        {
            name: 'bear',
            img: 'images/bear.png'
        },
        {
            name: 'bee',
            img: 'images/bee.png'
        },
        {
            name: 'cat',
            img: 'images/cat.png'
        },
        {
            name: 'duck',
            img: 'images/duck.png'
        },
        {
            name: 'puppy',
            img: 'images/puppy.png'
        },
        {
            name: 'monkey',
            img: 'images/monkey.png'
        },
    ];

    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    const button = document.querySelector('.btn');
    let cardsChosen = [];
    let cardsChosenId = [];
    const cardsWon = [];

    function reloadPage() {
        location.reload();
    }

    button.addEventListener('click', reloadPage);

    //create your board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card)
        }
    }

    //check for matches
    function checkForMatch() {
        let cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if (cardsChosen[0] === cardsChosen[1]) {
            cards[optionOneId].setAttribute('src', 'images/white.png');
            cards[optionTwoId].setAttribute('src', 'images/white.png');
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.png');
            cards[optionTwoId].setAttribute('src', 'images/blank.png');
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congratulations! You found them all!'
        }
    }

    //flip your card
    function flipCard() {
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()
});
