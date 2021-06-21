function digitalClock(){
    let date = new Date()
    
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

     let value = document.querySelector('#time') 
     
      let valueText = document.querySelector('small')
      valueText.innerText = "AM"
      if(hours === 0){
          hours = 12;
      }
      if(hours > 12){
        hours = hours-12;
        
      }
      
      hours = hours < 10 ? `0${hours}`:`${hours}`
      minutes = minutes < 10 ? `0${minutes}`:`${minutes}`
      seconds = seconds < 10 ? `0${seconds}`:`${seconds}`

      value.innerText = `${hours}:${minutes}:${seconds}`
      valueText.innerText = hours < 12 ? "AM":"PM"
      setInterval(digitalClock,1000)
}
digitalClock()

 