function mudouTamanho(){
    if (window.innerWidth >= 568){
        itens.style.display = 'block'
    }else{
        itens.style.display = 'none'
    }
}
function clickMenu(){
    if (itens.style.display == 'block'){
        itens.style.display = 'none'
    } else{
        itens.style.display = 'block'
    }
}
var radio = document.querySelector('.manual-btn')
var cont = 1
document.getElementById('radio1').checked = true
setInterval(() => {
    proximaImg()
}, 5000)
function  proximaImg(){
    cont++
    if(cont > 3){
        cont = 1
    }
    document.getElementById('radio'+cont).checked = true
}