
// calories calculator

document.getElementById('caloriesForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const exercise = document.getElementById('exercises').value;
  const duration = document.getElementById('duration').value;
  const weight = document.getElementById('weight').value;
  const height = document.getElementById('height').value;
  const age = document.getElementById('age').value;
  const result = document.getElementById('caloriesResult');
  const imgDisplay = document.getElementById('exerciseImage');
  const button = document.getElementById('calorie-button');
  console.log(exercise);
  console.log(duration);
  console.log(weight);
  console.log(height);
  console.log(age);

  try {
    const url = 'https://trackapi.nutritionix.com/v2/natural/exercise';
    const headers = {
      'Content-Type': 'application/json',
      'x-app-id': '5515ff3d',
      'x-app-key': 'e81732775d09b946c86ab5a9b5d995ce'
    }

    const bodyData = {
      "query": `${exercise} for ${duration}`,
      "weight_kg": weight,
      'height_cm': height,
      'age': age
    }

    const response = await fetch (url, {
      method: 'POST',
      headers: headers,
      body:JSON.stringify(bodyData)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const calories = data.exercises[0].nf_calories;
    const workout = data.exercises[0].name;
    console.log(calories);
    console.log(workout);
    result.innerHTML = `According to your personal data, engaging in ${workout} for ${duration} minutes is estimated to burn approximately ${calories} calories. Keep up the good work!`;
    imgDisplay.setAttribute('src', 'assets/imgs/background2.jpg');
    document.getElementById('results').hidden = false;
    document.getElementById('hidden-container').hidden = true;
    document.getElementById("warning").hidden = true;
  } catch (error) {
    document.getElementById("warning").hidden = false;
    console.error('Error: ', error);
  }
})

document.getElementById('reset-button').addEventListener('click', () => {
  document.getElementById('caloriesForm').reset();
  document.getElementById('results').hidden = true;
  document.getElementById('hidden-container').hidden = false;
})
