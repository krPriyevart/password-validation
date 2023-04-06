function visible()
{
    var a = document.getElementById("warning");
    var b = document.getElementById("upper");
    var c = document.getElementById("lower");  
    var d = document.getElementById("num");
    var e = document.getElementById("clength");
    a.style.display="block";
    b.style.display="block";
    c.style.display="block";
    d.style.display="block";
    e.style.display="block";
}


function check()
{
    var pass = document.getElementById("password").value;
    var scroll = document.getElementById("scroll");
    var tick = document.getElementById("tick");
    var warning = document.getElementById("warning");
    var upper = document.getElementById("upper");
    var lower = document.getElementById("lower");
    var num = document.getElementById("num");
    var countp = pass.length;
    var capital = /[A-Z]/g ;
    var small = /[a-z]/g ;
    var number = /[0-9]/g ;
    
    pass.match(capital)?upper.style.display= "none" :upper.style.display="block";
    pass.match(small)?lower.style.display= "none" :lower.style.display="block";
    pass.match(number)?num.style.display= "none" :num.style.display="block";
    
    if(countp >= 8 && pass.match(capital) && pass.match(small) && pass.match(number)){
       tick.style.display="block" ;
        scroll.style.display="none";
    }
    else{
        scroll.style.display="block";
         tick.style.display="none" ;
     
    }
    if(countp == 0){
        tick.style.display="none" ;
        scroll.style.display="none";
    }
    if(pass.match(capital) && pass.match(small) && pass.match(number) ){
        warning.style.display="none" ;
    }
    else{
        warning.style.display="block"  ;
    }
    
}
function tick()
{
    var x = document.getElementById("password");
     
    if(x.type==="password"){
        x.type="text";
    }
    else{
        x.type="password";
    }
    
    
}