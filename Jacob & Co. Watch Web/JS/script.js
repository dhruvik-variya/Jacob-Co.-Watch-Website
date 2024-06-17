// slider start

const img_slider_elements = document.querySelectorAll(".img-caroussel");
const arrows_elts = document.querySelectorAll(".arrows i")
const round_elts = document.querySelectorAll(".round");

let current_img = 1;

round_elts.forEach((round_elt) => {

    round_elt.addEventListener("click", change_img_slider)
})

arrows_elts.forEach((arrow) => {
    arrow.addEventListener("click", change_img_slider)

})

function change_img_slider(e) {

    let index_img_to_show = null

    if (e.currentTarget.id === "previous") {

        index_img_to_show = parseInt(current_img) - 1 < 1 ? img_slider_elements.length : parseInt(current_img) - 1
    }

    else if (e.currentTarget.classList.contains("round")) {

        index_img_to_show = e.currentTarget.getAttribute("data-img")

    }

    else {

        index_img_to_show = parseInt(current_img) + 1 > img_slider_elements.length ? 1 : parseInt(current_img) + 1

    }

    img_slider_elements.forEach((img) => {

        img.classList.remove("active")

        if (img.getAttribute("data-img") == index_img_to_show) {

            current_img = img.getAttribute("data-img")

            img.classList.add("active")

        }

    })



    round_elts.forEach((round_elt) => {

        round_elt.classList.remove("active")

        if (round_elt.getAttribute("data-img") == index_img_to_show) {

            round_elt.classList.add("active")

        }

    })


}

// slider end

// headline JS start


let yourtext = [

    ["awesome", "#ffd166"],
    ["luxuries", "#7DE2D1"],
    ["branded", "#DE3C4B"]
];

let x = 0;
let y = 0;
//how fast typing is
let wait = 300;
//how long you want to text stay before overwriting
let additionalwait = 5;
let txt = yourtext[0][0].split("");
let out = "";
let retyping = setInterval(function () {
    document.getElementById("changingText").innerHTML = out;
    if (x > txt.length - 1) {
    } else {
        out += txt[x];
    }
    x++;
    if (x == txt.length + 2 + additionalwait) {
        if (y == yourtext.length - 1) {
            y = 0;
            txt = yourtext[y][0].split("");
            out = "";
            document.getElementById("changingText").innerHTML = out;
            document.getElementById("changingText").style.color = yourtext[y][1];
            x = 0;
        } else {
            y += 1;
            txt = yourtext[y][0].split("");
            out = "";
            document.getElementById("changingText").innerHTML = out;
            document.getElementById("changingText").style.color = yourtext[y][1];
            x = 0;
        }
    }
}, wait);


// headline JS end

// pointer js start
// UPDATE: I was able to get this working again... Enjoy!

var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
})

// pointer js end
