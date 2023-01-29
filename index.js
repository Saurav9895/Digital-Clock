function Clock(){
    let Time= new Date();
    let CurrTime = Time.toLocaleTimeString();
    document.getElementById('clkId').innerHTML=CurrTime;

}
let ChangeTime = setInterval(Clock,1000)