// Find the room elements
const room = document.getElementById("room");
const moodTitle = document.getElementById("mood-title");
const moodDescription = document.getElementById("mood-description");
const roomIcon = document.getElementById("room-icon");
const decor = document.getElementById("decor");

// Find all mood buttons
const moodButtons = document.querySelectorAll(".mood-btn");

// Information for each mood
const moods = {
    dreamy: {
        title: "Sweet & Dreamy",
        description: "A little pink, a little magic.",
        icon: "☁️",
        decor: "✦ ♡ ✦"
    },

    happy: {
        title: "Sunshine Energy",
        description: "Today is a good day to smile!",
        icon: "🌞",
        decor: "☀ ✧ ☀"
    },

    chill: {
        title: "Peaceful & Cozy",
        description: "Take a breath. You deserve some rest.",
        icon: "🌿",
        decor: "❀ ✧ ❀"
    },

    mysterious: {
        title: "Midnight Magic",
        description: "A little mystery looks good on you.",
        icon: "🌙",
        decor: "✦ ☾ ✦"
    }
};

// Function to change the room
function changeMood(mood) {
    const selectedMood = moods[mood];

    if (!selectedMood) {
        return;
    }

    // Change the background color
    room.className = "room";

    if (mood !== "dreamy") {
        room.classList.add(mood);
    }

    // Change the room's text and decorations
    moodTitle.textContent = selectedMood.title;
    moodDescription.textContent = selectedMood.description;
    roomIcon.textContent = selectedMood.icon;
    decor.textContent = selectedMood.decor;

    // Highlight the selected button
    moodButtons.forEach(function(button) {
        button.classList.remove("active");
    });

    const activeButton = document.querySelector(
        '.mood-btn[data-mood="' + mood + '"]'
    );

    if (activeButton) {
        activeButton.classList.add("active");
    }
}

// Add click events to all mood buttons
moodButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        changeMood(button.dataset.mood);
    });
});

console.log("Mood Room JavaScript loaded successfully!");