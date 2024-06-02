const dateInput = document.getElementById('input');
const today = new Date().toISOString().split('T')[0];
dateInput.setAttribute('max', today);


function funMyAge(){

    let x = document.getElementById("input").value;
    let ip = new Date(x);
    let y = document.getElementById("output");

    if (!Date.parse(x)) {
        alert("Please enter a valid date.");
        return;
    }

    let z = new Date();

    let ay = z.getFullYear()-ip.getFullYear();
    let am = z.getMonth()-ip.getMonth();
    let ad = z.getDate()-ip.getDate();


    if(am<0 || (am===0 && ad < 0)){
        ay--;
        am+=12;
    }

    if (ad < 0){
        am--;
        let dd = new Date(ip.getFullYear(), ip.getMonth(), 0);
        ad += dd.getDate();
    }

    y.innerHTML = "Your age is "+ ay +" years " +am+  " months "+ad+  " days.";

}
