var prev=document.getElementById('prev');
var next=document.getElementById('next');
var close=document.getElementById('close');
var Boxcontainer=document.getElementById('Boxcontainer');
var Boxitem=document.getElementById('Boxitem');

var pharr= Array.from(document.querySelectorAll(".row img"));
 var indx=0;
// choose photo
for(let i=0;i<pharr.length;i++){
pharr[i].addEventListener("click",function(){
indx=i;
 Boxcontainer.style.display = "flex";
 Boxitem.style.backgroundImage=`url(${pharr[i].src})`
});
}

//next
next.addEventListener("click", function() {
    indx++;
    if(indx == pharr.length)
        indx = 0;
    Boxitem.style.backgroundImage = `url(${pharr[indx].src})`;
});

prev.addEventListener("click", function() {
    indx--;
    if(indx < 0)
        indx = pharr.length - 1;
    Boxitem.style.backgroundImage = `url(${pharr[indx].src})`;
});

close.addEventListener("click", function() {
   Boxcontainer.style.display="none"
});
Boxcontainer.addEventListener("click", function(e) {
   if(e.target==Boxcontainer)
    Boxcontainer.style.display="none"
});