function BMICalculator() {

    this.metric_bmi = function (object) {
        let weight = object.weight;
        let height = object.height;
        if (weight > 0 && height > 0) {
            let finalBmi = weight / (height / 100 * height / 100);
            object.bmiValue = parseFloat(finalBmi.toFixed(2));
            this.setBMIMessage(object)
        }
    }

    BMICalculator.prototype.imperial_bmi = function(object) {
        let weight = object.weight;
        let height = object.height;
        if (weight > 0 && height > 0) {
          let finalBmi = weight / (height * height) * 703;
              object.bmiValue = parseFloat(finalBmi.toFixed(2));
              setBMIMessage(object);
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

    this.imperial_bmi = function (object) {
        let weight = object.weight;
        let height = object.height;
        if (weight > 0 && height > 0) {
          let finalBmi = weight / (height * height) * 703;
              object.bmiValue = parseFloat(finalBmi.toFixed(2));
              setBMIMessage(object);
        }
      };
}


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = BMICalculator;
}
