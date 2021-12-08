//write your code here
const shortWords = array => {
    return array.filter(word => word.length < 5)
};

const noVowel = array => {
    return array.map(word => word.replace((/[aeiou]/gi), "x"))
}

const longToShort = array => {
    return array.sort((a,b) => b - a)
}

const onlyVowelA = array => {
    return array.filter(word => word.includes("a") || word.includes("A"))
}

const pluralize = array => {
    return array.map(word => `${word}s` )
}

const longerThanSeven = array => {
    return array.some(word => word.length > 7)
}

const oddLength = array => {
    return array.filter(word => word.length % 2 !== 0)
}

const allFour = array => {
    return array.every(word => word.length === 4)
}


const sum = array => {
    return array.reduce((p,c) => p + c)
}

const longWords = array => {
    return array.filter(word => word.length > 3 )
}

const uppercase = array => {
    return array.map(word => `${word[0].toUpperCase()}${word.slice(1)}`);
}

const concatStrings = array => {
    return array.reduce((word,strings) => word + " " + strings).toString()
}


console.log(concatStrings(['dog', 'cat', 'bear']))