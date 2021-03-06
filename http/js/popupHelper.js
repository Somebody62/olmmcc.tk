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
function getCloseButton(id) {
    let close = "<svg id='" + id + "' viewBox='0, 0, 100, 100'>";
    close += "<circle cx=50 cy=50 r=50 fill=black />";
    close += "<rect class='whiteRect' y='55' rx=13 ry=13 x='-45' transform='rotate(-45 0 0)' width='90' height='25' />";
    close += "<rect class='whiteRect' y='-15' rx=13 ry=13 x='25' transform='rotate(45 0 0)' width='90' height='25' />";
    close += "</svg>";
    return close;
}
