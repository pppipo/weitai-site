'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ImageModalProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ImageModal({ src, alt, className = "" }: ImageModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {/* 可点击的图片 */}
      <div 
        className={`cursor-pointer transition-transform hover:scale-105 ${className}`}
        onClick={openModal}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* 模态框 */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-full">
            {/* 关闭按钮 */}
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* 放大的图片 */}
            <div className="relative">
              <Image
                src={src}
                alt={alt}
                width={800}
                height={600}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}