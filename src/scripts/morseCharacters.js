//characters
const dot = `<i class=" decoder__caracter decoder__dot "></i>`
const dash = `<i class="decoder__caracter decoder__dash "></i>`
const nonCharacter = `<i class="decoder__caracter decoder__nonCharacter ">#</i>`
const whiteSpace = `<i class="decoder__caracter decoder__whiteSpace ">/</i>`

const characters = {
    'A':{value:'A', code: dot+dash, codeCharacter:'.-'},
    'B':{value:'B', code: dash+dot+dot+dot, codeCharacter:'-...'},
    'C':{value:'C', code: dash+dot+dash+dot, codeCharacter:'-.-.'},
    'D':{value:'D', code: dash+dot+dot, codeCharacter:'-..'},
    'E':{value:'E', code: dot, codeCharacter:'.'},
    'F':{value:'F', code: dot+dot+dash+dot, codeCharacter:'..-.'},
    'G':{value:'G', code: dash+dash+dot, codeCharacter:'--.'},
    'H':{value:'H', code: dot+dot+dot+dot, codeCharacter:'....'},
    'I':{value:'I', code: dot+dot, codeCharacter:'..'},
    'J':{value:'J', code: dot+dash+dash+dash, codeCharacter:'.---'},
    'K':{value:'K', code: dash+dot+dash, codeCharacter:'-.-'},
    'L':{value:'L', code: dot+dash+dot+dot, codeCharacter:'.-..'},
    'M':{value:'M', code: dash+dash, codeCharacter:'--'},
    'N':{value:'N', code: dash+dot, codeCharacter:'-.'},
    'O':{value:'O', code: dash+dash+dash, codeCharacter:'---'},
    'P':{value:'P', code: dot+dash+dash+dot, codeCharacter:'.--.'},
    'Q':{value:'Q', code: dash+dash+dot+dash, codeCharacter:'--.-'},
    'R':{value:'R', code: dot+dash+dot, codeCharacter:'.-.'},
    'S':{value:'S', code: dot+dot+dot, codeCharacter:'...'},
    'T':{value:'T', code: dash, codeCharacter:'-'},
    'U':{value:'U', code: dot+dot+dash, codeCharacter:'..-'},
    'V':{value:'V', code: dot+dot+dot+dash, codeCharacter:'...-'},
    'W':{value:'W', code: dot+dash+dash, codeCharacter:'.--'},
    'X':{value:'X', code: dash+dot+dot+dash, codeCharacter:'-..-'},
    'Y':{value:'Y', code: dash+dot+dash+dash, codeCharacter:'-.--'},
    'Z':{value:'Z', code: dash+dash+dot+dot, codeCharacter:'--..'},
    //number 
    '0':{value:'A', code: dash+dash+dash+dash+dash, codeCharacter:'-----'},
    '1':{value:'B', code: dot+dash+dash+dash+dash, codeCharacter:'.----'},
    '2':{value:'C', code: dot+dot+dash+dash+dash, codeCharacter:'..---'},
    '3':{value:'3', code: dot+dot+dot+dash+dash, codeCharacter:'...--'},
    '4':{value:'4', code: dot+dot+dot+dot+dash, codeCharacter:'....-'},
    '5':{value:'5', code: dot+dot+dot+dot+dot, codeCharacter:'.....'},
    '6':{value:'6', code: dash+dot+dot+dot+dot, codeCharacter:'-....'},
    '7':{value:'7', code: dash+dash+dot+dot+dot, codeCharacter:'--...'},
    '8':{value:'8', code: dash+dash+dash+dot+dot, codeCharacter:'---..'},
    '9':{value:'9', code: dash+dash+dash+dash+dot, codeCharacter:'----.'},

    '.':{value:'.', code: dot+dash+dot+dash+dot+dash, codeCharacter:'.-.-.-'},
    ',':{value:',', code: dash+dash+dot+dot+dash+dash, codeCharacter:'--..--'},
    '!':{value:'!', code: dot+dot+dash+dash+dot+dot, codeCharacter:'..--..'},

    //error
    ' ':{value:'/', code: whiteSpace, codeCharacter:'/'},
    '#':{value:'#', code: nonCharacter, codeCharacter:''}
}

export {characters}; 

