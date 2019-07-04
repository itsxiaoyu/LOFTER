window.onload=function(){
    var omshow=document.getElementById('mshow');
    var ombtn=document.getElementById('mbtn');
    var oshow=document.getElementById('show');
    var obtn=document.getElementById('sbtn');
    ombtn.onmouseover=function(e){
        e.cancelBubble = true;
        omshow.style.display="block";
    };
    ombtn.onmouseout=function(e){
        omshow.style.display="none";
    };
    obtn.onclick = function(e){
        e.cancelBubble = true;
        oshow.style.display='block';
    };
     window.onclick=function(e){
        mshow.style.display='none';
        oshow.style.display='none';
     }
};