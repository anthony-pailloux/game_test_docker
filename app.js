let butMagic = document.getElementById("butMagic");

butMagic.addEventListener("click", () => {
  const random = 5;

  butMagic.classList.add("hidden");
  for (let index = 1; index <= 10; index++) {
    const button = document.getElementById("but" + index);

    button.classList.remove("hidden");
    button.addEventListener("click", (e) => {
        if (e.target.id == "but" + random){
            alert("gagner")
        }
        
    });
  }
});
