
class Tooltip {
    constructor(){
        this._codeWrapper;
    }
    get codeWrapper(){
        return this._codeWrapper;
    }
    set codeWrapper(value){
        return this._codeWrapper = value
    }

    init(){
        this.codeWrapper.forEach(element => {
           element.addEventListener('mouseover', this.activeToolip.bind(this));
        })
        this.codeWrapper.forEach(element => {
           element.addEventListener('mouseout', this.desactiveToolip.bind(this));
        })
    }
    
    activeToolip({target}){
        this.createTooltip(target)
        
    }

    createTooltip(value){
        let toolTip = document.createElement('I');
        toolTip.innerText = value.getAttribute('data-letter')
        toolTip.classList.add('decoder__toolTip')
        value.appendChild(toolTip)
        value.style.backgroundColor = 'green'
        
    }

    desactiveToolip({target}){
        this.removeTooltip(target)
        target.style.backgroundColor = 'transparent'
    }

    removeTooltip(value){
        value.lastChild.remove()
        
       
    }
}

export {Tooltip}