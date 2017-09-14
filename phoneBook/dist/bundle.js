!function(t){function e(a){if(n[a])return n[a].exports;var i=n[a]={i:a,l:!1,exports:{}};return t[a].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,a){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:a})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e,n){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),s=function(){function t(e){a(this,t),this.url=e}return i(t,[{key:"requestUsers",value:function(){return fetch(this.url).then(function(t){return t.json()})}},{key:"addUser",value:function(t,e){fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}},{key:"editContact",value:function(t,e){fetch(t,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).catch(function(t){return console.error(t)})}},{key:"deleteContact",value:function(t){console.log(t),fetch(t,{method:"DELETE"}).catch(function(t){return console.error(t)})}}]),t}(),r=new s("http://easycode-js.herokuapp.com/maksimVorobyov/users");e.default=r},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function i(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),c=n(0),o=(a(c),n(2)),l=a(o),d=n(3),u=a(d),p=n(4),h=a(p),f=n(5),v=a(f),y=n(6),m=a(y),b=function(){function t(){s(this,t),this.state={db:{users:[],activeUsers:[],selectedUser:1,lastMessages:[],sortedUsers:[]},locals:{forms:{input:"qweqwe"}}},this.ui={index:new l.default(this.state),keypad:new u.default(this.state),addUser:new h.default(this.state),editContact:new v.default(this.state),user:new m.default(this.state)}}return r(t,[{key:"createFooter",value:function(){var t=document.querySelector("body"),e=document.createElement("footer");e.className="footer",t.appendChild(e),e.innerHTML='<div class="container bottom-radius">\n          <nav class="main-nav">\n    \t\t\t\t<a href="index.html" class="tab active">\n    \t\t\t\t\t<span class="glyphicon glyphicon-search" aria-hidden="true"></span>\n    \t\t\t\t\t<span class="tab-text">Contacts</span>\n    \t\t\t\t</a>\n    \t\t\t\t<a href="keypad.html" class="tab">\n    \t\t\t\t\t<span class="glyphicon glyphicon-th" aria-hidden="true"></span>\n    \t\t\t\t\t<span class="tab-text">Keypad</span>\n    \t\t\t\t</a>\n    \t\t\t\t<a href="add-user.html" class="tab">\n    \t\t\t\t\t<span class="glyphicon glyphicon-plus" aria-hidden="true"></span>\n    \t\t\t\t\t<span class="tab-text">Add user</span>\n    \t\t\t\t</a>\n          </nav>\n        </div>'}},{key:"init",value:function(){this.render(),this.router()}},{key:"router",value:function(){var t=this;window.addEventListener("load",function(e){var n=[].concat(i(document.querySelectorAll(".tab")));n.forEach(function(e){var a=e.getAttribute("href");e.addEventListener("click",function(i){i.preventDefault(),n.forEach(function(t){t.classList.remove("active")}),e.classList.toggle("active"),"keypad.html"===a&&t.ui.keypad.render(),"index.html"===a&&t.ui.index.render(),"add-user.html"===a&&t.ui.addUser.render(),history.pushState(a,a,a)})})}),window.addEventListener("popstate",function(t){})}},{key:"render",value:function(){this.ui.index.render(),this.createFooter()}}]),t}(),g=new b;g.init(),e.default=g},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),r=n(0),c=a(r),o=n(1),l=a(o),d=function(){function t(e){i(this,t),this.appState=e,this.app=document.querySelector("#app")}return s(t,[{key:"createTag",value:function(t,e,n){n=n||!1;var a=document.createElement(t);return n&&(a.className=n),e.appendChild(a),a}},{key:"renderUsers",value:function(t){var e=this;c.default.requestUsers().then(function(n){e.appState.db.users=n,e.appState.db.sortedUsers=n;var a=e.createTag("table",t,"table table-hover contacts");a.innerHTML="<thead><tr><th>Full Name</th><th>Phone</th><th>Email</th></tr></thead>";var i=e.createTag("tbody",a);e.createTR(i,n),e.tableSort(e.appState.db.sortedUsers),e.getUser(e.appState.db.sortedUsers)})}},{key:"createSearchBlock",value:function(t){this.createTag("form",t,"form-inline search-form").innerHTML='<div class="form-group">\n                <label class="sr-only" for="search">Search</label>\n                <input type="text" class="form-control" id="search" placeholder="Search">\n              </div>'}},{key:"createTR",value:function(t,e){var n="";e.forEach(function(t){n+="<tr><td>"+t.fullName+"</td><td>"+t.phone+"</td><td>"+t.email+"</td></tr>"}),t.innerHTML=n}},{key:"tableSort",value:function(t){var e=this,n=document.querySelectorAll("th");document.querySelector("thead").addEventListener("click",function(a){var i=a.target,s=void 0;i===n[0]&&(s="fullName"),i===n[1]&&(s="phone"),i===n[2]&&(s="email");var r=t.sort(function(t,e){return t[s]>e[s]}),c=document.querySelector("tbody");c.innerHTML="",e.appState.db.sortedUsers=r,e.createTR(c,r)})}},{key:"getUser",value:function(t){var e=this,n="user.html";document.querySelector("tbody").addEventListener("click",function(t){var a=t.target.parentElement.rowIndex-1;e.appState.db.selectedUser=a,l.default.ui.user.render(),history.pushState(n,n,n)})}},{key:"header",value:function(){this.createTag("header",this.app,"header").innerHTML='<div class="container top-radius"><h2>Contacts</h2></div>'}},{key:"main",value:function(){var t=this.createTag("main",this.app),e=this.createTag("div",t,"container");this.createSearchBlock(e),this.renderUsers(e)}},{key:"render",value:function(){this.app.innerHTML="",this.header(),this.main()}}]),t}();e.default=d},function(t,e,n){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),s=function(){function t(e){a(this,t),this.appState=e,this.app=document.querySelector("#app")}return i(t,[{key:"createTag",value:function(t,e,n){n=n||!1;var a=document.createElement(t);return n&&(a.className=n),e.appendChild(a),a}},{key:"createNumberHolder",value:function(t){this.createTag("div",t,"keypad-holder").innerHTML='<div class="number"><span id="addUser" class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>\n    \t\t\t\t<span class="numbers"></span>\n    \t\t\t\t<span id="deleteNumber" class="glyphicon glyphicon-circle-arrow-left" aria-hidden="true"></span></div>\n    \t\t\t\t<div class="keypad-holder"><button class="key">1</button><button class="key">2</button><button class="key">3</button><button class="key">4</button><button class="key">5</button><button class="key">6</button><button class="key">7</button><button class="key">8</button><button class="key">9</button><button class="key">*</button><button class="key">0</button><button class="key">#</button><button class="key key-call"><span class="glyphicon glyphicon-earphone" aria-hidden="true"></span></button></div>'}},{key:"transformPhoneNumber",value:function(t,e){t.textContent.length<14&&(t.textContent?4===t.textContent.length?t.textContent+=") "+e:9===t.textContent.length?t.textContent+="-"+e:t.textContent+=e:t.textContent+="("+e)}},{key:"funcCalling",value:function(){var t=this,e=document.querySelector(".numbers");document.querySelector(".keypad-holder").addEventListener("click",function(n){"key"===n.target.className&&t.transformPhoneNumber(e,n.target.textContent)})}},{key:"funcKeyDown",value:function(){var t=this,e=document.querySelector(".numbers"),n=function(n){if((+n.key>=0||"*"===n.key||"#"===n.key)&&t.transformPhoneNumber(e,n.key),"Backspace"===n.key){null!==document.querySelector(".numbers")&&t.funcDeleteNumber()}};window.addEventListener("keyup",n)}},{key:"funcDeleteNumber",value:function(t){var e=document.querySelector(".numbers"),n=e.textContent,a=n.slice(0,n.length-1);e.textContent=a}},{key:"funcDeleteNumberFromBtn",value:function(){var t=this;document.querySelector("#deleteNumber").addEventListener("click",function(e){t.funcDeleteNumber(e)})}},{key:"header",value:function(){this.createTag("header",this.app,"header").innerHTML='<div class="container top-radius"><h2>Keypad</h2></div>'}},{key:"events",value:function(){this.funcCalling(),this.funcDeleteNumberFromBtn(),this.funcKeyDown()}},{key:"main",value:function(){var t=this.createTag("main",this.app),e=this.createTag("div",t,"container");this.createNumberHolder(e),this.events()}},{key:"render",value:function(){this.app.innerHTML="",this.header(),this.main()}}]),t}();e.default=s},function(t,e,n){"use strict";function a(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),r=n(0),c=function(t){return t&&t.__esModule?t:{default:t}}(r),o=function(){function t(e){i(this,t),this.appState=e,this.appHTML=document.querySelector("#app"),this.phoneBlock="",this.url="http://easycode-js.herokuapp.com/maksimVorobyov/users"}return s(t,[{key:"createTag",value:function(t,e,n){n=n||!1;var a=document.createElement(t);return n&&(a.className=n),e.appendChild(a),a}},{key:"header",value:function(){this.createTag("header",this.appHTML,"header").innerHTML='<div class="container top-radius"><nav class="user-top-line">\n    \t\t\t\t<a href="index.html" id="cancel">Cancel</a>\n    \t\t\t\t<button class="done-btn" id="done">Done</button>\n    \t\t\t</nav></div>'}},{key:"createMainInfo",value:function(t){this.createTag("div",t,"edit-main-info").innerHTML='<div class="edit-foto">\n    \t\t\t\t\t<button class="add-foto-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>\n    \t\t\t\t\t  <input type="file" id="photo" class="file add-btn">\n    \t\t\t\t\t\t<span>add foto</span></button>\n    \t\t\t\t</div> \n    \t\t\t\t<div class="main-info-holder">\n    \t\t\t\t\t<div class="edit-field">\n    \t\t\t\t\t\t<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>\n\t\t\t\t\t\t\t\t<span class="add-label">First name</span>\n\t\t\t\t\t\t\t\t<span class="contentedit" id=\'fullName\' contenteditable="true"></span>\n    \t\t\t\t\t\t\n    \t\t\t\t\t</div>\n    \t\t\t\t\t<div class="edit-field">\n    \t\t\t\t\t\t<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>\n\t\t\t\t\t\t\t\t<span class="add-label">Last name</span>\n\t\t\t\t\t\t\t\t<span class="contentedit" id=\'lastname\' contenteditable="true"></span>\n    \t\t\t\t\t</div>\n    \t\t\t\t\t<div class="edit-field">\n    \t\t\t\t\t\t<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>\n\t\t\t\t\t\t\t\t<span class="add-label">Company</span>\n\t\t\t\t\t\t\t\t<span class="contentedit" id=\'company\' contenteditable="true"></span>\n    \t\t\t\t\t</div>\n    \t\t\t\t</div> '}},{key:"createInfo",value:function(t){this.createTag("div",t,"scroll-holder").innerHTML='<div class="edit-info"><div class="edit-field">\n      \t\t\t\t\t\t<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>\n      \t\t\t\t\t\t<span class="add-label">add phone</span>\n      \t\t\t\t\t\t<span class="contentedit" id=\'phone\' contenteditable="true"></span>\n      \t\t\t\t\t\t\n      \t\t\t\t\t</div><div class="edit-field">\n      \t\t\t<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>\n      \t\t\t<span class="add-label">add email</span>\n\t\t\t\t\t\t<span class="contentedit" id=\'email\' contenteditable="true"></span>\n      \t\t\t\n      \t\t\t\t\t</div>\n      \t\t\t<div class="edit-field">\n      \t\t\t\t<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>\n      \t\t\t\t<span class="add-label">Add address</span>\n\t\t\t\t\t\t\t<span class="contentedit" id=\'address\' contenteditable="true"></span>\n      \t\t\t\t\n            </div>\n            <div class="edit-field">\n              <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>\n              <span class="add-label">Add birthday</span>\n\t\t\t\t\t\t\t<span class="contentedit" id=\'birthday\' contenteditable="true"></span>\n              \n              </div>\n            <div class="edit-field">\n              <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>\n              <span class="add-label">Add social profile</span>\n\t\t\t\t\t\t\t<span class="contentedit" id=\'socialProfile\' contenteditable="true"></span>\n            </div>\n            <div class="edit-field">\n              <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>\n              <span class="add-label">Add field</span>\n\t\t\t\t\t\t\t<span class="contentedit" id=\'addField\' contenteditable="true"></span>\n            </div>\n              <div class="edit-field">\n                <button href="#" class="delete-contact" id="clear">clear fields</button>\n              </div>\n            </div> '}},{key:"sendData",value:function(){var t=this;document.querySelector("#done").addEventListener("click",function(e){var n={};[].concat(a(document.querySelectorAll(".contentedit"))).forEach(function(t){n[t.id]=t.textContent}),c.default.addUser(t.url,n),alert("User added!!!")})}},{key:"clearData",value:function(){var t=document.querySelector("#clear"),e=document.querySelectorAll(".contentedit");t.addEventListener("click",function(t){[].concat(a(e)).forEach(function(t){t.textContent=""})})}},{key:"phoneCheck",value:function(){function t(t){var e,n;e=document.createRange(),e.selectNodeContents(t),e.collapse(!1),n=window.getSelection(),n.removeAllRanges(),n.addRange(e)}function e(t){return t=t.slice(0,13),t.replace(/\D/g,"").replace(/^(\d)/,"($1").replace(/^(\(\d{3})(\d)/,"$1) $2").replace(/(\d{3})(\d{1,4})/,"$1-$2").replace(/(-\d{4})\d+?$/,"$1")}var n=document.querySelector("#phone");n.addEventListener("keydown",function(a){"Backspace"!==a.key&&(n.textContent=e(n.textContent),t(n))})}},{key:"main",value:function(){var t=this.createTag("main",this.appHTML),e=this.createTag("div",t,"container");this.createMainInfo(e),this.createInfo(e),this.sendData(),this.clearData(),this.phoneCheck()}},{key:"render",value:function(){this.appHTML.innerHTML="",this.header(),this.main()}}]),t}();e.default=o},function(t,e,n){"use strict";function a(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),r=n(0),c=function(t){return t&&t.__esModule?t:{default:t}}(r),o=function(){function t(e){i(this,t),this.appState=e,this.appHTML=document.querySelector("#app"),this.url="http://easycode-js.herokuapp.com/maksimVorobyov/users"}return s(t,[{key:"createTag",value:function(t,e,n){n=n||!1;var a=document.createElement(t);return n&&(a.className=n),e.appendChild(a),a}},{key:"header",value:function(){var t=this.createTag("header",this.appHTML,"header");this.createTag("div",t,"container top-radius").innerHTML='<nav class="user-top-line">\n    \t\t\t\t<a href="index.html" id="cancel">Cancel</a>\n    \t\t\t\t<button class="done-btn" id="done">Done</button>\n    \t\t\t</nav>'}},{key:"createMainInfo",value:function(t){var e=this.appState.db.selectedUser,n=this.appState.db.users[e];this.createTag("div",t,"edit-main-info").innerHTML='<div class="edit-foto">\n       \t\t\t\t\t<img src="img/avatar.jpg" alt="#" class=" user-img img-circle center-block">\n       \t\t\t\t</div>\n        \t\t\t\t<div class="main-info-holder">\n       \t\t\t\t\t<div class="edit-field">\n        \t\t\t\t\t\t<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>\n        \t\t\t\t\t\t<span class="add-label">First name</span>\n                    <span class="contentedit" id=\'fullName\' contenteditable="true">'+n.fullName+'</span>\n        \t\t\t\t\t</div>\n        \t\t\t\t\t<div class="edit-field">\n        \t\t\t\t\t\t<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>\n        \t\t\t\t\t\t<span class="add-label">Last name</span>\n                    <span class="contentedit" id=\'lastname\' contenteditable="true"></span>\n        \t\t\t\t\t</div>\n        \t\t\t\t\t<div class="edit-field">\n        \t\t\t\t\t\t<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>\n        \t\t\t\t\t\t<span class="add-label">Company</span>\n                    <span class="contentedit" id=\'company\' contenteditable="true"></span>\n        \t\t\t\t\t</div>\n        \t\t\t\t</div> '}},{key:"createInfo",value:function(t){var e=this.appState.db.selectedUser,n=this.appState.db.users[e];this.createTag("div",t,"scroll-holder").innerHTML='<div class="edit-info"><div class="edit-field">\n          \t\t\t\t\t\t<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>\n          \t\t\t\t\t\t<span class="add-label">add phone</span>\n                      <span class="contentedit" id=\'phone\' contenteditable="true">'+n.phone+'</span>\n          \t\t\t\t\t</div><div class="edit-field">\n          \t\t\t<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>\n          \t\t\t<span class="add-label">add email</span>\n                <span class="contentedit" id=\'email\' contenteditable="true">'+n.email+'</span>\n          \t\t\t\n          \t\t\t\t\t</div>\n          \t\t\t<div class="edit-field">\n          \t\t\t\t<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>\n          \t\t\t\t<span class="add-label">Add address</span>\n                  <span class="contentedit" id=\'address\' contenteditable="true"></span>\n                </div>\n                <div class="edit-field">\n                  <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>\n                  <span class="add-label">Add birthday</span>\n                  <span class="contentedit" id=\'birthday\' contenteditable="true"></span>\n                  </div>\n                <div class="edit-field">\n                  <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>\n                  <span class="add-label">Add social profile</span>\n                  <span class="contentedit" id=\'socialProfile\' contenteditable="true"></span>\n                </div>\n                <div class="edit-field">\n                  <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>\n                  <span class="add-label">Add field</span>\n                  <span class="contentedit" id=\'addField\' contenteditable="true"></span>\n                </div>\n                  <div class="edit-field">\n                    <button href="#" class="delete-contact" id="delete">delete contact</button>\n                  </div>\n                </div> '}},{key:"sendEditData",value:function(){var t=this,e=this.appState.db.selectedUser,n=this.appState.db.users[e]._id;document.querySelector("#done").addEventListener("click",function(e){var i={};[].concat(a(document.querySelectorAll(".contentedit"))).forEach(function(t){i[t.id]=t.textContent}),console.log(i),c.default.editContact(t.url+"/"+n,i),alert("User info changed")})}},{key:"deleteContact",value:function(){var t=this,e=document.querySelector("#delete"),n=this.appState.db.selectedUser,a=this.appState.db.users[n]._id;e.addEventListener("click",function(e){console.log(a),console.log(t.url+"/"+a),c.default.deleteContact(t.url+"/"+a),alert("User deleted!!!")})}},{key:"phoneCheck",value:function(){function t(t){var e,n;e=document.createRange(),e.selectNodeContents(t),e.collapse(!1),n=window.getSelection(),n.removeAllRanges(),n.addRange(e)}function e(t){return t=t.slice(0,13),t.replace(/\D/g,"").replace(/^(\d)/,"($1").replace(/^(\(\d{3})(\d)/,"$1) $2").replace(/(\d{3})(\d{1,4})/,"$1-$2").replace(/(-\d{4})\d+?$/,"$1")}var n=document.querySelector("#phone");n.addEventListener("keydown",function(a){"Backspace"!==a.key&&(n.textContent=e(n.textContent),t(n))})}},{key:"main",value:function(){var t=this.createTag("main",this.appHTML),e=this.createTag("div",t,"container");this.createMainInfo(e),this.createInfo(e),this.sendEditData(),this.deleteContact(),this.phoneCheck()}},{key:"render",value:function(){this.appHTML.innerHTML="",this.header(),this.main()}}]),t}();e.default=o},function(t,e,n){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),s=n(1),r=function(t){return t&&t.__esModule?t:{default:t}}(s),c=function(){function t(e){a(this,t),this.appHTML=document.querySelector("#app"),this.appState=e}return i(t,[{key:"createTag",value:function(t,e,n){n=n||!1;var a=document.createElement(t);return n&&(a.className=n),e.appendChild(a),a}},{key:"header",value:function(){this.createTag("header",this.appHTML,"header").innerHTML='<div class="container top-radius">\n          <div class="user-top-line">\n    \t\t\t\t<a href="index.html" id="backToContacts">\n    \t\t\t\t\t<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span> Contacts\n    \t\t\t\t</a>\n    \t\t\t\t<a href="edit-contact.html" id="editContact">Edit</a>\n    \t\t\t</div>\n        </div>'}},{key:"createOptionsLine",value:function(t){var e=this.appState.db.selectedUser,n=this.appState.db.users[e];t.innerHTML='\n      <img src="img/avatar.jpg" alt="#" class=" user-img img-circle center-block">\n      <div class="user-name">'+n.fullName+'</div>\n      <div class="options-line">\n        <div class="message">\n          <div class="options-icon"><span class="icon glyphicon glyphicon-comment" aria-hidden="true"></span></div>\n          <span class="options-text">message</span>\n        </div>\n        <div class="call">\n          <div class="options-icon"><span class="icon glyphicon glyphicon-earphone" aria-hidden="true"></span></div>\n          <span class="options-text">call</span>\n        </div>\n        <div class="video">\n          <div class="options-icon"><span class="icon glyphicon glyphicon-facetime-video" aria-hidden="true"></span></div>\n          <span class="options-text">video</span>\n        </div>\n        <div class="mail">\n          <div class="options-icon"><span class="icon glyphicon glyphicon-envelope" aria-hidden="true"></span></div>\n          <span class="options-text">mail</span>\n        </div>\n      </div>\n      <div class="options-table">\n        <div class="user-data-all">\n          <div class="user-data">\n    \t\t\t\t\t<h3>email</h3>\n    \t\t\t\t\t<div>'+n.email+'</div>\n          </div>\n          <div class="user-data">\n    \t\t\t\t\t<h3>phone</h3>\n    \t\t\t\t\t<div>'+n.phone+'</div>\n          </div>\n        </div>\n        <div class="options-item"><a href="#">Notes</a></div>\n        <div class="options-item"><a href="#">Send message</a></div>\n        <div class="options-item"><a href="#">Share contact</a></div>\n        <div class="options-item"><a href="#">Add to favorites</a></div>\n        <div class="options-item"><a href="#">Share my location</a></div>\n        <div class="options-item"><a href="#">Block this caller</a></div>\n      </div>\n      </div>'}},{key:"goToEditUser",value:function(){var t=document.querySelector("#editContact"),e=t.getAttribute("href");t.addEventListener("click",function(t){t.preventDefault(),r.default.ui.editContact.render(),history.pushState(e,e,e)})}},{key:"main",value:function(){var t=this.createTag("main",this.appHTML),e=this.createTag("div",t,"container");this.createOptionsLine(e),this.goToEditUser()}},{key:"render",value:function(){this.appHTML.innerHTML="",this.header(),this.main()}}]),t}();e.default=c}]);