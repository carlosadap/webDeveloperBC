// Check Off Specific Todos By Cliking
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
})

//Click on X to delete todo
$("ul").on("click", "span", function(e){
  $(this).parent().fadeOut(500, function(){
    $(this).remove(); //different this, this is the this.parent
  });
  e.stopPropagation();
});

//Adding items on enter
$("input[type='text']").keypress(function(e) {
  if (e.which === 13) {
    //grabbing new todo text
    const todoText = $(this).val();
    //clearing the input
    $(this).val("");
    //create a new li and add to ul
    $("ul").append(`<li> <span><i class='fas fa-cut'></i></span> ${todoText}</li>`)
}});

$(".fa-pencil-alt").click(function(){
  $("input[type='text']").fadeToggle();
});
