var cont = 1


document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 2000)


function proximaImg(){
    cont++

    if(cont > 6){
        
    }

    document.getElementById(`radio${cont}`).checked = true
}