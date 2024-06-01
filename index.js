function funMyAge(){
    let x = document.getElementById("input").value;
    let ip = new Date(x);
    let y = document.getElementById("output");

    let z = new Date();

    let ay = z.getFullYear()-ip.getFullYear();

    if(ip.getMonth() > z.getMonth()){
        
    }

    let am = z.getMonth()-ip.getMonth();
    let ad = z.getDay()-ip.getDay();


    y.innerHTML = "Your age is "+ ay +" " +am+  " "+ad+  " ";

}