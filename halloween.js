const surpriseIcon = document.getElementById("surprise-icon");
const surpriseTitle = document.getElementById("surprise-title");
const surpriseMessage = document.getElementById("surprise-message");
const surpriseButton = document.getElementById("surprise-button");

// AI-assisted code: These are the possible Halloween surprises.
const surprises = [
    {
        icon: "👻",
        title: "The Friendly Ghost!",
        message: "Boo! Don't be scared. This ghost just wants some candy."
    },
    {
        icon: "🎃",
        title: "Pumpkin Power!",
        message: "A magical pumpkin has appeared. Your Halloween luck is looking good!"
    },
    {
        icon: "🧙‍♀️",
        title: "The Witch's Spell!",
        message: "Abracadabra! May your night be full of spooky surprises."
    },
    {
        icon: "🧛",
        title: "Vampire Alert!",
        message: "A vampire is nearby! Better keep your garlic close."
    },
    {
        icon: "🦇",
        title: "Bat Attack!",
        message: "A little bat flew by to wish you a frightfully fun Halloween!"
    },
    {
        icon: "🍬",
        title: "Trick or Treat!",
        message: "Lucky you! You've discovered a magical stash of Halloween candy."
    }
];

// AI-assisted code: Pick and display a random surprise when clicked.
surpriseButton.addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * surprises.length);
    const chosenSurprise = surprises[randomIndex];

    surpriseIcon.textContent = chosenSurprise.icon;
    surpriseTitle.textContent = chosenSurprise.title;
    surpriseMessage.textContent = chosenSurprise.message;
});

console.log("Spooky Surprise is ready!")