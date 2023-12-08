function convertTemprature() {
  let val = document.getElementById("input-value");
  let result = document.getElementById("result");
  let input = document.getElementById("input");
  let output = document.getElementById("output");

  val.addEventListener("keyup", convertTemprature);
  input.addEventListener("change", convertTemprature);
  output.addEventListener("change", convertTemprature);

  let inputValue = input.value;
  let outputValue = output.value;

  // celsius
  if (inputValue === "celsius" && outputValue === "°F") {
    result.value = `${Number((val.value * 9) / 5) + 32} ${outputValue}`;
  } else if (inputValue === "celsius" && outputValue === "°K") {
    result.value = `${Number(val.value) + 273.15} ${outputValue}`; 
  } else if (inputValue === "celsius" && outputValue === "°C") {
    result.value = `${val.value} ${outputValue}`;
  }

  // fahrenhiet
  if (inputValue === "fahrenhiet" && outputValue === "°C") {
    result.value = `${Number((val.value - 32) * 5) / 9} ${outputValue}`;
  } else if (inputValue === "fahrenhiet" && outputValue === "°K") {
    result.value = `${Number(((val.value - 32) * 5) / 9) + 273.15} ${outputValue}`;
  } else if (inputValue === "fahrenhiet" && outputValue === "°F") {
    result.value = `${val.value} ${outputValue}`;
  }

  // kelvin
  if (inputValue === "kelvin" && outputValue === "°C") {
    result.value = `${Number(val.value) - 273.15} ${outputValue}`;
  } else if (inputValue === "kelvin" && outputValue === "°F") {
    result.value = `${Number(((val.value - 273.15) * 9) / 5) + 32} ${outputValue}`;
  } else if (inputValue === "kelvin" && outputValue === "°K") {
    result.value = `${val.value} ${outputValue}`;
  }
}

function resetForm(){
  document.getElementById("myForm").reset();
} 
