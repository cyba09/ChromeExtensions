//================================================
/*

Simple
Chrome extension Manifest V3 Tutorial
Copyright (C) 2022 Stefan vd
www.stefanvd.net

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.


To view a copy of this license, visit http://creativecommons.org/licenses/GPL/2.0/

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

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {

        if (request.greeting === "hello") {
            let num = 0
            png = []



            const links = document.querySelectorAll('a');
            links.forEach(element => {
                att = element.getAttribute('href')
                if (att) {
                    try {
                        if (att.endsWith('pdf')) {
                            png.push(att)
                        }
                    } catch (error) {
                        console.log(error)
                    }
                }

            });
            num = png.length
            sendResponse({ farewell: num });
        }
        if (request.greeting === "download") {
            png.forEach(element => {
                chrome.runtime.sendMessage({ url: element });
            });
        }

    }
);