function simulateOpen(folderName) {
    const toast = document.getElementById('toast');
    toast.textContent = `Accessing folder: ${folderName}...`;
    toast.classList.add('show');
    
    console.log(`User clicked on folder: ${folderName}`);
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

document.getElementById('mainAction').addEventListener('click', () => {
    const toast = document.getElementById('toast');
    toast.textContent = "Folder creation requested.";
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
});

// Subtle parallax effect on container
document.addEventListener('mousemove', (e) => {
    const container = document.querySelector('.glass-container');
    const xAxis = (window.innerWidth / 2 - e.pageX) / 50;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 50;
    container.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

console.log("Directory Panel initialized.");
