// check of specific todos by clicking

  $("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
  });

//click on X to delete

  $("ul").on("click", "span", function(event) {
    //remove including parent element
    $(this).parent().fadeOut(500, function(){
      $(this).remove()
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
  console.log("keypressed")
  if(event.which === 13){
//grabbing new todo text from input 
    let todoText = $(this).val()
    $(this).val("");
// create a new li and add to ul
    $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>")
  }
});

$(".fa-anchor").click(function(){
  $("input[type='text']").fadeToggle();
})