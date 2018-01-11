window.onload = function() {
  console.log("test");
  Init()
 
};

function Init() {
    var UsedCss = localStorage.getItem("Style");
    if (UsedCss !== null) {
        document.getElementById('pageStyle').setAttribute('href', UsedCss);
    }
    
if (UsedCss = "CaravanPalace")
    {
        
    }
}

function swapSheet(sheet) {
    document.getElementById('pageStyle').setAttribute('href', sheet);
    
    localStorage.setItem("Style", sheet);
}





	

