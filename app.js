let msg=document.querySelector(".msg");
let dropdown=document.querySelectorAll(".dropdown select");
let btn=document.querySelector(".submit");
const fromcurr=document.querySelector(".opts1 select")
const tocurr=document.querySelector(".opts2 select")
window.addEventListener("load",()=>{
    updatefunction();
    })
for (let select of dropdown){
    for (code in countryList ){
    let newopts=document.createElement("option");
    newopts.innerText=code;
    newopts.value=code;
    if(select.name==="from" && code==="USD")
        newopts.selected="selected";
    else if(select.name==="to" && code==="INR")
        newopts.selected="selected";
    select.append(newopts);
    } 

select.addEventListener("change",(evt)=>{
updateflag(evt.target);
})
}
const updateflag = (element)=>
    {
     let currcode=element.value;
     let countrycode=countryList[currcode];
     let newscr=`https://flagsapi.com/${countrycode}/flat/64.png`;
     let img=element.parentElement.querySelector("img"); 
    //  select tag parent which is img
     img.src=newscr;

    }
   
    btn.addEventListener("click", (evt)=>{
        evt.preventDefault();
        updatefunction();
        
    })
    const updatefunction= async ()=>{
        let amt=document.querySelector(".amount input")
        let amtval=amt.value;
        if(amtval==="" || amtval<1){
            amtval=1;
            amt.value=1;
        }
        console.log(fromcurr.value,tocurr.value)
        let response=await fetch(`https://v6.exchangerate-api.com/v6/b71ba5a6f69833fe3ac900ec/latest/${fromcurr.value.toLowerCase()}`);
        let data=await response.json();
        console.log(data);
        let rate =  data.conversion_rates[tocurr.value];
        console.log(rate);
        let finalamt=amtval*rate;
        msg.innerText=`${amtval} ${fromcurr.value} =${finalamt} ${tocurr.value}`
    }
