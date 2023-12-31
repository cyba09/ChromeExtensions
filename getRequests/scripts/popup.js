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
document.addEventListener('DOMContentLoaded', function() {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {type:"msg_from_popup"}, function(response){
		alert(response)
		});
	});
})
*/



document.addEventListener('DOMContentLoaded', function () {
	init()
	const btn_elememnt = document.querySelector('#btn')
	btn_elememnt.addEventListener('click', Download)

	async function init() {
		const spn = document.querySelector('#num')
		const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
		const response = await chrome.tabs.sendMessage(tab.id, {greeting: "hello"});
		spn.textContent = response.farewell
		// do something with response here, not outside the function
	  }
	
	  async function Download(){
		const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
		const response = await chrome.tabs.sendMessage(tab.id, {greeting: "download"});
	  }
})