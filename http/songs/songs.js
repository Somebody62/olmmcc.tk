/*
Copyright (C) 2019  Justus Croskery
To contact me, email me at justus@olmmcc.tk.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see https://www.gnu.org/licenses/.
*/
var songs = {
    parsedResponse : null,
    displayPopupVideo: function () {
        songs.removeGraydiv();
        songs.display(this.id);
    },
    removeGraydiv: function () {
        var element = document.getElementById("graydiv");
        if (element != null) {
            element.parentNode.removeChild(element);
        }
    },
    display: function (currentId) {
        let src = songs.parsedResponse.songs[currentId].link;
        let graydiv = document.createElement("div");
        graydiv.id = 'graydiv';
        let div = document.createElement('div');
        if(src.includes("youtube-nocookie")) {
            let iframe = document.createElement('iframe');
            iframe.className = 'video';
            iframe.src = src; 
            iframe.frameBorder = 0;
            iframe.allowFullscreen = true;
            div.appendChild(iframe);
        } else {
            let video = document.createElement("video");
            video.className = 'video';
            video.src = src;
            video.controls = true;
            div.appendChild(video);
        }
        let close = getCloseButton('closeVideo');
        div.innerHTML += close;
        graydiv.appendChild(div);
        document.getElementById("myPage").appendChild(graydiv);
        document.getElementById('closeVideo').addEventListener('click', songs.closeDiv);
    },
    closeDiv: function () {
        songs.removeGraydiv();
    },
    keydown: function (event) {
        if (event.keyCode == 27) {
            songs.closeDiv();
        }
    },
    displaySongLinks: (json) => {
        songs.parsedResponse = json;
        let p = document.createElement('p');
        if (songs.parsedResponse.title) {
            let h3 = document.createElement('h3');
            h3.textContent = songs.parsedResponse.title;
            p.textContent = songs.parsedResponse.text;
            document.getElementById('main-text').appendChild(h3);
            document.getElementById('main-text').appendChild(p);
            for (id in songs.parsedResponse.songs) {
                let h4 = document.createElement('h4');
                h4.textContent = songs.parsedResponse.songs[id].role + ": ";
                let a = document.createElement('a');
                a.href = 'javascript:;';
                a.id = id;
                a.innerText = songs.parsedResponse.songs[id].name;
                a.addEventListener('click', songs.displayPopupVideo);
                h4.appendChild(a);
                document.getElementById('main-text').appendChild(h4);
            }
            document.addEventListener('keydown', songs.keydown);
        } else {
            p.textContent = "There is no post about the current songs yet, please check again soon!";
            document.getElementById('main-text').appendChild(p);
        }
    }
}
{
    sendReq({}, "https://api.olmmcc.tk/get_songs", songs.displaySongLinks);
}
