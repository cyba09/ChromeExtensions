



let num = 0
let runn = false
let stWhole = ''



chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {

        if (request.greeting === "hello") {

            const members = document.querySelector('span.xi81zsa > strong');
            st = members.textContent
            num = st.replace(/[^0-9]/g, '')
            sendResponse({ farewell: num });
        }
        if (request.greeting === "download") {


            let nIntervId = setInterval(() => {
                window.scrollBy(0, 1000);
                let lenLst = document.querySelectorAll('.x1rdy4ex > div')
                xx = lenLst.length
                console.log(lenLst.length)
                if (num == xx + 1) {
                    let lenLst = document.querySelectorAll('.x1rdy4ex > div')
                    lenLst.forEach(element => {
                        try {
                            link = element.querySelector('a').getAttribute('href')
                            stWhole += `${link}\n`
                        }
                        catch {

                        }

                    });
                    var element = document.createElement('a');
                    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(stWhole));
                    element.setAttribute('download', "memberUID.txt");

                    element.style.display = 'none';
                    document.body.appendChild(element);

                    element.click();

                    document.body.removeChild(element);
                    clearInterval(nIntervId);
                }
            }, 500, num)


        }

    }
);

