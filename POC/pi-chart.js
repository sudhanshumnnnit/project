<!DOCTYPE html>
<html ng-app="plunker">

  <head>
    <meta charset="utf-8" />
    <title>Angular-nvD3 Pie Chart</title>
    <script>document.write('<base href="' + document.location + '" />');</script>
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nvd3/1.8.1/nv.d3.min.css"/>    
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.9/angular.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3.min.js" charset="utf-8"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/nvd3/1.8.1/nv.d3.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-nvd3/1.0.5/angular-nvd3.min.js"></script>
    <script src="pi.js"></script>
  </head>

  <body ng-controller="MainCtrl">
    
    <nvd3 options="options" data="data"></nvd3>
    
    <br><a href="http://krispo.github.io/angular-nvd3/" target="_blank" style="float: right;">See more</a>
  </body>

</html>
