'use client';

import { useEffect } from 'react';

export default function ScrollAnimation() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          
          // 为带有stagger类的元素添加延迟动画
          const staggerElements = entry.target.querySelectorAll('[class*="stagger-"]');
          staggerElements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('revealed');
            }, index * 100);
          });
        }
      });
    }, observerOptions);

    // 观察所有带有scroll-reveal类的元素
    const scrollElements = document.querySelectorAll('.scroll-reveal');
    scrollElements.forEach((el) => observer.observe(el));

    // 清理函数
    return () => {
      scrollElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return null;
}