document.addEventListener('DOMContentLoaded', function() {
    const character = document.getElementById('character');
    const gameArea = document.getElementById('gameArea');
    const gameAreaWidth = gameArea.offsetWidth;
    const birdboxCenter = document.getElementById('birdbox-center');
    const birdInputContainer = document.getElementById('bird-input-container');
    let left = 0; // Initialize `left` based on character initially centered
    let keys_pressed = [];
    const correct_combination = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    const sequenceText = ["'up'", "'up'", "'down'", "'down'", "'left'", "'right'", "'left'", "'right'", "'B'", "'A'"];
    let inputActive = false;
    let animationInProgress = false; // Flag to track animation state

    document.addEventListener('keydown', function(event) {
        if ([37, 38, 39, 40, 32].includes(event.keyCode)) {
            event.preventDefault(); // Prevent default actions for these keys
        }

        if (inputActive) return; // Skip processing if input is active

        handleKonamiCode(event.keyCode); // Handle Konami code sequence detection

        switch (event.keyCode) {
            case 39: // Right
                if (!animationInProgress) moveCharacter(20, true); // Move right
                break;
            case 37: // Left
                if (!animationInProgress) moveCharacter(-20, false); // Move left
                break;
            case 38: // Up
                if (!character.classList.contains('jump') && !animationInProgress) {
                    character.classList.add('jump');
                    animationInProgress = true;
                    setTimeout(() => {
                        character.classList.remove('jump');
                        animationInProgress = false;
                    }, 1000);
                }
                break;
            case 40: // Down
                if (!character.classList.contains('duck-down') && !animationInProgress) {
                    character.classList.add('duck-down');
                    animationInProgress = true;
                    setTimeout(() => {
                        character.classList.remove('duck-down');
                        animationInProgress = false;
                    }, 1000); // Remove the class after 1 second
                }
                break;
            case 32: // Space
                if (!character.classList.contains('backflip') && !animationInProgress) {
                    const wasFlipped = character.classList.contains('flip'); // Check if it was flipped before backflip
                    character.classList.add('backflip');
                    animationInProgress = true;
                    // Force a reflow to restart animation
                    void character.offsetWidth;

                    // Apply different animation if flipped
                    if (wasFlipped) {
                        character.style.animationName = 'backflip-flip';
                    } else {
                        character.style.animationName = 'backflip';
                    }
                    setTimeout(() => {
                        character.classList.remove('backflip');
                        character.style.left = `calc(50% + ${left}px)`; // Reset position
                        character.style.animationName = ''; // Reset animation name to allow re-triggering
                        animationInProgress = false;
                    }, 1000); // Make sure this matches your animation duration
                }
                break;
        }
    });

    function handleKonamiCode(keyCode) {
        keys_pressed.push(keyCode);
        if (keys_pressed.length > correct_combination.length) {
            keys_pressed.shift();
        }

        let correctCount = 0;
        for (let i = 0; i < keys_pressed.length; i++) {
            if (keys_pressed[i] === correct_combination[i]) {
                correctCount++;
            } else {
                correctCount = 0;
                keys_pressed = [];
                break;
            }
        }

        updateSequenceDisplay(correctCount);

        if (correctCount === correct_combination.length) {
            console.log("Konami Code Entered Successfully!");
            activateInputField();
        }
    }

    function moveCharacter(distance, flip) {
        if (animationInProgress) return; // Prevent movement if animation is in progress
        animationInProgress = true; // Set the flag to true

        left += distance; // Update the left position
        character.style.left = `calc(50% + ${left}px)`; // Adjust position

        if (flip) {
            character.classList.add('flip');
        } else {
            character.classList.remove('flip');
        }

        setTimeout(() => {
            animationInProgress = false; // Reset the flag after animation
        }, 300); // Adjust this duration to match the animation duration
    }

    function updateSequenceDisplay(currentLength) {
        let boldText = sequenceText.slice(0, currentLength).map(text => `<b>${text}</b>`).join(', ');
        let normalText = sequenceText.slice(currentLength).join(', ');
        document.getElementById('sequence').innerHTML = `${boldText}${currentLength > 0 ? ', ' : ''}${normalText}`;
    }

    function activateInputField() {
        inputActive = true;
        birdboxCenter.style.display = 'none'; // Hide the sequence display
        birdInputContainer.style.display = 'block'; // Show the input container
        document.querySelector('#bird-input-container a').classList.add('btnOpenForm', 'btn-red'); // Add classes to the anchor element
    }

    // Add event listeners to each button to simulate keydown events
    const buttons = document.querySelectorAll('.btn-key');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const key = button.getAttribute('data-key');
            if (key) {
                const event = new KeyboardEvent('keydown', { keyCode: parseInt(key) });
                document.dispatchEvent(event);
            }
        });
    });
});