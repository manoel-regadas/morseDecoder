import { characters} from './morseCharacters';
import { Tooltip} from './tooltip';


class Decoder {
   constructor(textArea, button, output, deleteButton, changeInputButton, getCodeButton, cheatingInput) {
      this._textArea = textArea;
      this._button = button;
      this._output = output;
      this._characters = characters;
      this._characterWraper; 
      this._deleteButton = deleteButton
      this._toollip = new Tooltip();
      this._changeInputButton = changeInputButton;
      this.isClicked = false
      this._getCodeButton = getCodeButton
      this._cheatingInput = cheatingInput
   }

   get textArea() {
      return this._textArea
   }
   get button() {
      return this._button
   }
   get output() {
      return this._output
   }

   get characters() {
      return characters
   }

   get characterWraper(){
      return this._characterWraper 
   }

   get changeInputButton(){
      return this._changeInputButton
   }

   get deleteButton(){
      return this._deleteButton
   }

   set characterWraper(value){
      this._characterWraper = value 
   }
   get tooltip(){
      return this._toollip
   }

   get getCodeButton(){
      return this._getCodeButton
   }

   get cheatingInput(){
      return this._cheatingInput
   }

   set cheatingInput(value){
      return this._cheatingInput = value
   }

   init() {
     
      this._textArea.addEventListener('input', this.getTheText.bind(this))

      this.deleteButton.addEventListener('click', this.deleteText.bind(this))

      this.changeInputButton.addEventListener('click', this.textToCode.bind(this))

      this.getCodeButton.addEventListener('click', this.getCode.bind(this))
   }

   getTheText() {
      this.output.innerHTML = ' ';
      this.textIntoArray = (this.textArea.value).toUpperCase().replace(/\s/g,'').split('');
      this.matchTheArrays()
      this.characterWraper = document.querySelectorAll('.decoder__characterWraper');
      this.tooltip.codeWrapper = this.characterWraper
      this.tooltip.init()
      
   }

   matchTheArrays() {
      let clienteText = {}
      
      for(let i = 0; i < this.textIntoArray.length; i++){
         let letter = this.textIntoArray[i];
         if(letter !== ' ') clienteText[`${i}`] = letter
      }

      let clienteTextLength = Object.keys(clienteText).length
      
      for(let i = 0; i < clienteTextLength; i++){         

         if(!this.characters[`${clienteText[i]}`] || this.characters[`${clienteText[i]}`].value == '#'){
            this.output.insertAdjacentHTML('beforeend', 
                  `<i data-letter="undefined" 
                        class="decoder__characterWraper">
                     ${this.characters['#'].code}
                     </i>`)
         }  else{
            
            this.output.insertAdjacentHTML('beforeend', 
                  `<i data-letter="${this.characters[`${clienteText[i]}`].value}" 
                     data-code="${this.characters[`${clienteText[i]}`].codeCharacter}"   
                     class="decoder__characterWraper">
                     ${this.characters[`${clienteText[i]}`].code}
                     </i>`)
         }         
      }
   }

   deleteText(){
      this.textArea.value = ''
      this.output.innerHTML = ''
   }

   textToCode(){
      if(!this.isClicked){
         this.changeInputButton.childNodes[0].innerText = 'Change to text mode'
         this.textArea.placeholder = "Type here the message you want to encrpyt (just '.' or '-')"
         this.textArea.value = ''
         this.output.innerHTML = ''
         this.isClicked = true
      } else{ 
         this.changeInputButton.childNodes[0].innerText = 'Change to code mode'
         this.textArea.placeholder = 'Type here the message you want to encrpyt (max 64 chars)'
         this.textArea.value = ''
         this.output.innerHTML = ''
         this.isClicked = false
      }
      
   }
   getCode({currentTarget}){
      
      let dataCode = document.querySelectorAll('[data-code]')
      let codeArr = []
      dataCode.forEach(element =>{
         codeArr.push(element.dataset.code)
      })
      let arrToStrind = codeArr.join('')
      this._cheatingInput.value = arrToStrind
      this._cheatingInput.select()
      document.execCommand('Copy');
   }


}

export default Decoder;