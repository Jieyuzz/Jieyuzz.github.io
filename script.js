var factButton = document.getElementById("factButton");
var clickCount = 0;
var generatedFact = document.getElementById("generatedFact");

var factList = [
  "For every suicide there are many more people who attempt suicide. A prior suicide attempt is the single most important risk factor for suicide in the general population.",
  "Suicide is the fourth leading cause of death in 15-19-year-olds.",
  "Only a few countries have included suicide prevention among their health priorities and only 38 countries report having a national suicide prevention strategy.",
  "More than 700 000 people die due to suicide every year."
]


if (factButton){
  factButton.addEventListener("click", changeFact)
}

function changeFact(){
  generatedFact.innerHTML = factList[clickCount];
  clickCount++;
  if (clickCount == factList.length){
    clickCount = 0;
  }
}
