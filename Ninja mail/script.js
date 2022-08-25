window.addEventListener("resize",(e)=>{console.log((e.target.innerWidth - 1440)/-672)})
document.querySelector(".main-background")
1440->10
520->28

(10px + (28 - 10) * ((100vw - 1440px) / (520 - 1440))) 