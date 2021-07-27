function pesquisar() {
    var input, filtro, menu, menuitens, links; 
    input = document.getElementsById("pesquisa"); 
    filtro = input.Value.toUpperCase(); 
    menu = document.getElementById("menu"); 
    menuitens = menu.getElementsByTagName("li");
    for(var i=0; i<menuitens.length;i++){
    links = menuitens[i].getElementsByTagName("a")[0]; 
        if(links.innerhtml.toUpperCase().indexOf(filtro)>-1){
            menuitens[i].style.display="";
        }else{
            menuitens[i].style.display="none"; 
        }
    }
}