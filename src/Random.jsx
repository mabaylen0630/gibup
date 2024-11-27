import React, { useState } from 'react';
import './style.css';
import img0 from './assets/image0.jpg';
import img1 from './assets/image1.jpg';
import img2 from './assets/image2.jpg';
import img3 from './assets/image3.jpg';
import img4 from './assets/image4.jpg';
import img5 from './assets/image5.jpg';
import img6 from './assets/image6.jpg';
import img7 from './assets/image7.jpg';
import img8 from './assets/image8.jpg';
import img9 from './assets/image9.jpg';
import img10 from './assets/image10.jpg';
import img11 from './assets/image11.jpg';
import img12 from './assets/image12.jpg';
import img13 from './assets/image13.jpg';
import img14 from './assets/image14.jpg';
import img15 from './assets/image15.jpg';
import img16 from './assets/image16.jpg';
import img17 from './assets/image17.jpg';
import img18 from './assets/image18.jpg';
import img19 from './assets/image19.jpg';
import img20 from './assets/image20.jpg';
import img21 from './assets/image21.jpg';
import img22 from './assets/image22.jpg';
import img23 from './assets/image23.jpg';
import img24 from './assets/image24.jpg';
import img25 from './assets/image25.jpg';
import img26 from './assets/image26.jpg';
import img27 from './assets/image27.jpg';
import img28 from './assets/image28.jpg';
import img29 from './assets/image29.jpg';
import img30 from './assets/image30.jpg';
import img31 from './assets/image31.jpg';
import img32 from './assets/image32.jpg';
import img33 from './assets/image33.jpg';
import img34 from './assets/image34.jpg';
import img35 from './assets/image35.jpg';
import img36 from './assets/image36.jpg';
import img37 from './assets/image37.jpg';
import img38 from './assets/image38.jpg';
import img39 from './assets/image39.jpg';
import img40 from './assets/image40.jpg';
import img41 from './assets/image41.jpg';
import img42 from './assets/image42.jpg';
import img43 from './assets/image43.jpg';
import img44 from './assets/image44.jpg';
import img45 from './assets/image45.jpg';
import img46 from './assets/image46.jpg';
import img47 from './assets/image47.jpg';
import img48 from './assets/image48.jpg';
import img49 from './assets/image49.jpg';
import img50 from './assets/image50.jpg';
import img51 from './assets/image51.jpg';
import img52 from './assets/image52.jpg';


const Random = () => {
    const [slideIndex, setSlideIndex] = useState(1);

    const plusSlides = (n) => {
        setSlideIndex(slideIndex + n);
    };

    const showSlides = (n) => {
        let slides = document.querySelectorAll('.photo-album img');
        if (n > slides.length) { setSlideIndex(1); }
        if (n < 1) { setSlideIndex(slides.length); }
        slides.forEach((slide, index) => {
            slide.style.display = (index + 1 === slideIndex) ? 'block' : 'none';
        });
    };

    // Run showSlides whenever slideIndex changes
    React.useEffect(() => {
        showSlides(slideIndex);
    }, [slideIndex]);

    return (
        <div>

            <div className="photo-album">
                <img src={img0} alt="Photo 1" />
                <img src={img1} alt="Photo 2" />
                <img src={img2} alt="Photo 3" />
                <img src={img3} alt="Photo 4" />
                <img src={img4} alt="Photo 5" />
                <img src={img5} alt="Photo 6" />
                <img src={img6} alt="Photo 7" />
                <img src={img7} alt="Photo 8" />
                <img src={img8} alt="Photo 9" />
                <img src={img9} alt="Photo 10" />
                <img src={img10} alt="Photo 11" />
                <img src={img11} alt="Photo 12" />
                <img src={img12} alt="Photo 13" />
                <img src={img13} alt="Photo 14" />
                <img src={img14} alt="Photo 15" />
                <img src={img15} alt="Photo 16" />
                <img src={img16} alt="Photo 17" />
                <img src={img17} alt="Photo 18" />
                <img src={img18} alt="Photo 19" />
                <img src={img19} alt="Photo 20" />
                <img src={img20} alt="Photo 21" />
                <img src={img21} alt="Photo 22" />
                <img src={img22} alt="Photo 23" />
                <img src={img23} alt="Photo 24" />
                <img src={img24} alt="Photo 25" />
                <img src={img25} alt="Photo 26" />
                <img src={img26} alt="Photo 27" />
                <img src={img27} alt="Photo 28" />
                <img src={img28} alt="Photo 29" />
                <img src={img29} alt="Photo 30" />
                <img src={img30} alt="Photo 31" />
                <img src={img31} alt="Photo 32" />
                <img src={img32} alt="Photo 33" />
                <img src={img33} alt="Photo 34" />
                <img src={img34} alt="Photo 35" />
                <img src={img35} alt="Photo 36" />
                <img src={img36} alt="Photo 37" />
                <img src={img37} alt="Photo 38" />
                <img src={img38} alt="Photo 39" />
                <img src={img39} alt="Photo 40" />
                <img src={img40} alt="Photo 41" />
                <img src={img41} alt="Photo 42" />
                <img src={img42} alt="Photo 43" />
                <img src={img43} alt="Photo 44" />
                <img src={img44} alt="Photo 45" />
                <img src={img45} alt="Photo 46" />
                <img src={img46} alt="Photo 47" />
                <img src={img47} alt="Photo 48" />
                <img src={img48} alt="Photo 49" />
                <img src={img49} alt="Photo 50" />
                <img src={img50} alt="Photo 51" />
                <img src={img51} alt="Photo 52" />
                <img src={img52} alt="Photo 53" />

                
                
                <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
                <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
            </div>

            <footer>
                <p>MBAYLEN Personal Website</p>
            </footer>
        </div>
    );
};

export default Random;
