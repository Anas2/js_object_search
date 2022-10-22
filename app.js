var std1 = {
    name: "student1",
    roll_no: "01",
    Father_Name : "std1father",
    class:"10th"
}
var std2 = {
    name: "student2",
    roll_no: "02",
    Father_Name : "std2father",
    class:"10th"
}
var std3 = {
    name: "student3",
    roll_no: "03",
    Father_Name : "std3father",
    class:"10th"
}
var std4 = {
    name: "student4",
    roll_no: "04",
    Father_Name : "std4father",
    class:"10th"
}

var allClass = [std1, std2, std3, std4];
var table = document.getElementById("table");
table.innerHTML = `<tr><td><b>Name</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td><b>Roll_no</b>&nbsp;&nbsp;&nbsp;&nbsp;</td><td><b>Father Name</b>&nbsp;&nbsp;&nbsp;&nbsp;</td><td><b>Class</b></td></tr>
<tr><td>${allClass[0].name}</td><td>${allClass[0].roll_no}</td><td>${allClass[0].Father_Name}</td><td>${allClass[0].class}</td></tr>
<tr><td>${allClass[1].name}</td><td>${allClass[1].roll_no}</td><td>${allClass[1].Father_Name}</td><td>${allClass[1].class}</td></tr>
<tr><td>${allClass[2].name}</td><td>${allClass[2].roll_no}</td><td>${allClass[2].Father_Name}</td><td>${allClass[2].class}</td></tr>
<tr><td>${allClass[3].name}</td><td>${allClass[3].roll_no}</td><td>${allClass[3].Father_Name}</td><td>${allClass[3].class}</td></tr>
`



function search(){
  var filter = document.getElementById("input").value;
  var table = document.getElementById("table");
  var tablerow = table.getElementsByTagName("row");
  var parentId = document.getElementById('table');
  console.log(parentId);
  parentId.setAttribute('class','parentVisible');

  for (var i=1; i<tablerow.length; i++){
    var td = tablerow[i].getElementsByTagName("column")[1];
    if(td)
    var textValue = td.textContent || td.innerHTML;
    if (textValue.indexOf(filter) > -1){
        // tablerow[i].style.display = "";
        tablerow[i].style.fontWeight = "bold";
    } else {
        tablerow[i].style.display = "none";
    }

  }
 
}