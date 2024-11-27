$(".deletebutton").on("click",function(){
    $(this).parent("div").remove()
})
$(".product-cards").hover(function(){
    $(this).find(".extra-details").css("display","block");
},function(){
    $(this).find(".extra-details").css("display","none");
})