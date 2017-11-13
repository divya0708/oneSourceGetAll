'use strict';

angular.module('oneSourceGetAllApp',[])
    
    .controller('CandyListController', ['$scope', function($scope) {
        $scope.candies=[
          {
          name:'Caramels',
          image:'images/Caramels.png',
          types:'Caramel Squares, Coffee Rio, Caramel Crunch, Caramel Creams, Jelly Belly Caramel Corn.',          
          description:'Caramels are made by cooking sugar and water together.',
          comment:''
          },
          {
          name:'Gummies',
          image:'images/Gummies.png',
          types:'Gummi bears, Gummi worms, Gummi Cheries, Gummi cola bottles, Gummi fish, Gummi banana strawberry ring.',
          description:'Gummies are gelatin based chewy candies that come in a variety of shapes, colors and flavors.',
          comment:''          
          },
          {
          name:'Chocolates',
          image:'images/Chocolates.png',
          types:'Hershey, Bar-Hershey, Milk Chocolate, Twix Mars, Snickers, Milk Duds, Milky Way, M&Ms, Kit Kat, Chocolate Covered Raisins.',
          description:'A chocolate bar is a chocolate confection in an oblong or rectangular form, which distinguishes it from bulk chocolate.',
          comment:''            
          },
          {
          name:'Hard Candies',
          image:'images/Hard-Candies.png',
          types:'Candy Buttons, Candy canes, Jolly Rancher, Life Savers, Rock, Sweethearts (candy).',
          description:'Hard candies, or boiled sweets, are sugary candies that dissolve slowly in the mouth.',
          comment:''   
          },
          {
          name:'Licorice',
          image:'images/Licorice.png',
          types:'Red Vines, Snaps, Twizzler.',
          description:'Licorice is a semi-soft candy, they are often black with licorice flavor or red and strawberry or cherry flavored.',
          comment:''          
          },
          {
          name:'Lollipops and Sours',
          image:'images/Lollipops.png',
          types:'Sugar Daddy, Chupa Chups.',
          description:'Lilies or Lollipops are hard candies.',
          comment:''          
          },
          {
          name:'Chewing Gums',
          image:'images/Chewing-Gum.png',
          types:'Peach Blossoms, Abba-Zaba, Bit-O-Honey, Sky Bar, Boston Fruit Slices, Mall Cups, Wrigleys Chewing Gum.',
          description:'Chewing gum, called also a gum and bubblegum, is a chewy candy.',
          comment:''          
          },
          {
          name:'Cotton Candy',
          image:'images/Cotton-Candy.png',
          types:'Blue Raspberry, Strawberry, Cherry Vanilla, Bubble Gum, Marshmallow, Champagne, Grape, Watermelon, Creamsicle, Mango.',
          description:'Cotton candy, popular food at carnivals and amusement parks, is made out of 100% sugar.',
          comment:''          
          }];
        
        
    }]);

 