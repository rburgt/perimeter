# perimeter

A virtual interaction layer. Allows to respond to mouse movement around an element.


# Install

    npm install --save-dev perimeter


# Usage

Perimeter is distributed as an ecmascript 2015 module.

    import perimeter from 'perimeter';
    
    // bind to button element
    let buttonElement = element.querySelector('');
    let buttonPerimeter = perimeter.bindToElement(buttonElement, 50);
    
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

# Build

    npm run-script build

# Samples

Check the recipes folder for sample implementations. ( build the project to run samples )
