import { unsuitedValueMap, countMap } from './constants.js'
import { isNumber } from './util.js';

// unsuited deck e.g. ['2', 'k', 'j', 7, 9]
const getCardVal = (rank) => {
    if (isNumber(rank)) {
        return rank
    }
    return unsuitedValueMap[rank] || 0
}

const trueCountConversion = (runningCount, seenCardsLen, numDecks) => {
    const reductionFactor = seenCardsLen / (numDecks * 52)
    return runningCount * reductionFactor
}

const bjCounterReducer = (count, unsuitedCard) => count + countMap[unsuitedCard] || 0;

export const getTrueCount = (seenCards, numDecks) => {
    const runningCount = seenCards.reduce(bjCounterReducer, 0)

    return trueCountConversion(runningCount, seenCards.length, numDecks)
}

