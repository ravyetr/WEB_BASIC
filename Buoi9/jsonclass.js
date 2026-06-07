/* <div class="add">
        <input class="addbox add2" type="text" placeholder="nhập thêm skill">
        <button class="addbut">
                Add
        </button>
</div> */

// but.addEventListener('click', function(){
//     let color=box1.value;
//     let w=box2.value;
//     let h=box3.value;
    
//     if (thongbao(color, w, h) != ""){
//         alert("Bạn nhập thiếu " + thongbao(color, w, h) + "!!!");
//     } else{
//         appear(color, w, h);
//         sample.addEventListener('click', disapper);

//     } 
// })
// <div class="sk">Vuetify</div>

let add1=document.querySelector(".add1");
let add2=document.querySelector(".add2");
let addbut1=document.querySelector(".addbut1");
let addbut2=document.querySelector(".addbut2");
let coreskill=document.querySelector(".coreskill");
let otherskill = document.querySelector(".otherskill");
let coredata = '<div class="under">CORE SKILLS</div>'
            + "<div class='sk'>JavaScript</div>"
            + "<div class='sk'>Node.js></div>"
            + "<div class='sk'>Express.js</div>"
            + "<div class='sk'>MongoDB</div>"
            + "<div class='sk'>Vue.js</div>"
            + "<div class='sk'>React</div>"
            + "<div class='sk'>Sequelize</div>"
            + "<div class='sk'>Github</div>"
            + "<div class='sk'>HTML</div>";
let otherdata='<div class="under">OTHER SKILLS</div><div class="sk">Storyblok</div><div class="sk">PWAs</div><div class="sk">Responsive Web Design</div><div class="sk">React</div><div class="sk">Vuetify</div>'
    
// function addclick(coreskill, add1, coredata){
//     let addcore=add1.value;
//     let str = "<div class='sk'>" + addcore + "</div>" + "<div class='add'><input class='addbox add1' type='text' placeholder='nhập thêm skill'><button class='addbut'>Add</button></div>";
//     coredata+=str;
//     coreskill.innerHTML=coredata;
// }

addbut1.addEventListener('click', function(){
    let addcore=add1.value;
    if (addcore != ""){
        let str = "<div class='sk'>" + addcore + "</div>" ;
        coredata+=str;
    }
    coreskill.innerHTML=coredata;
    add1.value="";
});

addbut2.addEventListener('click', function(){
    let addother=add2.value;
    if(addother != ""){
        let str = "<div class='sk'>" + addother + "</div>" 
        otherdata+=str;
    }
    
    otherskill.innerHTML=otherdata;
    add2.value ="";
});


 
