var oli = document.getElementsByTagName("li");
for(var i = 0;i < oli.length;i++){
    oli[i].onclick = function(){
        alert(oli[i].innerText);
    }
}