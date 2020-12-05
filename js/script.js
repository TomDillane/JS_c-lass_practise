/*
$(document).ready(function() {
    $('.box').on('click', function() {
        let classNames = $(this).attr('class').split(' '); //by using split on space, makes two arrays of box and number
        $('.' + classNames[1]).css('background-color', 'red'); // creates a class that targets . and the number which is index 1 of the array
    });
});
*/

$(document).ready(function() {
    $('.box').on('click', function() {
        let classNames = $(this).attr('class').split(' '); //by using split on space, makes two arrays of box and number
        let boxClass = classNames[0]; // targets first index, which is box
        let className = classNames[1]; // targets second index of array, which is the number
        if($(this).css('background-color') == 'rgb(255, 0, 0') { // checks if .box color is red - this might not be necessary
            $('.' + className).css('background-color','#000'); // sets .number of this class to black
        }
        else  {
            $('.' + boxClass).css('background-color', '#000'); // sets .box to black as boxClass variable is calling array index 0
            $('.' + className).css('background-color', 'red'); // sets .number to red as className variable is calling array index 1
       }
    });
})