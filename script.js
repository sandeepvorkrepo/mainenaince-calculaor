(function () {
    const calcBtn = document.getElementById("calc");
    const resetBtn = document.getElementById("reset");

    function getSex() {
        return document.querySelector('input[name="sex"]:checked').value;
    }

    function calculateCalories() {
        const weight = Number(document.getElementById("weight").value);
        const height = Number(document.getElementById("height").value);
        const age = Number(document.getElementById("age").value);
        const sex = getSex();
        const activity = Number(document.getElementById("activity").value);

        if (!weight || !height || !age) {
            alert("Please fill in all fields.");
            return;
        }

        let bmr = sex === "male"
            ? 10 * weight + 6.25 * height - 5 * age + 5
            : 10 * weight + 6.25 * height - 5 * age - 161;

        let maintenance = bmr * activity;

        document.getElementById("bmr").textContent = Math.round(bmr);
        document.getElementById("maintenance").textContent = Math.round(maintenance);
        document.getElementById("results").style.display = "block";
    }

    calcBtn.addEventListener("click", calculateCalories);
    resetBtn.addEventListener("click", () => {
        document.getElementById("calorie-form").reset();
        document.getElementById("results").style.display = "none";
    });
})();
