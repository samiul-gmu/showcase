// This way, we can load the jQuery from the head
// $(document).ready(function () {
//   $("h1").css("color", "red");
// });

// If we load the jQuery at the end of the body section, we do not need the above 'ready' function
$("h1").addClass("big-title margin-50");

// $("h1").removeClass("big-title");

console.log($("h1").css("color"));
console.log($("h1").css("font"));

console.log($("h1").hasClass("margin-50"));

// $("button").text("GOOD BYE");
$("button").html("<em>GOOD BYE</em>");

$("h1").click(function () {
  $("h1").css("color", "green");
});

$("button").click(function () {
  $("h1").css("color", "steelblue");
});

$(document).keypress(function (event) {
  console.log(event.key);
  $("h1").text(event.key);
});

$("input").on("mouseover", function () {
  $("h1").text("HOVER!");
});

$("h1").before("<button>Before</button>");

$("h1").after("<button>After</button>");

$("h1").prepend("<button>Prepend</button>");

$("h1").append("<button>Append</button>");

// $("button").remove();

$("input").on("click", function () {
  $("h1").fadeToggle(); // slideUp, slideDown, slideToggle
});
