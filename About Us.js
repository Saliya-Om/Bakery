document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.slider');

    sliders.forEach(slider => {
        const sliderContent = slider.innerHTML;

        slider.innerHTML = `
            <div class="slider-inner">
                ${sliderContent}
                ${sliderContent}
            </div>
        `;

        const sliderInner = slider.querySelector('.slider-inner');

        const calculateTotalHeight = () => {
            const images = slider.querySelectorAll('img');
            return Array.from(images).slice(0, images.length / 2)
                .reduce((total, img) => total + img.offsetHeight + 15, 0);
        };

        const adjustAnimation = () => {
            const totalHeight = calculateTotalHeight();

            slider.style.height = `${totalHeight}px`;
            sliderInner.style.height = `${totalHeight * 2}px`; 

            slider.style.setProperty('--slider-height', `-${totalHeight}px`);
        };

        adjustAnimation();

        window.addEventListener('resize', adjustAnimation);
    });
});
