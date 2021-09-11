const imgSrcs = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

const randomIndex = () =>{
    return Math.floor(Math.random() * 6);
}

const shuffleDice = (time) => {
    let count = 0;
    let handle = setInterval(() => {
        let randomDice1 = randomIndex();
        let randomDice2 = randomIndex();
        $("#dice-1").attr("src", imgSrcs[randomDice1]);
        $("#dice-2").attr("src", imgSrcs[randomDice2]);

        count = count + 100;

        if(count >= time){
            clearInterval(handle);
            if(randomDice1 > randomDice2){
                $("#player1").addClass("winner");
            }else if(randomDice1 < randomDice2){
                $("#player2").addClass("winner");
            }else{
                $("#player1").addClass("winner");
                $("#player2").addClass("winner");
            }
            play = true;
        }
    }, 110);
}

let play = true;

$("#play").on("click", () =>{
    if(play){
        play = false;
        $("#player1").removeClass("winner");
        $("#player2").removeClass("winner");
        shuffleDice(1000);
    }
})

$("#play").on("mousedown", () => {
    $("#play").addClass("play-button-active");
})

$("#play").on("mouseup", () => {
    $("#play").removeClass("play-button-active");
})