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
                console.log(data.weather);
                
                if (data.weather[0].icon === "01d") {
                    document.getElementById('weather_image').innerHTML = '<img width="100%" src=./images/sun.jpg> '
                    document.getElementById('weather_video').innerHTML = '<iframe src="https://open.spotify.com/embed/track/7x303Rga3xZy5HtsETpIYy" width="100%" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
                    } else if (data.weather[0].icon === "02d") {
                        document.getElementById('weather_image').innerHTML = '<img width="100%" src=./images/éclairci.jpg> '
                        document.getElementById('weather_video').innerHTML = '<iframe src="https://open.spotify.com/embed/track/3rs38uHy7ALXr7PcF0yoWs" width="100%" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
                    } else if (data.weather[0].icon === "50d" ) {
                        document.getElementById('weather_image').innerHTML = '<img width="100%" src=./images/brume.jpg> '
                        document.getElementById('weather_video').innerHTML = '<iframe src="https://open.spotify.com/embed/track/75CjMcd8dZbmQ4QyFx6p6k" width="100%" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
                    } else if (data.weather[0].icon === "03d" || "04d") {
                        document.getElementById('weather_image').innerHTML = '<img width="100%" src=./images/couvert.jpg> '
                        document.getElementById('weather_video').innerHTML = '<iframe src="https://open.spotify.com/embed/track/6uJkNVWuI862z91mlR5WRr" width="100%" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
                    } else if (data.weather[0].icon === "09d" || "10d") {
                        document.getElementById('weather_image').innerHTML = '<img width="100%" src=./images/pluie.jpg> '
                        document.getElementById('weather_video').innerHTML = '<iframe src="https://open.spotify.com/embed/track/7q3qX7Ees3FZtRFJXWgPZs" width="100%" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
                    } else if (data.weather[0].icon === "11d") {
                        document.getElementById('weather_image').innerHTML = '<img width="100%" src=./images/orage.jpg> '
                        document.getElementById('weather_video').innerHTML = '<iframe src="https://open.spotify.com/embed/track/3Xwvqx3nZGA7PUV2PtLLkY" width="100%" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
                    } else if (data.weather[0].icon === "13d") {
                        document.getElementById('weather_image').innerHTML = '<img width="100%" src=./images/neige.jpg> '
                        document.getElementById('weather_video').innerHTML = '<iframe src="https://open.spotify.com/embed/track/39P1JuMW1fVnuX9KNF7VYM" width="100%" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
                    } 
            }
        });
    }else{
        $('#error').html("<div style='width:20%' class='alert alert-danger text-center m-auto'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>La case ne peut pas être vide...</div>");
    }

});
});

function show(data){
    return  "<h2 style='font-size:40px; font-weight: bold;'>Voici le temps à " + data.name +", " + data.sys.country +"</h2>" +   
            "<h3 style='padding-left:40px;'><strong>État</strong>: <img src='https://openweathermap.org/img/w/"+data.weather[0].icon+".png'> "+ data.weather[0].description+"</h3>" +
            "<h3 style='padding-left:40px;'><strong>Température</strong>: "+ data.main.temp +"&deg;C</h3>" +
            "<h3 style='padding-left:40px;'><strong>Pression Atmosphérique</strong>: "+ data.main.pressure  +" hPa</h3>" +
            "<h3 style='padding-left:40px;'><strong>Humidité</strong>: "+ data.main.humidity  +"%</h3>" +
            "<h3 style='padding-left:40px;'><strong>Température minimum</strong>: "+ data.main.temp_min  +"&deg;C</h3>" +
            "<h3 style='padding-left:40px;'><strong>Température maximum</strong>: "+ data.main.temp_max  +"&deg;C</h3>" +
            "<h3 style='padding-left:40px;'><strong>Vitesse du vent</strong>: "+ data.wind.speed  +" m/s</h3>" +
            "<h3 style='padding-left:40px;'><strong>Orientation du vent</strong>: "+ data.wind.deg  +"&deg</h3>" ;
        
                    
        }


