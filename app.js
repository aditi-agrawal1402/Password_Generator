let url = "https://passwordinator.onrender.com/?len=12";

let check1 = document.querySelector("#num");
let check2 = document.querySelector("#upperCase");
let check3 = document.querySelector("#special");
let len = document.querySelector("#len");
let lenLabel = document.querySelector("#val");
let btn = document.querySelector("#btn");
let passw = document.querySelector("#passw");
let passLabel = document.querySelector("#passLabel");


check1.addEventListener("change",function(){
    if(this.checked){        
        url = url+"&num=true";
        console.log(url);
    }else{
        url = url.replace("&num=true","");  
        console.log(url);
    }
})

check2.addEventListener("change",function(){
    if(this.checked){
        url = url+"&caps=true";
        console.log(url);
    }else{
        url = url.replace("&caps=true","");  
        console.log(url);
    }
})

check3.addEventListener("change",function(){
    if(this.checked){
        url = url+"&char=true";
        console.log(url);
    }else{
        url = url.replace("&char=true","");  
        console.log(url);
    }
})

lenLabel.innerText = len.value;
len.addEventListener("input", (event)=>{
    url = url.replace(/len=[8-9]|len=1[0-8]/,"len="+event.target.value);
    console.log(url);
    lenLabel.innerText = event.target.value;
})

btn.addEventListener("click",async ()=>{
    passLabel.classList.remove("hide");
    let pass = await getPass();
    console.log(pass.data.data);
    passw.innerText = pass.data.data;
})

async function getPass(){
    try{
        let res = await axios.get(url);
        return res;
    }catch{
        console.log("Error!");
    }
}