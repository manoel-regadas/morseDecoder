//characters
const dot = `<i class=" decoder__caracter decoder__dot"></i>`
const dash = `<i class="decoder__caracter decoder__dash"></i>`

const characters = [
    {value: 'A', code: dot+dash},
    {value: 'B', code: dash+dot+dot+dot},
    {value: 'C', code: dash+dot+dash+dot},
    {value: 'D', code: dash+dot+dot},
    {value: 'E', code: dot},
    {value: 'F', code: dot+dot+dash+dot},
    {value: 'G', code: dash+dash+dot},
    {value: 'H', code: dot+dot+dot+dot},
    {value: 'I', code: dot+dot},
    {value: 'J', code: dot+dash+dash+dash},
    {value: 'K', code: dash+dot+dash},
    {value: 'L', code: dot+dash+dot+dot},
    {value: 'M', code: dash+dash},
    {value: 'N', code: dash+dot},
    {value: 'O', code: dash+dash+dash},
    {value: 'P', code: dot+dash+dash+dot},
    {value: 'Q', code: dash+dash+dot+dash},
    {value: 'R', code: dot+dash+dot},
    {value: 'S', code: dot+dot+dot},
    {value: 'T', code: dash},
    {value: 'U', code: dot+dot+dash},
    {value: 'V', code: dot+dot+dot+dash},
    {value: 'W', code: dot+dash+dash},
    {value: 'X', code: dash+dot+dot+dash},
    {value: 'Y', code: dash+dot+dash+dash},
    {value: 'Z', code: dash+dash+dot+dot},
    //numbers
    {value: '0', code: dash+dash+dash+dash+dash},
    {value: '1', code: dot+dash+dash+dash+dash},
    {value: '2', code: dot+dot+dash+dash+dash},
    {value: '3', code: dot+dot+dot+dash+dash},
    {value: '4', code: dot+dot+dot+dot+dash},
    {value: '5', code: dot+dot+dot+dot+dot},
    {value: '6', code: dash+dot+dot+dot+dot},
    {value: '7', code: dash+dash+dot+dot+dot},
    {value: '8', code: dash+dash+dash+dot+dot},
    {value: '9', code: dash+dash+dash+dash+dot},
    //masks
    {value: '.', code: dot+dash+dot+dash+dot+dash},
    {value: ',', code: dash+dash+dot+dot+dash+dash},
    {value: '!', code: dot+dot+dash+dash+dot+dot},
]

export {characters}; 


