// read the word-list to an array
const fs = require('fs');

let wordList = [];
function readFileToArray(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        const dataArray = data.split('\n');

        return dataArray;
    } catch (err) {
        console.error('Error reading file', err);
        return [];
    }
}

const filePath = 'words.txt';
wordList = readFileToArray(filePath);
console.log(wordList);

// main solver function

function wordleSolver(greenLetters, yellowLetters, greyLetters, wordList) {
    // GRAY CHECK
    // If the word has a grey letter that means it should be out of the list
    let filteredList = [];
    for (let i = 0; i < wordList.length; i++) {
        if (greyLetters.every(letter => !wordList[i].includes(letter))) {
            filteredList.push(wordList[i]);
        }
    }

    // GREEN CHECK
    // now you have a list of words that are all possible, but not necessarily containing the right letters
    // want the most possible words in the front of the array
    // possibly by assigning a variable value then sorting highest to lowest?
    let valueList = [];
    for (var i = 0; i < filteredList.length; i++) { // iterating through words in filteredList
        var likelyValue = 0;
        for (var k = 0; k < 5; k++) { // iterating through letters in the words in filteredList
            if (filteredList[i][k] == greenLetters.at(k)) {
                likelyValue = likelyValue + 2;
            }
        }
        valueList.push([filteredList[i], likelyValue]);
    }

    // YELLOW CHECK
    // need to check how many of the yellow letters are in these words
    for (var i = 0; i < valueList.length; i++) { // iterating through words in the list
        for (var j = 0; j < 5; j++) { // iterating through letters in the words in the list
            for (var k = 0; k < yellowLetters.length; k++) { // iterating through yellowLetters to check for matches within each letter
                if (valueList[i][0][j] == yellowLetters.at(k) && (j != k)) { // if it is equal to a yellow letter but not at the same position increase likely value
                    valueList[i][1]++; 
                }
            }
        }
    }

    // Now sort the array from highest likelyValue to lowest
    let sortedList = valueList.sort((a, b) => b[1] - a[1]);

    return sortedList;
}

// test
let green = ['', '', '', '', ''];
let yellow = ['', '', 'n', '', 's'];
let grey = ['a', 'h', 'g'];

console.log("after");

let test = wordleSolver(green, yellow, grey, wordList);

console.log(test);