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

// main function


// If the word has a grey letter that means it should be out of the list
function wordleSolver(greenLetters, yellowLetters, greyLetters) {
    let filteredList;
    for (var i = 0; i < wordList.length; i++) {
        for (var j = 0; j < greyLetters.length; j++) {
            if (j == 4) {
                filteredList.add(wordList.at(i));
            }
        }
    }
}