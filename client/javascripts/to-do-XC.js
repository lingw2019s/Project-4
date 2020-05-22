//jshint esversion: 6


let controller = function() {

  let addCommentFromInputBox = function() {
    //Semmy uses "$" to name variables that will contain jQuery objects
    let $new_comment;
    if ($(".comment-input input").val() !== "") {
      $new_comment = $("<p>").text($(".comment-input input").val());
      //$new_comment.hide();
      $(".comments").append($new_comment);
      localStorage.setItem("toDoList", $(".comments").html());
      //$new_comment.fadeIn();
      $(".comment-input input").val("");
    }
  };

  //Fire the button click event and add input to the list and local storage
  $(".comment-input button").on("click", function(event) {
    addCommentFromInputBox();

    //console.log($(".comments").html());
    //console.log(localStorage.getItem("toDoList"))
  });


  //Fire the keypress event and add input to the list and local storage
  $(".comment-input input").on("keypress", function(event) {
    if (event.keyCode === 13) {
      addCommentFromInputBox();
      //localStorage.setItem("toDoList", $(".comments").html());
      //console.log($(".comments").html());
    }
  });

  //Clear local storage and the list by clicking the "clear" button
  $(".comment-clear button").on("click", function(event) {
    localStorage.clear();
    $(".comments").html("");
  });

};

//Add previously stored item from local storage to the list if any
if("toDoList" in localStorage){
  $(".comments").html(localStorage.getItem("toDoList"));
  //document.querySelector("section.comments").innerHTML = localStorage.getItem("toDoList");
  console.log(localStorage.getItem("toDoList"));
} else {
  console.log("No stored items in localStorage!");
}

$(document).ready(controller);
