const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () =>{
    const name = input.name;
    const value = input.value;
    if (value){
        localStorage.setItem(name,value);
    }
});