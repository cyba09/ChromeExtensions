//================================================
/*


*/
//================================================
/*
let num = 1
png = []



const links = document.querySelectorAll('img');
links.forEach(element => {
    att = element.getAttribute('src')
    if (att){
    try {
        if (att.endsWith('.jpg ')){
            png.push(att)
        }
    } catch (error) {
        console.log(error)
    }}
    
});

num = png.length + 1


if (num){
    var newdiv = document.createElement("div");
    newdiv.id = "hellothere";
    newdiv.style.background = "red";
    newdiv.style.color = "white";
    newdiv.style.zIndex = 1000;
    newdiv.style.position = "fixed";
    newdiv.style.bottom = "50px";
    newdiv.style.right = "50px";
    newdiv.style.width = "50px";
    newdiv.style.height = "50px";
    newdiv.style.display = "flex";
    newdiv.style.justifyContent = "center";
    newdiv.style.borderRadius = "50%";
    newdiv.style.alignItems = "center";
    newdiv.style.cursor = "pointer"
    newdiv.innerText = num;
    document.body.appendChild(newdiv)

    const btn = document.querySelector('#hellothere')

    btn.addEventListener('click',function(){
        png.forEach(element => {
            chrome.runtime.sendMessage({ url: element });
        });
        
    })
}

*/

chrome.runtime.sendMessage({ url: "hello" })