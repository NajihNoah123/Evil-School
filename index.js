function showScreen(screenId) {
  // 1. Find all sections with the class 'screen'
  let allScreens = document.querySelectorAll('.screen');
  
  // 2. Hide every single one of them
  allScreens.forEach(screen => {
    screen.classList.add('hidden');
  });
  
  // 3. Show only the one we want
  document.getElementById(screenId).classList.remove('hidden');
}

// Example of how you'd use it in your logic
function selectStudent(name) {
    console.log(name + " has entered the school.");
    // Add your arithmetic or variable setup here
    showScreen('game-screen'); // "Teleport" to the classroom!
}
