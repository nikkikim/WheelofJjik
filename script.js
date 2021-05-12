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

var hasStarted = false;
var isMobile = true;
// if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
//     // true for mobile device
//     isMobile = true;
//     document.write("mobile device");
//     console.log("mobile");
// }else{
//     // false for not mobile device
//     isMobile = false;
//     document.writeln("<div style='position:fixed;width:100%;height:100%;top:150px;left:0px;background-color:black;'><img style='width:50%;margin:0 auto;display:block;' src='ma.jpg'></div>");
//     // window.stop();
// }

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
    // let container = document.getElementById('content2');
    // let c2 = document.getElementById('startviddiv');
    // let c3 = document.getElementById('video2');
    console.log("click!!");
    if (!hasStarted){
        document.getElementById('introImage').remove();
        let vid = document.getElementById('video2');
        if (vid != undefined){
            vid.style.display = 'block';
        }
        toggleSound();
        hasStarted = true;
        return true;
    }
    let soundBar = document.getElementById('soundBars');
    // if (container !== event.target && !container.contains(event.target)){
    //     return true;
    // }
    console.log("detect click");
    console.log(soundBar);
    console.log(event.target);
    console.log(soundBar == event.target);
    // console.log(event.target);
    // if (event.target == c2 || event.target == c3 || event.target == container){
    //     return false;
    // }
    if (event.target === soundBar){
        return true;
    }
    return false;
}

var doc;
var context;
var clones;
var disableScroll;
var scrollHeight;
var scrollPos;
var clonesHeight;
var i;

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
        doc = window.document;
        context = doc.querySelector('.js-loop');
        clones = context.querySelectorAll('.is-clone');
        console.log(clones);
        disableScroll = false;
        scrollHeight = 0;
        scrollPos = 0;
        clonesHeight = 0;
        i = 0;
        init();
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
    window.onscroll = function () {};
    $('.viewport').scroll(function() {
        // $('video').each(function(){
        //     if ($(this)[0].id === 'video2'){
        //         return;
        //     }
        //     if ($(this).is(':in-viewport(100)')) {
        //         $(this)[0].play();
        //     } else {
        //         $(this)[0].pause();
        //     }
        // });
        // $('.chapterTitle').css({'text-decoration':'none'});
        // $('.chapter:in-viewport(950)').each(function(){
        //     let chpT = document.getElementById('T'+$(this)[0].id);
        //     chpT.style.textDecoration = 'underline';
        // });
        reCalc();
        window.requestAnimationFrame(scrollUpdate);
    });
    // document.getElementById('content2').style.display = 'block';
    // document.getElementById('video2').style.display = 'none';
}

function getScrollPos () {
    // return (context.pageYOffset || context.scrollTop) - (context.clientTop || 0);
    return $('.viewport')[0].scrollTop;
}

function setScrollPos (pos) {
    // document.body.scrollTop = pos;
    $('.viewport')[0].scrollTop = pos;
}

function getClonesHeight () {
    clonesHeight = 0;

    for (i = 0; i < clones.length; i += 1) {
        clonesHeight = clonesHeight + clones[i].offsetHeight;
    }

    return clonesHeight;
}

function reCalc () {
    scrollHeight = context.scrollHeight;
    clonesHeight = getClonesHeight();

    if (scrollPos <= 0) {
        setScrollPos(1); // Scroll 1 pixel to allow upwards scrolling
    }
}

function scrollUpdate () {
  if (!disableScroll) {
      scrollPos = getScrollPos();
      // console.log(scrollPos);
      // console.log(clonesHeight);
      // console.log(scrollHeight);

      if (scrollPos > 10000){
          $('.scrollIcon').hide();
      }

      if (clonesHeight + scrollPos >= scrollHeight) {
          // Scroll to the top when you’ve reached the bottom
          console.log("scroll up");
          setScrollPos(1); // Scroll down 1 pixel to allow upwards scrolling
          disableScroll = true;
      }
    //   } else if (scrollPos <= 0) {
    //       // Scroll to the bottom when you reach the top
    //       console.log("scroll down");
    //       setScrollPos(scrollHeight - clonesHeight);
    //       disableScroll = true;
    // }
  }

  if (disableScroll) {
    // Disable scroll-jumping for a short time to avoid flickering
    window.setTimeout(function () {
      disableScroll = false;
    }, 40);
  }
}

function init () {
  reCalc();
  // context.addEventListener('scroll', function () {
  //     console.log("hahahah");
  //   window.requestAnimationFrame(scrollUpdate);
  // }, false);

  window.addEventListener('resize', function () {
    window.requestAnimationFrame(reCalc);
  }, false);
}

// if (document.readyState !== 'loading') {
//     init();
// } else {
//     doc.addEventListener('DOMContentLoaded', init, false);
// }
