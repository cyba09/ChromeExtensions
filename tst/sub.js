setInterval(run,5000)

function run(){
  //const iframe = document.querySelector('#hh')
  const ele = document.getElementsByClassName('card_title')
  try {
    const ele = document.getElementsByClassName('card_title')
    console.log(ele[0].textContent)
  } catch (error) {
    
  }
  //const data = ele.innerHTML
  
  //chrome.runtime.sendMessage({sendBack:true, data:data});

}


