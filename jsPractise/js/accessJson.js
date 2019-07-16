var text = '{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';

function showJson(){
    obj = JSON.parse(text);

    var resStr = "";
    var len = obj.employees.length;
    console.log("the number of the json file items are: " + len);

    for(var i = 0; i < len; i++){
        resStr = resStr + obj.employees[i].firstName + " " + 
                    obj.employees[i].lastName + "<br>";
    }

    document.getElementById("7p1").innerHTML = resStr;
    
}