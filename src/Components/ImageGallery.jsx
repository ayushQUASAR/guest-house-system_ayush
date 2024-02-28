import React, { useState, useEffect } from 'react';
import '../style/imagegallery.css';

// import image1 from "../images/ImageGallery/DSC_4084.jpg";
import image2 from "../images/ImageGallery/DSC_4085.jpg";
import image3 from "../images/ImageGallery/DSC_4086.jpg";
import image4 from "../images/ImageGallery/DSC_4087.jpg";
import image5 from "../images/ImageGallery/DSC_4088.jpg";
import image6 from  "../images/ImageGallery/DSC_4089.jpg";
import image7 from "../images/ImageGallery/guest-house-front.jpeg";
import image8 from "../images/ImageGallery/DSC_4090.jpg";
import image9 from "../images/ImageGallery/guest-house.jpg";   

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const closePopup = () => {
    setSelectedImage(null);
  };
  const images = [
    // { url : image1},
    { url : image5},
    { url : image2},
    { url : image3},
    { url : image4},
    { url : image6},
    { url : image7},
    { url : image8},
    { url : image9}

  ]
  return (
    <div>
      <div className="gallery">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={`Image ${index + 1}`}
            className={index === selectedImage ? 'selected' : ''}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
      {selectedImage !== null && (
        <div className="popup" onClick={closePopup} style = {{background : 'transparent'}}>
          <div className="popup-content"> 
            <img src={images[selectedImage].url} alt={`Image ${selectedImage + 1}`} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
