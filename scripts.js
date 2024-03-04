var cat = "Cat";
var dog = "Dog";
var frog = "Frog";

//This function modifies HTML elements for Task 4
function animalClicked(animal){
    //Get the elements to change
    var t4Text = document.getElementById("task4Text");
    var t4Label = document.getElementById("task4Label");
    var t4Image = document.getElementById("task4Image");
    var t4ImageSource = document.getElementById("task4ImageSource")

    //using the given variable for animal, set the fields accordingly.
    t4Text.value = "User Clicks " + animal;
    t4Label.innerText = animal + " is clicked"
    t4Image.src = animal + ".png";
    
    switch(animal){
        case cat:
            t4ImageSource.innerText = "I took this photo of my cat when he was doing cat things in my room last week."
            break;
        case dog:
            t4ImageSource.innerText = "This is a photo my mother took of our dogs playing recently."
            break;
        case frog:
            t4ImageSource.innerText = "I found this image online at the website \"http://animal-wildlife.blogspot.com/2011/08/tree-frog.html\"";
            break;
    }
}