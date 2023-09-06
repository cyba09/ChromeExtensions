chrome.webRequest.onBeforeSendHeaders.addListener(
  async function (info) {
    const requirements =
      (info.method === "POST") &&
      info.url.includes("partner-odd-limits");
      if (requirements){
        const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
        const response = await chrome.tabs.sendMessage(tab.id, {greeting: "hello"});
        console.log(response.reply)
       
      }
    }
    
  ,
  {
    urls: ["https://game3.betgames.tv/*"],
  },
  [ "requestHeaders"]
);

//"https://betgames9.betgames.tv/s/web/v1/odds/limits"
//https://game3.betgames.tv/s/web/v1/odds/limits?bets%5B0%5D%5Bodd_id%5D=591&bets%5B0%5D%5Bodd_value%5D=225&bets%5B0%5D%5Brun_id%5D=24607147
//https://www.vegasbets.co.za/partner/bet-games
/*
 //send a get request contents script
        const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
        const response = await chrome.tabs.sendMessage(tab.id, {greeting: "hello"});
        console.log(response.reply)
 */