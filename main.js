var descriptorString = "";
var i = 0;

var buildingAdjectives = [
  "stone-loving, ",
  "cosmopolitan, ",
  "smooth, ",
  "burghal "
];
var buildingNouns = [
  "townie.",
  "big-city person.",
  "urbanite."
];

var natureAdjectives = [
  "Nature-loving, ",
  "green, ",
  "tree-hugger, ",
  "barefoot "
  ];
var natureNouns = [
  "eagle freak.",
  "ecologist.",
  "Naturalist.",
  ];

var foodAdjectives = [
  "juicy, ",
  "tasty, ",
  "bitter, ",
  "raw "
];

var foodNouns = [
  "gastronome.",
  "gourmet.",
  "epicure."
];
$(document).ready(function() {
    $('#img1').click(function() {
  $('#img1').attr("src", "https://source.unsplash.com/category/buildings/400x300");
  descriptorString += buildingAdjectives[i++];
  $("#stringGenerator").text = descriptorString;
      });

    $('#img2').click(function() {
  $('#img2').attr("src", "https://source.unsplash.com/category/nature/400x300");
  descriptorString += natureAdjectives[i++];
  $("#stringGenerator").text = descriptorString;
      });

    $('#img3').click(function() {
  $('#img3').attr("src", "https://source.unsplash.com/category/food/400x300");
  descriptorString += foodAdjectives[i++];
  $("#stringGenerator").text = descriptorString;
      });

    });
