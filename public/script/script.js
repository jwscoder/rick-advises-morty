const url = "https://api.adviceslip.com/advice";

const adviceText = document.getElementById("adviceText");
const adviceBtn = document.getElementById("adviceBtn");



adviceBtn.addEventListener("click", function(){
  fetch(url)
  .then(data => {
    return data.json()
  })
  .then(res => {
    console.log(res.slip.advice)
    adviceText.textContent = res.slip.advice;
  });
});
