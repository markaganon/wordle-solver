// read the word-list to an array
const fs = require('fs');

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
const wordList = readFileToArray(filePath);

// main solver function

function wordleSolver(greenLetters, yellowLetters, greyLetters) {
    // GRAY CHECK
    // If the word has a grey letter that means it should be out of the list
    let filteredList;
    for (var i = 0; i < wordList.length; i++) {
        for (var j = 0; j < greyLetters.length; j++) {
            if (!wordList.at(i).includes(greyLetters)) {
                filteredList.add(wordList.at(i));
            } else {
                continue;
            }
        }
    }

    // GREEN CHECK
    // now you have a list of words that are all possible, but not necessarily containing the right letters
    // want the most possible words in the front of the array
    // possibly by assigning a variable value then sorting highest to lowest?
    let valueList;
    for (var i = 0; i < filteredList.length; i++) {
        var likelyValue = 0;
        for (var j = 0; j < greenLetters.length; j++) {
            if (filteredList.at(i) == greenLetters.at(j)) {
                likelyValue++;
            }
        }
        valueList.push([filteredList.at(i), likelyValue]);
    }

    // YELLOW CHECK
    // need to check how many of the yellow letters are in these words
    for (var i = 0; i < valueList.length; i++) {
        if (valueList.at(i).includes(yellowLetters)) { // if 
            valueList.at(i).at(1)++;
        } else {
            continue;
        }
    }
}