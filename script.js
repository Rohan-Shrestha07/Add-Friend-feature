var istatus = document.querySelector("h5")
var addFriend= document.querySelector("#add")
var removeFriend = document.querySelector("#remove")

var flag=0

addFriend.addEventListener("click",function(){
    if(flag==0){
       istatus.innerHTML="Request sent"
       istatus.style.color="Green"
       addFriend.innerHTML="Cancel"  
       flag=1
    }else{
       istatus.innerHTML="Stranger"
       istatus.style.color="red"
       addFriend.innerHTML="Add Friend"
       flag=0
    }
})

removeFriend.addEventListener("click",function(){
    if(flag==1){
        istatus.innerHTML="Stranger"
        istatus.style.color="red"
        addFriend.innerHTML="Add Friend"
        flag=0
    }
})
// removeFriend.addEventListener("click",function(){
//     istatus.innerHTML="Stranger"
//     istatus.style.color="red"
// })