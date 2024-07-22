import { useEffect, useRef, useState } from "react";

const useIntersectionObserver = (options) => {
  // `useIntersectionObserver` adında bir özel Hook tanımlarız.

  const [isIntersecting, setIsIntersecting] = useState(false);
  // `isIntersecting` durumu, elemanın görünür olup olmadığını takip eder. Başlangıç değeri `false`'dır.

  const ref = useRef(null);
  // `ref`, gözlemlenen DOM elemanının referansını tutar.

  useEffect(() => {
    // `useEffect`, `IntersectionObserver`'ı başlatmak ve temizlemek için kullanılır.

    const observer = new IntersectionObserver(([entry]) => {
      // `IntersectionObserver` nesnesi oluşturur ve `entry` parametresi ile elemanın görünürlük durumunu alır.

      setIsIntersecting(entry.isIntersecting);
      // `entry.isIntersecting` ile elemanın görünürlük durumunu `isIntersecting` durumuna ayarlar.
    }, options);
    // `options` parametresi, gözlemci seçeneklerini içerir.

    if (ref.current) {
      // `ref.current` geçerli bir DOM elemanını işaret ediyorsa,
      observer.observe(ref.current);
      // Bu elemanı gözlemeye başlar.
    }

    return () => {
      // Hook'un temizleme işlevi döner.
      if (ref.current) {
        // Eğer `ref.current` geçerli bir DOM elemanını işaret ediyorsa,
        observer.unobserve(ref.current);
        // Gözlemciyi bu elemandan kaldırır, bu sayede bellek sızıntılarını önler.
      }
    };
  }, [options]);
  // `options` değiştiğinde `useEffect` yeniden çalışır.

  return [ref, isIntersecting];
  // Hook, `ref` ve `isIntersecting` değerlerini döner.
};

export default useIntersectionObserver;
