import React from "react";
import "./GallerySection.css";

import img1 from "../../assets/exoticphotos/img1.jpeg";
import img2 from "../../assets/exoticphotos/img2.jpeg";
import img3 from "../../assets/exoticphotos/img3.jpeg";
import img4 from "../../assets/exoticphotos/img4.jpeg";
import img5 from "../../assets/exoticphotos/img5.jpeg";
import img6 from "../../assets/exoticphotos/img6.jpeg";
import img7 from "../../assets/exoticphotos/img7.jpeg";
import img8 from "../../assets/exoticphotos/img8.jpeg";
import img9 from "../../assets/exoticphotos/img9.jpeg"; 
import img10 from "../../assets/exoticphotos/img10.jpeg";
import video1 from "../../assets/exoticphotos/video1.mp4";

const mediaItems = [
  { type: "image", src: img1 },
  { type: "image", src: img2 }, 
  { type: "image", src: img3 }, 
  { type: "image", src: img4 },
  { type: "video", src: video1 }, 
  { type: "image", src: img5 }, 
  { type: "image", src: img6 },
  { type: "image", src: img7 },
  { type: "image", src: img8 },
  { type: "image", src: img9 }, 
  { type: "image", src: img10 }, 
];


export default function GallerySection() {
  return (
    <section className="gallery-section">
      <div className="gallery-container">
       <div className="gallery-grid">
  {mediaItems.map((item, index) => (
    <div
      key={index}
      className={`gallery-item ${
        item.type === "video" ? "gallery-video-item" : ""
      }`}
    >
      {item.type === "image" ? (
        <img src={item.src} alt="gallery" />
      ) : (
        <video autoPlay muted loop playsInline>
          <source src={item.src} type="video/mp4" />
        </video>
      )}
    </div>
  ))}
</div>

      </div>
    </section>
  );
}
