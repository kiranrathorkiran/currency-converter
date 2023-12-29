const baseurl="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies"

const dropowns=document.querySelectorAll(".drop-dwon select");
const btn=document.querySelector("button")
const fromcrr=document.querySelector(".from select")
const tocrr=document.querySelector(".to select")
let msg=document.querySelector(".msg")

 for( select of dropowns)
 {
    for( crrcode in contrylist)
    {
    let newoption=document.createElement("option");
    newoption.innerText=crrcode;
     newoption.value=crrcode;
    
     if(select.name === "from" && crrcode === "USD")
     {
        newoption.selected="selected";
        
     }
     else
     if(select.name === "to" && crrcode === "INR"){
        newoption.selected="selected";
     }
    
     select.append(newoption);
    }
    //console.log( contrylist[crrcode]);

    select.addEventListener("change",(evt)=>
    {
        updateflag(evt.target);
    });
 }
 const updateflag =(element) =>
 {
  let currencycode=element.value;   
   let contrycode=contrylist[currencycode];
    let newsrc=`https://flagsapi.com/${contrycode}/flat/64.png`
   let  img=element.parentElement.querySelector("img");
  
   img.src=newsrc;
 };

 btn.addEventListener("click",(evt)=>
 {
   
   evt.preventDefault();
    updatecurrny();
   
 });

updatecurrny=async ()=>
 {
   amount = document.querySelector("input").value;
  
   if(amount==="" || amount<1)
   {
      amount=1;
   }
   const  URL = `${baseurl}/${fromcrr.value.toLowerCase()}/${tocrr.value.toLowerCase()}.json`;
   
   let respons=await fetch(URL)
     let data = await respons.json();
     let rate =data[tocrr.value.toLowerCase()];
     totalamount=amount * rate;
  
   msg.innerText=`${amount} ${fromcrr.value} = ${totalamount} ${tocrr.value } `
 }
 window.addEventListener("load",()=>
 {
   updatecurrny();
 })

  
  
 