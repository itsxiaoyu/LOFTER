window.onload=function(){
    var oPtion=document.getElementById('option');
    var aLi=oPtion.getElementsByTagName('li');
    var oDiv = document.getElementsByClassName('form1');
    var oEmail=document.getElementById('email');
    var oPwd=document.getElementById('pwd');
    for (var i = 0; i < aLi.length; i++) {
        aLi[i].index = i;
        aLi[i].onclick = function(){
            for (var i = 0; i < aLi.length; i++) {
                aLi[i].className = '';
                oDiv[i].style.display = 'none';
            }
                 this.className = 'login';
                 oDiv[this.index].style.display = 'block';
        }
    }
    oEmail.onclick=function(e){
        e.cancelBubble = true;
        oEmail.placeholder='';
    };
    window.onclick=function(e){
        e.cancelBubble = true;
        oEmail.placeholder='常用邮箱/网易邮箱';
    }
    oPwd.onclick=function(e){
        e.cancelBubble = true;
        oPwd.placeholder='';
    };
    
}