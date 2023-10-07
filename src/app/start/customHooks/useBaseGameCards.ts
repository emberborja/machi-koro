export type BaseGameCard = {
    color: 'blue' | 'green' | 'red' | 'purple',
    procNumber: number[],
    icon: 'corn' | 'livestock' | 'box' | 'cup' | 'gear' | 'tower' | 'factory' | 'fruit',
    title: string,
    description: string,
    cost: number,
    effect: number,
    effectTarget: 'bank' | 'player' | 'allPlayers' | 'anyPlayer'
}

export const baseGameCards : BaseGameCard[] = [
        {
            color: 'blue',
            procNumber: [1],
            icon: 'corn',
            title: 'WHEAT FIELD',
            description: 'GET 1 COIN FROM THE BANK, ON ANYONE\'S TURN.',
            cost: 1,
            effect: 1,
            effectTarget: 'bank'
        },
        {
            color: 'blue',
            procNumber: [2],
            icon: 'livestock',
            title: 'RANCH',
            description: 'GET 1 COIN FROM THE BANK, ON ANYONE\'S TURN.',
            cost: 1,
            effect: 1,
            effectTarget: 'bank'
        },
        {
            color: 'green',
            procNumber: [2, 3],
            icon: 'box',
            title: 'BAKERY',
            description: 'GET 1 COIN FROM THE BANK, ON YOUR TURN ONLY.',
            cost: 1,
            effect: 1,
            effectTarget: 'bank'
        },
        {
            color: 'red',
            procNumber: [3],
            icon: 'cup',
            title: 'CAFE',
            description: 'GET 1 COIN FROM THE PLAYER WHO ROLLED THE DICE.',
            cost: 2,
            effect: 1,
            effectTarget: 'player'
        },
        {
            color: 'green',
            procNumber: [4],
            icon: 'box',
            title: 'CONVENIENCE STORE',
            description: 'GET 3 COINS FROM THE BANK, ON YOUR TURN ONLY.',
            cost: 2,
            effect: 3,
            effectTarget: 'bank'
        },
        {
            color: 'blue',
            procNumber: [5],
            icon: 'gear',
            title: 'FOREST',
            description: 'GET 1 COIN FROM THE BANK, , ON ANYONE\'S TURN.',
            cost: 3,
            effect: 1,
            effectTarget: 'bank'
        },
        {
            color: 'purple',
            procNumber: [6],
            icon: 'tower',
            title: 'STADIUM',
            description: 'GET 2 COINS FROM ALL PLAYERS, ON YOUR TURN ONLY.',
            cost: 6,
            effect: 2,
            effectTarget: 'allPlayers'
        },
        {
            color: 'purple',
            procNumber: [6],
            icon: 'tower',
            title: 'TV STATION',
            description: 'IF THIS IS YOUR TURN, TAKE 5 COINS FROM ANY ONE PLAYER.',
            cost: 7,
            effect: 5,
            effectTarget: 'anyPlayer'
        },
        {
            color: 'purple',
            procNumber: [6],
            icon: 'tower',
            title: 'BUSINESS CENTER',
            description: 'IF THIS IS YOUR TURN, TRADE ONE NON PURPLE ESTABLISHMENT WITH ANOTHER PLAYER.',
            cost: 8,
            effect: 0,
            effectTarget: 'anyPlayer'
        },
        {
            color: 'green',
            procNumber: [7],
            icon: 'factory',
            title: 'CHEESE FACTORY',
            description: 'IF THIS IS YOUR TURN, GET 3 COINS FROM THE BANK FOR EACH LIVESTOCK ESTABLISHMENT THAT YOU OWN.',
            cost: 5,
            effect: 3,
            effectTarget: 'bank'
        },
        {
            color: 'green',
            procNumber: [8],
            icon: 'factory',
            title: 'FURNITURE FACTORY',
            description: 'IF THIS IS YOUR TURN, GET 3 COINS FROM THE BANK FOR EACH GEAR ESTABLISHMENT THAT YOU OWN.',
            cost: 3,
            effect: 3,
            effectTarget: 'bank'
        },
        {
            color: 'blue',
            procNumber: [9],
            icon: 'gear',
            title: 'MINE',
            description: 'GET 5 COINS FROM THE BANK, ON ANYONE\'S TURN.',
            cost: 6,
            effect: 5,
            effectTarget: 'bank'
        },
        {
            color: 'red',
            procNumber: [9, 10],
            icon: 'cup',
            title: 'FAMILY RESTAURANT',
            description: 'GET 2 COINS FROM THE PLAYER WHO ROLLED THE DICE.',
            cost: 3,
            effect: 2,
            effectTarget: 'player'
        },
        {
            color: 'blue',
            procNumber: [10],
            icon: 'corn',
            title: 'APPLE ORCHARD',
            description: 'GET 3 COINS FROM THE BANK, ON ANYONE\'S TURN.',
            cost: 3,
            effect: 3,
            effectTarget: 'bank'
        },
        {
            color: 'green',
            procNumber: [11, 12],
            icon: 'fruit',
            title: 'FRUIT AND VEGETABLE MARKET',
            description: 'IF THIS IS YOUR TURN, GET 2 COINS FROM THE BANK FOR EACH CORN ESTABLISHMENT THAT YOU OWN.',
            cost: 2,
            effect: 2,
            effectTarget: 'bank'
        },
    ];
