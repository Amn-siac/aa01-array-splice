/*
Write a function removeLastVowel(word) that takes in a string and returns the
string with its last vowel removed.
Vowels are the letters "a", "e", "i", "o", "u".
*/

function removeLastVowel(word) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    word = word.split('');
    for (let i = word.length - 1; i >= 0; i--) {
        if (vowels.includes(word[i])) {
            word.splice(i, 1);
            word = word.join('');
            return word;
        }
    }
    return word.join('');
}

// console.log(removeLastVowel('bootcamp')); // 'bootcmp'
// console.log(removeLastVowel('better')); // 'bettr'
// console.log(removeLastVowel('graph')); // 'grph'
// console.log(removeLastVowel('thy')); // 'thy'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = removeLastVowel;
