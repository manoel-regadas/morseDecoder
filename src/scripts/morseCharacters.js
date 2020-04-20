//characters
const dot = `<i class=" decoder__caracter decoder__dot "></i>`
const dash = `<i class="decoder__caracter decoder__dash "></i>`
const nonCharacter = `<i class="decoder__caracter decoder__nonCharacter ">#</i>`

const characters = {
    'A':{value:'A', code: dot+dash},
    'B':{value:'B', code: dash+dot+dot+dot},
    'C':{value:'C', code: dash+dot+dash+dot},
    'D':{value:'D', code: dash+dot+dot},
    'E':{value:'E', code: dot},
    'F':{value:'F', code: dot+dot+dash+dot},
    'G':{value:'G', code: dash+dash+dot},
    'H':{value:'H', code: dot+dot+dot+dot},
    'I':{value:'I', code: dot+dot},
    'J':{value:'J', code: dot+dash+dash+dash},
    'K':{value:'K', code: dash+dot+dash},
    'L':{value:'L', code: dot+dash+dot+dot},
    'M':{value:'M', code: dash+dash},
    'N':{value:'N', code: dash+dot},
    'O':{value:'O', code: dash+dash+dash},
    'P':{value:'P', code: dot+dash+dash+dot},
    'Q':{value:'Q', code: dash+dash+dot+dash},
    'R':{value:'R', code: dot+dash+dot},
    'S':{value:'S', code: dot+dot+dot},
    'T':{value:'T', code: dash},
    'U':{value:'U', code: dot+dot+dash},
    'V':{value:'V', code: dot+dot+dot+dash},
    'W':{value:'W', code: dot+dash+dash},
    'X':{value:'X', code: dash+dot+dot+dash},
    'Y':{value:'Y', code: dash+dot+dash+dash},
    'Z':{value:'Z', code: dash+dash+dot+dot},
    //number 
    '0':{value:'A', code: dash+dash+dash+dash+dash},
    '1':{value:'B', code: dot+dash+dash+dash+dash},
    '2':{value:'C', code: dot+dot+dash+dash+dash},
    '3':{value:'3', code: dot+dot+dot+dash+dash},
    '4':{value:'4', code: dot+dot+dot+dot+dash},
    '5':{value:'5', code: dot+dot+dot+dot+dot},
    '6':{value:'6', code: dash+dot+dot+dot+dot},
    '7':{value:'7', code: dash+dash+dot+dot+dot},
    '8':{value:'8', code: dash+dash+dash+dot+dot},
    '9':{value:'9', code: dash+dash+dash+dash+dot},

    '.':{value:'.', code: dot+dash+dot+dash+dot+dash},
    ',':{value:',', code: dash+dash+dot+dot+dash+dash},
    '!':{value:'!', code: dot+dot+dash+dash+dot+dot},

    //error
    '#':{code: nonCharacter}
}

export {characters}; 

