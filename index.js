(function(){
  var app = angular.module("MakrkdownViewer", ["ngSanitize"]);


  var MarkdownController = function($scope, $http) {
    $scope.message = "Markdown Previewer";
    $scope.textInput = 'Markdown previewer (this is heading)\n=======\n\nBuild with angularjs (this is subheading)\n-----------\n \n### and of course markedjs recommended by freecodecamp\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * first\n  * second\n  * third\n\nNumbered list:\n\n  1. first\n  2. second\n  3. third\n\nThe rain---not the reign---in\nSpain.\n\n *[Yoki Andika](https://medium.com/@yokiandika)*';

    $scope.$watch("textInput", function(result, init){
      $scope.textOutput = marked(result);
    });

  };
  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false
  });
  app.controller("MarkdownController", MarkdownController);
}());
