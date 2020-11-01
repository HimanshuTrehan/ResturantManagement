function bookValidation()
{
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var Mob = document.getElementById("Mob").value;
    var no_person = document.getElementById("no_person").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("Time").value;
    var tableno = document.getElementById("tableno").value;
    var letters = /^[A-Za-z]+$/;
    
     
    if(name==="" || email==="" || Mob===""|| no_person==="" || tableno==="" || date==="" ||time==="")
    {
        alert("please Fill all Fields");

    }

    
   else if(!name.match(letters))
    {
    alert('Enter Valid name');
    
    }
  
   else if((Mob.length < 10) || (Mob.length > 10))
    {
    alert(" Your Mobile Number must be of 10 digits");
    
    }
    else
    {
        alert("Table no."+ tableno+"Booked ");
    }

   

}