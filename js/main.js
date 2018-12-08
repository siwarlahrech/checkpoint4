
$("#bold").click(function(){
    $("#demo").toggleClass("bold");
});

$("#italic").click(function(){
    $("#demo").toggleClass("italic");
});

$("#underline").click(function(){
    $("#demo").toggleClass("underline");
});

$("#mySelect").change(function() {
    $("#demo").css("font-family", $(this).val());
});

$("#urSelect").change(function() {
    $("#demo").css("font-size", $(this).val());
});