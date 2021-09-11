const images = [  "dice-01.svg",
                "dice-02.svg",
                "dice-03.svg",
                "dice-04.svg",
                "dice-05.svg",
                "dice-06.svg"  ];

let dice = document.querySelectorAll("img");

const rollButton = document.getElementById("roll") 
function roll(){
    console.log()
    dice.forEach(function(die){
        die.classList.add("shake");
    });
    setTimeout(function(){
        dice.forEach(function(die){
            die.classList.remove("shake");
        })
    
        let dieOneValue = Math.floor(Math.random() * images.length);
        let dieTwoValue = Math.floor(Math.random() * images.length);
        console.log(dieOneValue, dieTwoValue)
        document.querySelector("#die-1").setAttribute("src", images[dieOneValue])
        document.querySelector("#die-2").setAttribute("src", images[dieTwoValue])
        document.querySelector("#total").innerHTML = "Your roll is "  + ((dieOneValue + 1) + (dieTwoValue + 1))
    } , 1000)  
}
rollButton.addEventListener("click", roll)

roll()