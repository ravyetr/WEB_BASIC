
let box1= document.querySelector(".box1")
let box2=document.querySelector(".box2")
let box3=document.querySelector(".box3")
let but=document.querySelector("button")
let sample=document.querySelector(".sample")

function thongbao(color, w, h){
    let tb="";
    if (color == ""){
        tb+= "mã màu";
    }
    if (w == ""){
        if (tb == "") tb += "chiều ngang";
        else tb += ", chiều ngang";
    }
    if (h == ""){
        if (tb == "") tb += "chiều dọc";
        else tb += ", chiều dọc";
    }
    return tb;
}

function appear(color, w, h){
    sample.style.opacity = "1";
    sample.style.width= w + "px";
    sample.style.height= h + "px";
    sample.style.backgroundColor = xulimau(color) ; 
}

function xulimau(color){
    color=color.toLowerCase();
    if (color[0] == "#") return color;
    else {
        
        for(let i=0; i<color.length; i++){
            if (color[i] > "f") {
                return color;
            }
        }
        return "#" + color;
    }
}
function disapper(){
    sample.style.opacity="0";
    box1.value="";
    box2.value="";
    box3.value="";
}
but.addEventListener('click', function(){
    let color=box1.value;
    let w=box2.value;
    let h=box3.value;
    
    if (thongbao(color, w, h) != ""){
        alert("Bạn nhập thiếu " + thongbao(color, w, h) + "!!!");
    } else{
        appear(color, w, h);
        sample.addEventListener('click', disapper);

    } 
})
 
