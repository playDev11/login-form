class MagicParticle{
    constructor(x, y){
        this.x= x;
        this.y= y;
        this.size=  random(10,10);
        this.basecolor=  color(
            random([
                "#e84e66","#67c69e",
                "#edf1f4","#80acc9",
                "#73a8b0","#fe817f",
                "#68d2a4","#1d203f",
            ])
        ),
        update() ;{
            this.x += this.speedx;
            this.y += this.speedx;
            this.opacity -= 10;
        }

    }
  }
document.querySelectorALL("button").forEach(item =>{
  item.addAlert(pointer, ()=> {
    alert('you have signed in')
  })
})
 const mybutton = document.getElementById("mybutton");
 mybutton.addEventListener("pointe",()=>{
  alert("you have signed in");
 });

window.requestAnimationFrame = function(){
    return(
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function  (callback) {
            window.setTimeout(callback);
        }
    );
};
function init(elemid){
    let canvas = document.getElementById(elemid),
    c = canvas.getContext("2d"),
    w = (canvas.width = window.innerWidth),
    h = (canvas.height = window.innerHeight);
c.fillStyle = "rgba(30,30,30,1)";
c.fillRect(0, 0, w, h);
return { c: c, canvas: canvas};
}

window.onload = function () {
    let c = init("canvas").c,
    canvas = init("canvas").canvas,
    w = (canvas.width = window.innerWidth),
    h = (canvas.height = window.innerHeight);

}
var current = null;
document.querySelector('#email').addEventListener('focus', function(e) {
  if (current) current.pause();
  current = anime({
    targets: 'path',
    strokeDashoffset: {
      value: 0,
      duration: 700,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '240 1386',
      duration: 700,
      easing: 'easeOutQuart'
    }
  });
});
document.querySelector('#password').addEventListener('focus', function(e) {
  if (current) current.pause();
  current = anime({
    targets: 'path',
    strokeDashoffset: {
      value: -336,
      duration: 700,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '240 1386',
      duration: 700,
      easing: 'easeOutQuart'
    }
  });
});
document.querySelector('#submit').addEventListener('focus', function(e) {
  if (current) current.pause();
  current = anime({
    targets: 'path',
    strokeDashoffset: {
      value: -730,
      duration: 700,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '530 1386',
      duration: 700,
      easing: 'easeOutQuart'
    }
  });
});