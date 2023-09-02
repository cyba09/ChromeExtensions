

const red = {
                'puWpfMexarpwKa5jwBG5': 1,
                 'p6cqxC8yvdgj57q7EqVq' : 5,
                 'jSwn1KnCzQBKX2H1rLcX' : 4,
                 'IvsBKA43d7HH6EDoFyRA' : 3,
                 'RTGMOpv4oTYsGy6hmSF8' : 2,
                 'oScA4Nbf3OAji4POvyA2' : 6
            }

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {

        if (request.greeting === "hello") {
            let num = 'greetings from contents'
            
            //return dice
            //zAHNhVC8k5xac481W8f_
            var iframe = document.querySelector('iframe');
            var elmnt = iframe.contentWindow.document.querySelector('[data-qa="area-result-dice-0"]')
            
            //const cls = document.querySelector('[data-qa="area-result-dice-0"]')
            //const last_red = cls.getAttribute('class')
            //const myArray = last_red.split(" ");
            //let red_class = myArray[myArray.length - 1];
            console.log(elmnt)
            sendResponse({ reply: num });


        }

    }
);