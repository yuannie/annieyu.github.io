$(document).ready(function(){
    $.scrollify({
        section : "section",
    });
    
//Each function links to it's appropriate work link and changes the thumbnail, color of unhighlighted links, and then header & highlighted link color, then background color   
function sep(){
    thumbnailsChange("assets/SEP/SEP_Bird.gif");
    textColorChange("#workHeader", "#sep", "#39BCA9", "#FCB125");
}

function resumesMake(){
    thumbnailsChange("assets/resumesmake/board.jpg");
    textColorChange("#workHeader", "#resumesmake", "#CA322F", "#134667");
}

function fatPug(){
    thumbnailsChange("assets/fatpug/startscreen.gif");
    textColorChange("#workHeader", "#fatpug", "#FBAD17", "#F37A60");
}    

function straightRound(){
 thumbnailsChange("assets/straightround/straightround2.png");    
textColorChange("#workHeader", "#straightround", "#D22167", "#F0ECEC");
}    
 
function lookBack(){
 thumbnailsChange("assets/lookback/banner.png");
 textColorChange("#workHeader", "#lookback", "#3A252E", "white");
}     

    
//Resets page, hides thumbnails, header and links go back to grey, and background goes back to white
    
function thumbnailsBack(){
    $(".thumbnails").css("opacity", 0);
    $(".thumbnails").css("transition", "opacity 0.5s");
    textColorChange("#workHeader", ".worklinks", "#808284", "white");
    
    
    $("#aboutHeader").css("opacity",1);
    $("#aboutHeader").css("color", "#808284");
}

//Lowers opacity of all links, returns highlighted link opacity to 1, changes font color of element & element 2, changes background color of page
function textColorChange(element, element2, color, bgcolor){
    toWhite();
    $(".worklinks").css("opacity", 0.15);
    $("#aboutHeader").css("opacity",0.1);
    $(element2).css("opacity", 1);
    $(element).css("color", color);
    $(element2).css("color", color);
    $("body").css("background", bgcolor);
    $("body").css("transition", "background 1s");
}

//Makes links white before fading
function toWhite(){
    $(".worklinks").css("color", "white");
    $("#aboutHeader").css("color","white");
}
    
//Changes thumbnails and shows them
function thumbnailsChange(source)
{
    $(".thumbnails").attr("src", source);
    $(".thumbnails").css("opacity", 1);
    $(".thumbnails").css("transition", "opacity 0.5s");
}

//Fades About Header in and out
$("#aboutHeader").mouseover(function(){$("#aboutHeader").css("color", "black")});
$("#aboutHeader").mouseout(function(){$("#aboutHeader").css("color", "#808284")});
    
//Calls appropriate functions upon mouseovers
$("#sep").mouseover(sep);
$("#resumesmake").mouseover(resumesMake);
$("#fatpug").mouseover(fatPug);
$("#straightround").mouseover(straightRound);
$("#lookback").mouseover(lookBack);

//Resets page when not hovering over any work links
$(".worklinks").mouseout(thumbnailsBack); 
    
//Resets first link opacty animation
$("#firstlink").mouseover(function(){
    $("#firstlink").css("animation", "none");
})
    
function resumeAppear(){
    $("#resumeJPG").css("opacity", 1);
    $("#resumeJPG").css("transition", "opacity 1s");
    $("#resumeJPG").css("animation-name", "resumeMove");
    $("#headshot").css("opacity", 0);
    $("#headshot").css("transition", "opacity 1s");
    $("body").css("color", "#d3d3d3");  
    $("body").css("transition", "color 1s");
}
function resumeDisappear(){
    $("#headshot").css("opacity", 1);
    $("#headshot").css("transition", "opacity 1s");
    $("#resumeJPG").css("opacity", 0);
    $("#resumeJPG").css("transition", "opacity 0.5s");
    $("body").css("color", "#808284");  
    $("body").css("transition", "color 1s");
}
$("#resume").mouseover(resumeAppear);
$("#resume").mouseout(resumeDisappear);    
    

function animateHeadshot(){
    $("#headshot").css("animation-duration", "2s");
    $("#headshot").show();
}
    
$("#aboutme").mouseover(animateHeadshot);

$("#landingAnnie").click(function(){
  $.scrollify.move("#2");
});
    
$("#landingYu").click(function(){
  $.scrollify.move("#2");
});
    
    
$("#aboutHeader").click(function(){
  $.scrollify.move("#2");
});
    

});