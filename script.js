// function toggleMenu() {

//     let x = document.getElementById("links");
//     if (x.style.display === "block") {
//         x.style.display = "none";
//     } else {
//         x.style.display = "block";
//     }

//     let m = document.getElementById("bars");
//     if (m.src.endsWith("images/menu.png")) {
//         m.src = "images/cross.png";
//     } else {
//         m.src = "images/menu.png";
//     }
// }
function toggleMenu() {

    let x = document.getElementById("links");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }

    let m = document.getElementById("menuBars");
    let ic = document.getElementById("icon");
    let sic = document.getElementById("soundIcon");
    if (m.src.endsWith("images/menu.png")) {
        m.src = "images/cross.png";
        ic.style.backgroundColor = "rgba(34, 34, 34, 0.5)";
        sic.style.backgroundColor = "rgba(34, 34, 34, 0.5)";
    } else {
        m.src = "images/menu.png";
        ic.style.backgroundColor = "black";
        sic.style.backgroundColor = "black";
    }
}
function toggleSound() {

    let m = document.getElementById("soundBars");
    let s = document.getElementById("bgm");
    if (m.src.endsWith("images/soundOff.png")) {
        m.src = "images/soundOn.png";
        s.play();
    } else {
        m.src = "images/soundOff.png";
        s.pause();
    }
}

var isMobile = true;
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    // true for mobile device
    isMobile = true;
    document.write("mobile device");
    console.log("mobile");
}else{
    // false for not mobile device
    isMobile = false;
    document.writeln("<div style='position:fixed;width:100%;height:100%;top:150px;left:0px;background-color:black;'><img style='width:50%;margin:0 auto;display:block;' src='ma.jpg'></div>");
    // window.stop();
}

window.onload = function (){
    if (document.getElementById('video2') != undefined){
        document.getElementById('video2').addEventListener('ended', videoHandler, false);
    } else {
        document.getElementById('content2').style.display = 'block';
        console.log("No video");
    }
};
function videoHandler(e) {
    // What you want to do after the event
    document.getElementById('content2').style.display = 'block';
    document.getElementById('video2').style.display = 'none';
}

function isClickBackground(event){
    let container = document.getElementById('content2');
    let c2 = document.getElementById('startviddiv');
    let c3 = document.getElementById('video2');
    // if (container !== event.target && !container.contains(event.target)){
    //     return true;
    // }
    if (event.target == c2 || event.target == c3 || event.target == container){
        return false;
    }
    return true;
}


window.onload = function (){
    if (isMobile){
        console.log("ismobile");
        let container = document.getElementById('content2');
        let slider = document.getElementById('slider');
        document.addEventListener('click', function( event ) {
            if (isClickBackground(event)) {
                console.log("isssss");
            } else {
                let sList = slider.classList;
                let isOpen = slider.classList.contains('slide-in');
                slider.classList.remove("slide-in");
                slider.classList.remove("slide-out");

                slider.classList.add(isOpen ? 'slide-out' : 'slide-in');
            }
        });

        if (document.getElementById('video2') != undefined){
            document.getElementById('video2').addEventListener('ended', videoHandler, false);
            // window.onscroll = function () { window.scrollTo(0, 0); };

        } else {
            document.getElementById('content2').style.display = 'block';
        }
    } else {
        // document.getElementById('video2').style.display = 'none';
        // document.getElementById('contents').style.display = 'none';

        // document.getElementById('content2').style.display = 'none';
        document.getElementById('video2').remove();
        document.getElementById('contents').remove();
        document.getElementById('content2').remove();
    }
};

function videoHandler(e) {
    // What you want to do after the event
    document.getElementById('video2').remove();
    document.getElementById('startviddiv').remove();
    document.getElementById('content2').style.display = 'block';
    // document.getElementById('empty').remove();
    window.onscroll = function () {};
    $(window).scroll(function() {
        $('video').each(function(){
            if ($(this)[0].id === 'video2'){
                return;
            }
            if ($(this).is(':in-viewport(100)')) {
                $(this)[0].play();
            } else {
                $(this)[0].pause();
            }
        });
        $('.chapterTitle').css({'text-decoration':'none'});
        $('.chapter:in-viewport(950)').each(function(){
            let chpT = document.getElementById('T'+$(this)[0].id);
            chpT.style.textDecoration = 'underline';
        });
    });
    // document.getElementById('content2').style.display = 'block';
    // document.getElementById('video2').style.display = 'none';
}
