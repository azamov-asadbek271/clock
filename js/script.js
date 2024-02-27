
// function clock() {
//    console.log("hello "); 
// }

// setTimeout( clock,2000)




// let clock = 100; 
// setInterval (() => {
//     clock--;
//     console.log(clock);
// }, 2000);

 

function clock() {
    let hour = document.querySelector(".hour")
    let minute = document.querySelector(".minut")
    let secunds = document.querySelector(".secund")
    
 

    let h = new Date().getHours() < 10 ? '0'+ new Date().getHours() :new Date().getHours();                                                           
    let m = new Date().getMinutes() < 10 ? '0'+ new Date().getMinutes() :new Date().getMinutes();                                                           
    let s = new Date().getSeconds() < 10 ? '0'+ new Date().getSeconds() :new Date().getSeconds();                                                                                                                                                                                                                                                                                                          
    hour.innerHTML = h;
    minute.innerHTML = m;
    secunds.innerHTML = s;

}
setInterval(clock,1000);