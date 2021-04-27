$(document).ready(function() {
    $(document).on('submit',"#formid",function(e) {
        $('#table_records').empty(true);
        var domainname = $('#domainname').val();
        if(/^(?!:\/\/)([a-zA-Z0-9-]+\.){0,5}[a-zA-Z0-9-][a-zA-Z0-9-]+\.[a-zA-Z]{2,64}?$/.test(domainname)){
            $.ajax({
                   url: '/',
                method: 'POST',
                  data: {
                        'domainname':domainname
                        },
               success: function(response){
                          var response=JSON.parse(JSON.stringify(response))
                          jQuery.each(response, function(index, value){
                              var content ="";
                              content += "<tr>"+
                                         "<td>"+index+"</td><td>"
                              for(var i=0; i<value.length; i++){
                                  content += value[i]+"<br/>"
                              }
                              content += "</td></tr>"
                              $("#table_records").append(content);
                          });
                          document.querySelector("#show_table").style.display = "block";
                        },
                 error: function(error){
                          console.log(error);
                        }
              });


        }
        else{
          alert("Please Enter a Valid Domain")
        }
        e.preventDefault();
      });
    });
