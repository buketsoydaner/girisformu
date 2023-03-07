// Add your code here
var kullanici =[
    {email:"mail1@gmail.com", sifre:"1234"},
    {email:"mail2@gmail.com", sifre:"4567"}
  ]
  
  var a= 2;
  function kullaniciVarMi(email,sifre){
    for(var i=0; i<kullanici.length; i++){
      if(kullanici[i].email == email && kullanici[i].sifre == sifre){
  
        return true;
      }else{
      }
    }
  }
  
  
  function giris(){
  var email = document.getElementById("email").value;
  var sifre = document.getElementById("sifre").value;
  
    if(kullaniciVarMi(email,sifre)){
      alert("Hosgeldiniz");
    }else{
      alert("Wrong")
    }
  }
  