$(document).ready(function() {
    const $balloon = $('#balloon');

    const colors = ['red', 'green', 'blue'];
    const ORIGINAL_SIZE = 200;
    const MAX_SIZE = 420;
    const GROW_STEP = 10;
    const SHRINK_STEP = 5;

    let size = ORIGINAL_SIZE;
    let colorIndex = 0;

    const applySize = () => {
        $balloon.css({
            width: `${size}px`,
            height: `${size}px`
        });
    };

    const applyColor = () => {
        $balloon.css('background-color', colors[colorIndex]);
    };

    $balloon.on('click', function() {
        size += GROW_STEP;
        colorIndex = (colorIndex + 1) % colors.length;

        if (size > MAX_SIZE) {
            size = ORIGINAL_SIZE;
            colorIndex = 0;
        }

        applySize();
        applyColor();
    });

    $balloon.on('mouseleave', function() {
        size = Math.max(ORIGINAL_SIZE, size - SHRINK_STEP);
        colorIndex = (colorIndex - 1 + colors.length) % colors.length;

        applySize();
        applyColor();
    });
});