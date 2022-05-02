
var arr = JSON.parse(localStorage.getItem("data")) || []

arr.forEach(function(elem){
  var tr =   document.createElement("tr");
   var td1 =  document.createElement("td");
td1.innerText = elem.number;

  var td2 =  document.createElement("td");
    td2.innerText = elem.teamA;
   var td3 =  document.createElement("td");
   td3.innerText = elem.teamB;

   var td4 =  document.createElement("td");
   td4.innerText = elem.date;

    var td5 = document.createElement("td");
    td5.innerText = elem.venue;

  var td6 =   document.createElement("td");
  td6.innerText = "Favourite";
  td6.style.color = "teal";
td6.addEventListener("click",function(){
   window.location.href = "favourites.html";
   

})
  tr.append(td1,td2,td3,td4,td5,td6);

  document.querySelector("tbody").append(tr);

})

