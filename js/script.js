const input = document.querySelector("input");
input.addEventListener("change", updateValue);
input.addEventListener("mousemove", updateValue)

function updateValue() {
    const percent = document.querySelector('span')
    percent.textContent = this.value;
    document.documentElement.style.setProperty("--light", this.value / 100)
    document.documentElement.style.setProperty("--blur", this.value / 4 + "px")
}