var lay = document.querySelectorAll(".layer");
var mai = document.querySelector("body");
var crsr = document.querySelector("#crsrs");
var like = document.querySelector("#spm");
function parallaxDisp(){
mai.addEventListener("mousemove", function(e){
    lay.forEach(function(layer){
        const spee = layer.getAttribute('data-speed');
        const x = (window.innerWidth - e.pageX*spee)/50;
        const y = (window.innerHeight - e.pageY*spee)/50;
        const siz = spee*10+"px";

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
        layer.style.fontSize= `${siz}`;
        layer.style.filter = `blur(${spee*0.5}px)`
    })
})
}
parallaxDisp();
function animateBtn(){
    mai.addEventListener("mousemove", function(dets){

        crsr.style.top = dets.y + 2 + "px";
        crsr.style.left = dets.x + 2 + "px";
       
    })

    mai.addEventListener("dblclick",function(dets){
        like.style.top = dets.y + "px";
        like.style.left = dets.x + "px";
        like.style.display= "block";
        like.style.animation ="none";
        like.offsetHeight;
        like.style.animation = "hart 1s ease-in forwards"
    })
    mai.addEventListener("mousedown", function(){
        crsr.style.width = "50px";
      crsr.style.height = "50px";
    })
    
    mai.addEventListener("mouseup", function(){
        crsr.style.width = "30px";
      crsr.style.height = "30px";
    })
}
animateBtn();

