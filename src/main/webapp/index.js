function save()
{
  var url = "http://localhost:8081/course/save";
  var data = JSON.stringify({
    "id" : T1.value,
    "title" : T2.value,
    "credit" : T3.value,
    "offereddept" : T4.value
  });
  
  callApi("POST", url, data, getResponse);
}

function getResponse(res)
{
  alert(res);
}

function update()
{
  var url = "http://localhost:8081/course/update/" + T1.value;
  var data = JSON.stringify({
    "id" : T1.value,
    "title" : T2.value,
    "credit" : T3.value,
    "offereddept" : T4.value
  });
  
  callApi("PUT", url, data, getResponse);
}

function del()
{
  var url = "http://localhost:8081/course/delete/" + T1.value;
  callApi("DELETE", url, "", getResponse);
}

function callApi(METHOD, URL, DATA, SUCCESS)
{
  var xhttp = new XMLHttpRequest();
  xhttp.open(METHOD, URL, true);
  xhttp.setRequestHeader('Content-Type','application/json');
    
  xhttp.onreadystatechange = function()
  {
    if(this.readyState == 4)
    {
      if(this.status == 200)
        SUCCESS(this.responseText);
      else
        alert("404: Service unavailable");
    }
  };
  
  xhttp.send(DATA);
}

function view()
{
  var url = "http://localhost:8081/course/read";
  callApi("GET", url, "", generateTable);
}

function generateTable(res) {
  var data = JSON.parse(res);
  var table = `<table border="1">
          <tr>
            <th>Course ID</th>
            <th>Course Title</th>
            <th>Credits</th>
            <th>Offered Dept</th>
          </tr>`;
  for (var x in data) {
    table += `<tr>
          <td>${data[x].id}</td>
          <td>${data[x].title}</td>
          <td>${data[x].credit}</td>
          <td>${data[x].offereddept}</td>
          </tr>`;
  }
  table += "</table>";
  
  // Assuming "viewdata" is an HTML element where you want to display the table
  var viewdata = document.getElementById("viewdata");
  viewdata.innerHTML = table;
}