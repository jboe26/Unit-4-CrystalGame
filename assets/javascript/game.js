$(document).ready(function () {

    let wins = 0;
    let losses = 0;
    let totalScore = 0;

    let rubyValue, diamondValue, yellowValue, greenValue, currentGoal;

    function reset() {
        rubyValue = Math.floor(Math.random() * 11) + 1;
        diamondValue = Math.floor(Math.random() * 11) + 1;
        yellowValue = Math.floor(Math.random() * 11) + 1;
        greenValue = Math.floor(Math.random() * 11) + 1;

        currentGoal = Math.floor(Math.random() * 101) + 19;

        $("#goal").text(currentGoal);
        totalScore = 0;
        $("#totalScore").text(totalScore);
        $(".winorlose").text("");
    }

    reset();

    function handleClick(value) {
        totalScore += value;
        $("#totalScore").text(totalScore);

        if (totalScore === currentGoal) {
            wins++;
            $("#wins").text(wins);
            $(".winorlose").text("You Won!");
            reset();
        } else if (totalScore > currentGoal) {
            losses++;
            $("#losses").text(losses);
            $(".winorlose").text("You Lose!");
            reset();
        }
    }

    $(".crystal1").on("click", () => handleClick(rubyValue));
    $(".crystal2").on("click", () => handleClick(diamondValue));
    $(".crystal3").on("click", () => handleClick(yellowValue));
    $(".crystal4").on("click", () => handleClick(greenValue));

});
