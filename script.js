
function openVideo(url){
    document.getElementById("mainPage").style.display="none";
    document.getElementById("playerPage").style.display="block";
    document.getElementById("player").src=url;
}

function backToMenu(){
    document.getElementById("playerPage").style.display="none";
    document.getElementById("mainPage").style.display="block";
    document.getElementById("player").src="";
}