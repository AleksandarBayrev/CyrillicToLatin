window.LetterMapping.processText = function (input) {
    if (window.LetterMapping.letters.has(window.LetterMapping.keys.MergedLetterMapping)) {
        for (let i = 0; i < input.length; i++) {
            const letter = window.LetterMapping.letters.get(window.LetterMapping.keys.MergedLetterMapping)[input[i]]
            if (letter) {
                input = input.replace(input[i], letter)
            }
        }
    }
    return input
}

window.LetterMapping.appendToDiv = function (inputDiv, resultDiv) {
    document.getElementById(resultDiv).innerText = window.LetterMapping.processText(document.getElementById(inputDiv).value)
}

window.LetterMapping.clearTextBox = function (div) {
    document.getElementById(div).innerHTML = ""
    document.getElementById(div).value = ""
    document.getElementById(div).innerText = ""
}