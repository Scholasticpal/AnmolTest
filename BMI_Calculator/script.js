function calculateBMI() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);
    
    if (isNaN(weight) || isNaN(height)) {
      document.getElementById('result').innerHTML = "Please enter valid weight and height.";
      return;
    }
    
    if (weight <= 0 || height <= 0) {
      document.getElementById('result').innerHTML = "Weight and height must be greater than 0.";
      return;
    }
    
    var bmi = weight / (height * height);
    document.getElementById('result').innerHTML = "Your BMI is: " + bmi.toFixed(2);
  }
  