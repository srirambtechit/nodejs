var censoredWords = ["bad", "sad", "mad"];
var customCensoredWords = [];

function censor(str) {
    for(idx in censoredWords) {
        str = str.replace(censoredWords[idx], "****");
    }
    for(idx in customCensoredWords) {
        str = str.replace(customCensoredWords[idx], "****");
    }
}

function addCustomCensoredWords(word) {
    customCensoredWords.push(word);
}

function getCensoredWords() {
    return censoredWords.concat(customCensoredWords);
}

exports.censor = censor;
exports.addCustomCensoredWords = addCustomCensoredWords;
exports.getCensoredWords = getCensoredWords;
