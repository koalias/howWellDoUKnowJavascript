document.addEventListener('DOMContentLoaded', () => {
    const timeLeftDisplay = document.queryselector('#time-left')
    let timeLeft = 1000

    function countDown(){
        setInterval(function(){
            if(timeLeft <= 0 ) {
                clearInterval(timeLeft = 0)
            }
            timeLeftDisplay.innerHTML = timeLeft
            timeLeft -=1  
        }, 1000)
    }
});