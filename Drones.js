$(document).ready(function()
{
    $("index-table").hide();
});

function GetAll()
{
    $.ajax(
    {
        url: 'https://webstoreapps.azurewebsites.net/api/drone',
        type: "GET",
        success: function(data)
        {
            for(var i = 0; i < data.length; i++){
                $('#drone-table').append(
                    '<tr>'
                        +'<th id="nome"><a class="link" href="#">'+data[i].nome+'</a></th>'
                        +'<td id="modelo">'+data[i].modelo+'</td>'
                        +'<td id="cor">'+data[i].cor+'</td>'
                    +'</tr>'
                )
            }
            $(".table").show();
        } 
    })
}

function Getone()
{
    var dronename = $("#dronename").val();
    var path = 'https://webstoreapps.azurewebsites.net/api/drone/'+dronename;
    console.log(path);

    $.ajax(
    {
        url: path,
        type: "GET",
        success: function(data)
        {
                $('#drone-table').append
                (
                    '<tr>'
                        +'<th id="nome"><a class="link" href="#">'+data.nome+'</a></th>'
                        +'<td id="modelo">'+data.modelo+'</td>'
                        +'<td id="cor">'+data.cor+'</td>'
                    +'</tr>'
                )
            $(".table").show();
        } 
    })
}

function Insert()
{
    $.ajax(
        {
            url: 'https://webstoreapps.azurewebsites.net/api/drone/',
            type: "POST",
            dataType: "JSON",
            contentType: "application/JSON",
            headers:
            {
                'Accept' : 'application/json',
                'Content-Type' : 'application-json'
            },
            data: JSON.stringify
            (
                {
                    "nome" : $("#insertdronename").val(),
                    "modelo" : $("#insertdronemodel").val(),
                    "cor" : $("#insertdronecolor").val()
                }
            ),
            success: function(data)
            {
                console.log(data)
                alert("OK");
            },
            else : function (data)
            {
                console.log(data)
            }

    }) 
    
    //window.location.href = "Index.html";
}