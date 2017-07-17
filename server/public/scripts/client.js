console.log('angular controller');

var photoGallery = angular.module('photoGallery',[]);
photoGallery.controller('PhotoController', function(){

var gallery = this;
gallery.images = photoArray;
console.log(photoArray);
console.log('PhotoController');

//switching the image visibility
gallery.toggle = function(image){
    console.log(image);
    // ! sets it equal to the opposite of what it was
    image.visible = !image.visible;
    console.log(image.visible);

    if (image.visable=== true){
      image.count = image.count +=1;
      console.log('Image count:', image.count);
    }
  };
});
