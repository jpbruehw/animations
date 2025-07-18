import { v4 as uuidv4 } from 'uuid';
import heart from '/assets/suits/heart.svg';
import spade from '/assets/suits/spade.svg';
import club from '/assets/suits/club.svg';
import diamond from '/assets/suits/diamond.svg';
import cardBack from '/assets/suits/card-back.svg'

const dealerHidden = cardBack

const suitImgs = [heart, spade, club, diamond]

const ranks = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
];

const imgCombos = suitImgs.flatMap((suit) =>
    ranks.map((rank) => ({ id: uuidv4(), suit, rank}))
)

export {
    imgCombos,
    dealerHidden
}