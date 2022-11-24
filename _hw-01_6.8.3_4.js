    
function counter(start, finish) {
  
    let intervalId = setInterval(function() {
                                console.log(start++);
                                if (start > finish) {
                                clearInterval(intervalId);
                                };}, 1000);
    }   

counter (3, 10)