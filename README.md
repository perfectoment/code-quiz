# Code Quiz

I created a quiz game to test the user's knowledge of Javascript. When the game begins a timer also begins. The user will be asked four questions about Javascript, for every wrong question the time will go down. When either the timer ends or the player has answered all of the questions, the users score will be revealed and they may enter their score into a high-score functionality.

## Code Snippet of Question Cheking Function
```function questionChecker (event) {
    var textPuller = event.target.textContent;
    if(textPuller === questions[currentQuestion].answer){
        currentQuestion++;
        correctCounter++;
        showCurrentQuestion();
        console.log(correctCounter)
        
        
    }
    else{
         secondsLeft = (secondsLeft - 10);
         currentQuestion++;
         showCurrentQuestion();
    }
    score.textContent = "Your Score Is: " + toString(correctCounter);
    }

button1.addEventListener("click", questionChecker);
button2.addEventListener("click", questionChecker);
button3.addEventListener("click", questionChecker);
button4.addEventListener("click", questionChecker);


  ```

## Screenshots
![Screenshot](assets/quizstart.PNG "Quiz Start")
![Screenshot](assets/screenshot2.PNG "Quiz Start")


## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Bootstrap](https://getbootstrap.com)

## Deployed Link

* [See Live Site](https://perfectoment.github.io/code-quiz/)


## Author

* **Ryan Nemec** 

- [Link to Portfolio Site](https://perfectoment.github.io/Ryan-Portfolio/)
- [Link to Github](https://github.com/perfectoment)
- [Link to LinkedIn](https://www.linkedin.com/in/ryan-nemec-5a6b3a66/)


## License

This project is licensed under the MIT License 

