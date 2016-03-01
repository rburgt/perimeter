# perimeter

A virtual interaction layer. Allows to respond to mouse movement around an element.

![perimeter-basic-recipe](https://cloud.githubusercontent.com/assets/299887/12561923/b84409e8-c3a2-11e5-96e3-775375c4cafb.gif)

# Install

    npm install --save-dev perimeter


# Usage

Perimeter is distributed as an ecmascript 2015 module. The sample below assumes you are using browserify and babelify.

    import Perimeter from 'perimeter';
    
    // bind to button element
    let buttonElement = element.querySelector('.cssSelector');
    let buttonPerimeter = new Perimeter(buttonElement, 50);
    
    buttonPerimeter.addEventListener('mouseenter', function(){
        // respond when mouse enters the perimeter
    });
    
    buttonPerimeter.addEventListener('mouseleave', function(){
        // respond when mouse leaves the perimeter
    });
    
    buttonPerimeter.addEventListener('mousemove', function(){
        // respond to mouse move inside perimeter
    });

Alternatively you can use the build version to use a global object (check the recipes)

# Build standalone version

To create the stand alone version of the library run the following script.

    npm run-script build-standalone
    
This will create a readable version `build\perimiter.standalone.js` and a minified version `build\perimiter.standalone.min.js`. 
Including this one of these files on a page will expose perimiter under the `window.perimiter` variable.

# Samples

Check the recipes folder for sample implementations. ( build the project to run samples )


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/rburgt/perimeter/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

