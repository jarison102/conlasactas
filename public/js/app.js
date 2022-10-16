var check=document.querySelector(".check");
check.addEventListener('click',idioma);
function idioma(){
let id=check.checked;
if(id==true){
    location.href="/static/es/educacion.ejs"
}else{
    location.href="/educacion.html";
}
}

