"use strict"

$(document).ready(function(){

         
$('#validCity').click(function()                                                                    {

    var city = $('#city').val();

    if(city != ''){

        $.ajax({

            url:'https://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&APPID=ffe77524d7919ae2f90d39fbaa31f4eb" + "&lang=fr",
            type:"GET",
            dataType:"jsonp",
            success:function(data){
                var widget = show(data);
                
                $('#weather_description').html(widget);
                $('#city').val('');
                
            }


        });


    }else{
        $('#error').html("<div style='width:20%' class='alert alert-danger text-center m-auto'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>La case ne peut pas être vide...</div>");
    }

});
});

function show(data){
    return  "<h2 style='font-size:40px; font-weight: bold;'>Voici le temps à " + data.name +", " + data.sys.country +"</h2>" +   
            "<h3 style='padding-left:40px;'><strong>État</strong>: <img src='http://openweathermap.org/img/w/"+data.weather[0].icon+".png'> "+ data.weather[0].description+"</h3>" +
            "<h3 style='padding-left:40px;'><strong>Température</strong>: "+ data.main.temp +"&deg;C</h3>" +
            "<h3 style='padding-left:40px;'><strong>Pression Atmosphérique</strong>: "+ data.main.pressure  +" hPa</h3>" +
            "<h3 style='padding-left:40px;'><strong>Humidité</strong>: "+ data.main.humidity  +"%</h3>" +
            "<h3 style='padding-left:40px;'><strong>Température minimum</strong>: "+ data.main.temp_min  +"&deg;C</h3>" +
            "<h3 style='padding-left:40px;'><strong>Température maximum</strong>: "+ data.main.temp_max  +"&deg;C</h3>" +
            "<h3 style='padding-left:40px;'><strong>Vitesse du vent</strong>: "+ data.wind.speed  +" m/s</h3>" +
            "<h3 style='padding-left:40px;'><strong>Orientation du vent</strong>: "+ data.wind.deg  +"&deg</h3>" ;
        
                    
        }


