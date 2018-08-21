setInterval(function(){
 var date = new Date();
 updateTime(date);
 updateClock(date);
}, 1000);

function updateClock(date) {
    var secHand =
    document.getElementById("sec-hand").style;
    var minHand =
    document.getElementById("min-hand").style;
    var hrHand =
    document.getElementById("hr-hand").style;
    
    secHand.transform = "rotate(" +
    date.getSeconds() * 6 + "deg)";
    minHand.transform = "rotate(" +
    date.getMinutes() * 6 + "deg)";
    hrHand.transform = "rotate(" +
    (date.getHours() * 30 + date.getMinutes() * 
    0.5) + "deg)";
}
function updateTime(date){
 var timeDiv =
 document.getElementById("time");
 var time = "Current Reference Time --- " +
 date.getHours() + " : " + date.getMinutes()
 + " : " + date.getSeconds();

 // timeDiv.innerHTML = time;
}

var captionInfo = [
    {header: "Pacman was...",
     text:   "Packman was invented in 1980 by Toru Iwatani." +
             " We didn't have PCs or smartphones so" +
             " we played it arcade style at hosting businesses such as pubs and shopping malls. I" +
             " can remember a sore wrist from frantically tugging too hard in attempts to reach" +
             " a high score."},
    {header: "Rockem Sockem Robots was...",
     text:   "A kid loved this gift at Christmas if he/she didn't already own one. It was a rather" +
             " silly mechanical device that you lined up with your controller and launched a" +
             " 'punch' at your opponents robot. If your robot's head popped up you might say," + 
             " 'Hey, you knocked my block off!'"},
    {header: "The Bob Newhart Show was",
     text:   "A very funny and popular comedy on CBS from 1972-1978. Played by the titled, dry" +
             " comedian, a Chicago pyschologist enjoys daily activities with his wife, collegues" +
             " and patients."},
    {header: "The Four convivial presidents of the 1970s:",
     text:   "Enjoy each other's company despite ideological differences."},
    {header: "Norman Borlaugh was....",
     text:   "\"\The man who fed the world\"\. This graduate from the University of Minnesota" +
             " conducted field research on wheat genetics in Mexico. His findings lead to over" +
             " one billion people saved from starvation. He received the Nobel Peace Prize in 1970."},
    {header: "Rod Carew was",
     text:   "A seven time batting champion and hall of famer who was all-star elected every year" +
             " except his last. Rod was my favorite Twin to watch growing up. On June 28, 1977 I was" +
             "  startled from my first base reserved seat at Metropolitan Stadium when Sir Rodney" +
             "  sprinted towards home against Sammy Hinds long, ignorant windup. Larry Hisle, the batter" +
             " stepped aside and Rod was <i>Saaaafe<i>. He added a whopping 3,053 hits to 17 steals of" +
             " home."},
    {header: "Mount Saint Helen's Eruption in 1980:",
     text:   "This was big news leading into an election year as one decade transitioned to the next"},
    {header: "An old television and recording equipment illustrate...",
     text:   "Old equipment today, was oh so cool back then. It was groovy. I can play a Led" +
             " Zepplin LP, or a Three Degrees eight track tape. Then I can watch the French Chef" +
             " on PBS channel 2 with UHF rabbit ears. \"\ Baaad, Man!\"\ "}
    ];


function changeImage(event) {
    if (event.target.tagName == "IMG") {
        document.getElementById("mainImage").src =
        event.target.getAttribute("src");
        document.getElementById("mainImage").title =
        event.target.getAttribute("title");
        console.log("click event:" + event.target.id);
        var captionIndex = event.target.id;
        document.getElementById("captionHead").innerHTML = captionInfo[captionIndex].header;
        document.getElementById("captionText").innerHTML = captionInfo[captionIndex].text;
    }
}
// Packman was invented in 1980 by Toru Iwatani. We didn't have PCs or smartphones so
//             we played it arcade style at hosting businesses such as pubs and shopping malls. I 
//             can remember a sore wrist from frantically tugging too hard in attempts to reach
//             a high score.
// A kid loved this gift at Christmas if he/she didn't already own one. It was a rather silly
//             mechanical device that you lined up with your controller and launched a 'punch' at your
//             opponents robot. If your robot's head popped up you might say, 'Hey, you knocked my block 
//             off!'
// Photo by Mikes Photos from Pexels
// Ariel Waldman Flickr
// https://commons.wikimedia.org/wiki/File:Norman_Borlaug_(2004).jpg