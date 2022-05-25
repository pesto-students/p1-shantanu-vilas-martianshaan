function isVowel(char){
    return "aeiou".includes(char);
}

function isVowelCount(str){
    const vowelMap =new Map();
    for(let char of str){
        let lowerCaseChar = char.toLowerCase()
        console.log(lowerCaseChar);
        if(isVowel(lowerCaseChar)){
            if(vowelMap.has(lowerCaseChar)){
                vowelMap.set(lowerCaseChar,vowelMap.get(lowerCaseChar)+1);
            }else{
                vowelMap.set(lowerCaseChar,1);
            }
        }
    }
    return vowelMap;
}

const checkVowel =isVowel('aeiou')
console.log(checkVowel);
const vowel = isVowelCount('SHN');
console.log(vowel);
