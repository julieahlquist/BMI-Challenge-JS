function BMICalculator() {

    this.metric_bmi = function (object) {
        const weight = object.weight;
        const height = object.height;
        if (weight > 0 && height > 0) {
            const finalBmi = weight / (height / 100 * height / 100);
            object.bmiValue = parseFloat(finalBmi.toFixed(2));
            this.setBMIMessage(object)
        }
    }
  
    this.setBMIMessage = function(object) {
        if (object.bmiValue < 18.5) {
            object.bmiMessage = "Underweight"
        }
        if (object.bmiValue > 18.5 && object.bmiValue < 25) {
            object.bmiMessage = "Healthy"
        }
        if (object.bmiValue > 25 && object.bmiValue < 30) {
            object.bmiMessage = "Overweight"
        }
        if (object.bmiValue > 30) {
            object.bmiMessage = "Obese"
        }
    }
}


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = BMICalculator;
}
