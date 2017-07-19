<!DOCTYPE html>

<html>

<!-- just like we source css style sheets and other resources, we can source javascript files. this is stylistically preferred -->

<script type="text/javascript" src="lightbulbExamples.js"></script>



<body>



<h2>JavaScript Example</h2>



<!-- onclick calls the javascript function "turnOn" when it is clicked. turnOn is defined in the turnOn.js file we included! -->

<button onclick="turnOn()">Turn on the light</button>



<!-- it's important to label the image with an id in order to change the image later using javascript -->

<img id="myImage" src="https://www.w3schools.com/js/pic_bulboff.gif" style="width:100px">



<button onclick="turnOff()">Turn off the light</button>



<!-- javascript can change the html! pay careful attention to the value after 'Times On:' -->

<p id='timesOnLabel'>Times On: 0</p>



<!-- javascript can control the whole html document -->

<button onclick="randomColor()">Change Background Color</button>







</body>

</html>