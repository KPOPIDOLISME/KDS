// ===============================
// KDS JavaScript
// ===============================

// Show one screen and hide the others
function showScreen(screenId) {
    const screens = document.querySelectorAll(".screen");

    screens.forEach(function(screen) {
        screen.classList.remove("active");
    });

    const selectedScreen = document.getElementById(screenId);

    if (selectedScreen) {
        selectedScreen.classList.add("active");
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}

// Wait until page loads
document.addEventListener("DOMContentLoaded", function () {

    console.log("KDS Loaded Successfully!");

    // Feedback button
    const feedbackBtn = document.querySelector("#feedback button");

    if (feedbackBtn) {
        feedbackBtn.addEventListener("click", function () {
            alert("💜 Thank you for your feedback!");
        });
    }

});

// Future AI Coach
function startAITraining() {

    alert(
        "🤖 AI Coach is coming soon!\n\nKeep practicing every day!"
    );

}

// Demo Practice Streak
let streak = 1;

function increaseStreak() {

    streak++;

    alert("🔥 Practice Streak: " + streak + " days!");

}
