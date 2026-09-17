document.addEventListener('DOMContentLoaded', () => {
    const balloon = document.getElementById('balloon');

    const colors = ['red', 'green', 'blue'];
    const ORIGINAL_SIZE = 200;
    const MAX_SIZE = 420;
    const GROW_STEP = 10;
    const SHRINK_STEP = 5;

    let size = ORIGINAL_SIZE;
    let colorIndex = 0;

    const applySize = () => {
        balloon.style.width = `${size}px`;
        balloon.style.height = `${size}px`;
    };

    const applyColor = () => {
        balloon.style.backgroundColor = colors[colorIndex];
    };

    balloon.addEventListener('click', () => {
        size += GROW_STEP;
        colorIndex = (colorIndex + 1) % colors.length;

        if (size > MAX_SIZE) {
            size = ORIGINAL_SIZE;
            colorIndex = 0;
        }

        applySize();
        applyColor();
    });

    balloon.addEventListener('mouseleave', () => {
        size = Math.max(ORIGINAL_SIZE, size - SHRINK_STEP);
        colorIndex = (colorIndex - 1 + colors.length) % colors.length;

        applySize();
        applyColor();
    });
});
