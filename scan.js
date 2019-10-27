// pagina de referencia para testes: https://www.google.com/search?q=mia+kalifa&sxsrf=ACYBGNQoKE9czkj4WkOEqJPZbnKgaFlu5Q:1572195779881&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiaoejX9bzlAhUrLLkGHTYyAnkQ_AUIEygC&biw=1242&bih=633

function scanPage(){
    let imgs = document.getElementsByTagName('img');
    for( imgElt of imgs) {
     console.log(imgElt.src);
    }
}

scanPage();
