
var textarea = document.querySelector('textarea')

textarea.addEventListener('input',()=>{
    
    if(String(textarea.value).length > 100){
        document.write(`limite de caracteres atingido`)
    }

})