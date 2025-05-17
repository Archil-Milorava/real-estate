import { useState } from "react";
import { SlArrowLeftCircle } from "react-icons/sl";
import { SlArrowRightCircle } from "react-icons/sl";



interface GalleryMainProps {
  images: string[];
  isLoading: boolean;
}

const GalleryMain = ({ images, isLoading }: GalleryMainProps) => {
  const pulseClass = isLoading ? "bg-gray-400 animate-pulse" : "";
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  if (images.length === 0) {
    return <div>No images to display</div>;
  }

  const openModal = (idx: number) => {
    setCurrentIdx(idx);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-2 overflow-hidden ">
        {/* big image */}
        <div
          className={`${pulseClass} col-span-3 w-full h-[28rem] rounded-md overflow-hidden cursor-pointer`}
          onClick={() => openModal(0)}
        >
          <img
            src={images[0]}
            alt="mainImg"
            className="h-full w-full object-cover"
          />
        </div>
        {/* 3 images */}
        {images.slice(1, 4).map((image, i) => (
          <div
            key={i}
            className={`${pulseClass} rounded-md overflow-hidden h-36 cursor-pointer`}
            onClick={() => openModal(i + 1)}
          >
            <img src={image} alt="" className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
      {/* Modal slider */}
      {modalOpen && (
        <div
          className="fixed top-0 z-[99999] flex items-center justify-center inset-0 h-screen bg-black"
          onClick={closeModal}
        >
          <button
            className="absolute cursor-pointer top-4 right-4 text-white text-3xl font-bold hover:text-gray-300"
            onClick={closeModal}
            aria-label="Close"
          >
            &times;
          </button>
          <button
            className="absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 text-white text-4xl px-2 py-1 bg-black bg-opacity-40 rounded-full hover:bg-opacity-70"
            onClick={prevImage}
            aria-label="Previous"
          >
            <SlArrowLeftCircle  />
          </button>
          <img
            src={images[currentIdx]}
            alt="slider-img"
            className="max-h-[90vh] max-w-[90vw] rounded shadow-lg object-cover"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 text-white text-4xl px-2 py-1 bg-black bg-opacity-40 rounded-full hover:bg-opacity-70"
            onClick={nextImage}
            aria-label="Next"
          >
           <SlArrowRightCircle />
          </button>
        </div>
      )}
    </>
  );
};

export default GalleryMain;
