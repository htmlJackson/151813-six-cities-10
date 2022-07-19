export type CardType = {
    'id': number,
    'title': string,
    'price': string,
    'imgSrc': string,
    'type': string,
    'rating': 0 | 1 | 2 | 3 | 4 | 5,
    'isFavorite': boolean,
    'isPremium': boolean,
};

export type CardsType = CardType[];
