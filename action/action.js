var namee= document.getElementById ('namee');
   var email= document.getElementById('signupEmaile');
   var pass= document.getElementById('signupPassworde');
var infolist=[];
var emailin= document.getElementById('signinEmail');
var passin= document.getElementById('signinPassword');
if(localStorage.getItem('list')!== null){
   infolist=JSON.parse(localStorage.getItem('list'))
   console.log(infolist)
}

  
function showurl(){
   var info={
 uname:namee.value,
uemail:email.value,
upass:pass.value,

   }

   


var fla=true;

for(var i=0 ;i<infolist.length;i++) {

if(email.value==infolist[i].uemail){
fla=false;
}
}
if(fla==false){
   window.alert('the account is not valid')
}else{
   infolist.push(info)
   localStorage.setItem('list',JSON.stringify(infolist))
  
   clearform()

}


}

var hello =document.getElementById('hi').innerHTML='Hello in my site '+infolist.uname; 
function clearform() {
  namee.value='';
 email.value='';
  pass.value='';
}



function siginin(){
 var flage=false;

   for(var i=0 ;i<infolist.length;i++) {
   
if(emailin.value==infolist[i].uemail){
  flage=true;
   if(passin.value==infolist[i].upass){
     window.location='main.html'
  break }else{
      window.alert('password is not correct')
  break }


  }
}
  if(flage==false){
   window.alert('user is not correct')
}


   

}




