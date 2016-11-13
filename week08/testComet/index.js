 function CometEx() {
     var request = new XMLHttpRequest();
     request.open(" GET ", ' http://localhost:8080/cometEx/cometServlet ', true);
     request.onreadystatechange = function() {

         if (request.readyState == 3 && request.status == 200) {
             alert(request.responseText);
         }

     }
     request.send(null);

 }
