import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

const ImageGallery = ({ images, isOpen, onClose, projectTitle }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!isOpen) return null;

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToImage = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="gallery-overlay" onClick={onClose}>
            <div className="gallery-modal" onClick={(e) => e.stopPropagation()}>
                <button className="gallery-close" onClick={onClose}>
                    ×
                </button>
                <h3 className="gallery-title">{projectTitle}</h3>
                
                <div className="gallery-main">
                    <button className="gallery-nav gallery-prev" onClick={prevImage}>
                        ‹
                    </button>
                    
                    <div className="gallery-image-container">
                        <img 
                            src={images[currentIndex]} 
                            alt={`${projectTitle} - Image ${currentIndex + 1}`}
                            className="gallery-image"
                        />
                    </div>
                    
                    <button className="gallery-nav gallery-next" onClick={nextImage}>
                        ›
                    </button>
                </div>
                
                <div className="gallery-thumbnails">
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Thumbnail ${index + 1}`}
                            className={`gallery-thumbnail ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => goToImage(index)}
                        />
                    ))}
                </div>
                
                <div className="gallery-counter">
                    {currentIndex + 1} / {images.length}
                </div>
            </div>
        </div>
    );
};

export const Portfolio = () => {
    const [galleryState, setGalleryState] = useState({
        isOpen: false,
        images: [],
        projectTitle: ''
    });

    const openGallery = (images, title) => {
        setGalleryState({
            isOpen: true,
            images,
            projectTitle: title
        });
    };

    const closeGallery = () => {
        setGalleryState({
            isOpen: false,
            images: [],
            projectTitle: ''
        });
    };

    return (
        <HelmetProvider>
            <Container className="About-header">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title> Portfolio | {meta.title} </title>
                    <meta name="description" content={meta.description} />
                </Helmet>
                <Row className="mb-5 mt-3 pt-md-3">
                    <Col lg="8">
                        <h1 className="display-4 mb-4"> Portfolio </h1>
                        <hr className="t_border my-4 ml-0 text-left" />
                    </Col>
                </Row>
                <div className="mb-5 po_items_ho">
                    {dataportfolio.map((data, i) => {
                        return (
                            <div key={i} className="po_item">
                                <img src={data.img} alt={data.title} />
                                <div className="content">
                                    <h3>{data.title}</h3>
                                    <p 
                                        className="description-clickable"
                                        onClick={() => openGallery(data.gallery, data.title)}
                                        title="Click to see gallery"
                                    >
                                        {data.description}
                                    </p>
                                    <div className="tech-stack">
                                        {data.tech && data.tech.map((tech, index) => (
                                            <span key={index} className="tech-tag">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <a href={data.link}>view project</a>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <ImageGallery
                    images={galleryState.images}
                    isOpen={galleryState.isOpen}
                    onClose={closeGallery}
                    projectTitle={galleryState.projectTitle}
                />
            </Container>
        </HelmetProvider>
    );
};