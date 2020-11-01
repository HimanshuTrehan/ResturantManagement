function showMenu()
{
    window.location = "Menu.html";
}



function bookOrder()
{
    var tabno = document.getElementById("tabno").value;
    
    if(tabno === "")
    {
        alert("please enter table no.")
    }
    else
    {
    alert("your order Booked");
    
    }
}