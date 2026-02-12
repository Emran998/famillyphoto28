const PASSWORD = "imran123"; // 🔑 change this

function unlock(){
    const input = document.getElementById("passwordInput").value;
    if(input === PASSWORD){
        document.getElementById("lockScreen").style.display="none";
        document.getElementById("album").classList.remove("hidden");
        initAlbum();
    }else{
        document.getElementById("error").style.display="block";
    }
}

// Album functions
function initAlbum(){

// disable right click
document.addEventListener("contextmenu",e=>e.preventDefault());

// animation
const photos=document.querySelectorAll(".photo");
const observer=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
        if(e.isIntersecting){
            e.target.classList.add("show");
        }
    });
},{threshold:.3});
photos.forEach(p=>observer.observe(p));

// lightbox
const lightbox=document.getElementById("lightbox");
const lightboxImg=document.getElementById("lightboxImg");
photos.forEach(p=>{
    p.onclick=()=>{
        lightbox.style.display="flex";
        lightboxImg.src=p.querySelector("img").src;
    }
});
lightbox.onclick=()=>lightbox.style.display="none";
}

function toggleDark(){
    document.body.classList.toggle("dark");
}

// blur on tab change (screenshot deterrent)
document.addEventListener("visibilitychange",()=>{
    document.body.classList.toggle("dark",document.hidden);
});
