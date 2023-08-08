
const phoneElement = document.getElementById("root");
const count = document.getElementById("count")
count.innerText = 0

fetch("http://127.0.0.1:3000/phone")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);

    data.forEach((item) => {
      const outerDiv = document.createElement("div");
      const titleDiv = document.createElement("div");
      const descDiv = document.createElement("div");

      const title = document.createElement("p");
      title.innerHTML = item.name;

      const image = document.createElement("img");
      image.src = item.image;
      image.classList.add("phone-image"); // Add the phone-image class for styling

      const description = document.createElement("p");
      description.innerHTML = item.description;

      const specDiv = document.createElement("div");
      specDiv.classList.add("specs")

      item.specs.forEach((i) => {
        const spec = document.createElement("li");
        spec.innerHTML = i;
        specDiv.append(spec);
      });

      titleDiv.append(title);
      descDiv.append(description);

      outerDiv.classList.add("with-border", "card", "phone-div");

      outerDiv.append(titleDiv);
      outerDiv.append(image);
      outerDiv.append(descDiv);
      outerDiv.append(specDiv);

     

      phoneElement.appendChild(outerDiv);

      const button = document.createElement("button")
      button.innerText = "Buy"
      button.addEventListener("click", function(event){
        console.log(event)
        count.innerText = parseInt(count.innerText)===0?1:parseInt(count.innerText)+1
      })
      

      outerDiv.append(button);

    });
  })
  .catch((error) => {
    console.log(error);
  });


  function handleClick() {
    
  }