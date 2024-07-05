const clicks = document.getElementsByClassName("card");
for(let i=0;i<clicks.length;i++){
    clicks[i].addEventListener("click", function(){
        let target = clicks[i].querySelector("a");
        window.location.href = target.href;
    })
}
