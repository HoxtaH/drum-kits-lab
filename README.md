# drum-kits-lab
Javascript building a 3 piece digital drum kit.
## if you would like to see the original doc that is color coated and highlighted.  visit this link http://bit.ly/2PQLl8D

DrumKit Lab 

Lab Description : Today we will be building a drum-kit web page.  You will have the ability to either click on the keyboard images or use your keyboard to hear the drum sounds.  This lab will expose you to 3 different developer concepts.  Variables, Functions, and Fetching DOM ELEMENTS.  In your Drumkits lab we will be building out the javascript file specifically.  

Part 1: Declaring Variables / Fetching DOM Elements

1.0 -  DOM stands for Document Object Model and is the basic API (Application Program Interface) for HTML pages.  On lines 9-20 of the index.html file are our audio files.  They are referenced by the <audio></audio> tags and everything that is in between.  The 3 tags are for the highHat, snareDrum, and kickDrum files.  We preloaded them into our page to be used later.

1.1 -  Lets start by creating a variable to store our highHat file.  Since this file does not change ever.  We will tell javascript it is a const (constant) variable.  We perform this action by typing what is below at the top of our javascript file:

	const highHat;

1.2 -  Our variable has been created but it currently has no value.  As stated above in 1.1 we want to store our highHat file in our newly created highHat Variable.  But the highHat audio file is not located in our drumkits.js file.  It is currently resting in our index.html page.  Each <audio></audio> tag has an ID that we can use to fetch our file.  So lets fetch it and store the file in our variable.  To perform this,  change the  highHat Variable to the following: 

	const highHat = document.getElementById("highHat");

Part 2: Functions 

2.0 - Functions are one of the most important concepts in programming and development.  Functions allow you define behavior.  In this scenario, we want to give our drumkit the ability to play sounds.  

2.1 - Our highHat Variable has been stored by fetching it from the  <audio></audio> tags ID attribute.  Which is located on our index.html document.  That is why we used the line of code: document.getElementById("highHat");  Now we need to tell Javascript what to do with that highHat Variable.  In your drumkit.js file their is already a pre built function called cutSoundBiteOnKeyPress.  We want use this as well as defining our play function.  To do this type the following below your highHat Variable declaration line of code : 

        function playHighHat() {
	        cutSoundBiteOnKeyPress(highHat);
    	        highHat.play(); 
        }

2.2 - Run your code!  In your preview page you should be able to click the H key image or tap the H key on your keyboard.   You should hear a highat sound!.  But we still are not finished.  We need to perform the exact same actions with our snareDrum and kickDrum files.  Recreate the same steps performed for your highHat for both the snareDrum and kickDrum.  

Part 3 : Duplicating (Replicating what you did)

3.1 -  If you recall, in 1.1 we created a variable for our highHat audio file to be stored into.  Lets do the EXACT samething with snareDrum and kickDrum.  On two seperate new lines.  This time just go ahead fetch the document from the index.html file.  If you dont remember how to do that.  You can glance up at 1.2.  Except the ID is not “highHat”.  It would be either “snareDrum” or “kickDrum”, depending on which Variable you are declaring.  

3.2 - Similar to 2.1 you want to declare a function that tells javascript what to do with your newly stored audio Variables.  This time make two functions.  One called playSnareDrum the other playKickDrum.  If you are unsure as to how to do this reference 2.1 for further details.  Implementation is generally the same but 3 things change.  

	1) The name of the function.  This is where you want to insert the two function names mentioned above.
	2) The variable being given to cutSoundBiteOnKeyPress() function.  In part two of course we passed highHat Variable within the playHighHat function.  You want to do the exact same with the functions and their corresponding Variable names.  (i.e: snareDrum with playSnareDrum, kickDrum with playKickDrum)
	3) The Variable being used with .play().  Similar to what was mentioned above you want to use the Variable that corresponds with the function you are building.  (i.e: snareDrum.play() in playSnareDrum, kickDrum.play() in playKickDrum)

3.3 - Run your code.  If all is well your drumkit should work!!!!  If it does then you should be proud.  If not.  Then its time to work on your error handling skills.  
