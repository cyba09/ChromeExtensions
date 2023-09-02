chrome.webRequest.onBeforeSendHeaders.addListener(
  function (info) {
    const requirements =
      (info.method === "GET") &&
      info.url.includes("api/portraits");
      if (requirements){
        (async () => {
          const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
          const response = await chrome.tabs.sendMessage(tab.id, {greeting: "hello"});
          // do something with response here, not outside the function
          console.log(response);
        })();
      }
    }
    
  ,
  {
    urls: ["https://randomuser.me/*"],
  },
  [ "requestHeaders"]
);

//"https://betgames9.betgames.tv/s/web/v1/odds/limits"
//https://game3.betgames.tv/s/web/v1/odds/limits?bets%5B0%5D%5Bodd_id%5D=591&bets%5B0%5D%5Bodd_value%5D=225&bets%5B0%5D%5Brun_id%5D=24607147
//https://www.vegasbets.co.za/partner/bet-games
//https://randomuser.me/api/