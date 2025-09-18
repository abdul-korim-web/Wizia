import React from 'react';

const Slider = () => {
    const slidertext = [
        `"Success is built on small daily efforts, repeated consistently over time."`,
        `"Challenges are not roadblocks; they are opportunities to grow stronger and wiser."`,
        `"Believe in yourself even when no one else does, and keep moving forward."`,
    ]

    return (
        <>
            <section>
                {/* Right button */}
                <div>
                    <button><i class="fa-solid fa-arrow-right"></i></button>
                </div>
                <div>
                    <img src="image/" alt="" />
                </div>

            </section>
        </>
    );
}

export default Slider;
