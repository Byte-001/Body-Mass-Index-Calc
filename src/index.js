const bmiText = document.getElementById('bmi')
const descp = document.getElementById('desc')
const form = document.querySelector('form')

form.addEventListener('submit', calculateBMI)
form.addEventListener('reset', resetForm)

function calculateBMI(event) {
    event.preventDefault()

    const weight = parseFloat(form.weight.value)
    const height = parseFloat(form.height.value)

    const meterHeight = height / 100
    const bmi = weight / Math.pow(meterHeight, 2)

    bmiText.textContent = bmi.toFixed(2)

    if(isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0){
          alert('Pls enter a valid number')
          return
    }

    if(bmi < 18.5){
        descp.textContent = 'You are underweight'
        bmiText.style.color = "orange"
    } else if(bmi >= 18.5 && bmi <= 24.9){
        descp.textContent = 'You are normalweight'
        bmiText.style.color = "green"
    } else if(bmi >= 25 && bmi <= 29.9){
        descp.textContent = 'You are overweight'
        bmiText.style.color = "lightcoral"
    } else if(bmi >= 30 && bmi <= 39.9){
       descp.textContent = 'You are obesity'
       bmiText.style.color = "red"
    } else if(bmi >= 40){
       descp.textContent = 'You are extreme obesity'
       bmiText.style.color = "crimson"
    } 
}

function resetForm(){
    bmiText.textContent = ''
    descp.textContent = ''
    form.weight.value = 0
    form.height.value = 0
}