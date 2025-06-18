function changeBackground() {
    const colors = ['#f0f8ff', '#ffe4e1', '#e6e6fa', '#fafad2', '#d1ffd6'];
    const randomColor= colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}