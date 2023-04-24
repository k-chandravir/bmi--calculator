function calculateBMI(){
    let weightInGrams = document.getElementById("weight").value;
    let heightInFt = document.getElementById("height_in_feets").value;
    let heightInInches = document.getElementById("height_in_inches").value;
    // let bmiResult = document.getElementById("bmi");

    let heightInMetre = (heightInInches * 0.0254) + (heightInFt * 0.3048);
    // let weightInKilograms = (weightInGrams / 1000);
    let weightInKilograms = weightInGrams;

    // console.log(weightInGrams, heightInFt, heightInInches, heightInMetre, weightInKilograms);

    let bmi = (weightInKilograms / (heightInMetre * heightInMetre));
    // console.log(bmi);
    document.querySelector('#bmi-result').innerHTML = Math.round(bmi);
    // console.log(weightInGrams);
    let finalVerdict = "You are ";
    if(bmi>=30){
        finalVerdict += "obese";
        document.querySelector('.bmi-result').style.color = "red";
    }else if(bmi >= 25 && bmi <= 29.9){
        finalVerdict += "overweight";
        document.querySelector('.bmi-result').style.color = "orange";
    }else if(bmi >= 18.5 && bmi <= 24.9){
        finalVerdict += "healthy";
        document.querySelector('.bmi-result').style.color = "greenyellow";
    }else if(bmi < 18.5){
        finalVerdict += "underweight";
        document.querySelector('.bmi-result').style.color = "yellow";
    }
    document.querySelector('#final-verdict').innerHTML = finalVerdict;
}