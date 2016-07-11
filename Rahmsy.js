angular.module('Rahmsy',[])
.controller('RahmsyCtrl',function($scope){
$scope.start = 'Hello World';

$scope.fruites = [ { 'id': 0 , 'Type' : 'SpringFruits' } , { 'id': 1 , 'Type' : 'summerFruit'  } , {'id': 2 , 'Type' : 'Winter"Fruits' } , {'id': 3 , 'Type' : 'FallFruit' } ];

$scope.fruitsList= [ {'name': 'Orange', 'Group': 'summer"Fruit'  } ,
{'name': 'Orange', 'Group': 'Winter"Fruits'  } ,
{'name': 'Banana', 'Group': 'Winter"Fruits'  } ,
{'name': 'GrapeFruite', 'Group': 'FallFruit'  } ,
{'name': 'Grape', 'Group': 'FallFruit'  } ,
{'name': 'Peace', 'Group': 'FallFruit'  } ,
{'name': 'Watermelon', 'Group': 'summerFruit'  } ,
{'name': 'guacamole', 'Group': 'summerFruit'  } ,
{'name': 'Tomamto', 'Group': 'summerFruit'  } ,
{'name': 'strawberry', 'Group': 'SpringFruits'  } ,
{'name': 'cranberry', 'Group': 'SpringFruits'  } ]
  

     $scope.currnetCatagory = null; 

    // This is a private function now and can't be used publicly 
    function setCurrentCatagory(catagory){
        $scope.currnetCatagory = catagory ; 
    }
    function alertUser(catagory){
       alert(catagory.Type);
    }
     //But once we hook it to the scope it becomes public
      // This we allow us to use it publicly 
     $scope.setCurrentCatagory = setCurrentCatagory ;

});
/*The example 
1- it filter a group of fruits by whatever clicked. 
The way to do it is by having a property set in the instance which is  $scope.currnetCatagory
and have a set method.

2- have the the fruitlist filter according to whatever chose in the proprty
There has to be one common proprty between the two losts Fruites and FruitsList thats how we are gonna match em   
*/