// alert('PORTIFOLIO EM EM FASE DE FINALIZAÇAO')

setTimeout(apresentarModal, 3000)
function apresentarModal() {

    var modal = document.querySelector(".modal")

    if (modal != null) {

        document.querySelector('.modal').style.display = 'block'

        document.querySelector('.modal a').addEventListener('click', function () {
            document.querySelector('.modal').style.display = 'none'
        })


    }
}

let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
}, 5000)


function nextImage(){
    count++
    if(count > 5) {
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}

var blog = document.querySelector('.blog');
