import { useEffect, useRef } from 'react';
import { JavascriptIcon, NextJsIcon, TypescriptIcon, DatabricksIcon, SparkIcon, ReactIcon, NodeJsIcon, DjangoIcon } from '@/components/icons/social';

const ScrollingBanner: React.FC = () => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const banner = bannerRef.current;

    if (banner) {
      const bannerContent = banner.innerHTML;
      banner.innerHTML += bannerContent;
      const contentWidth = banner.scrollWidth / 2;
      let offset = 0;
      const scrollSpeed = 0.2;

      const scrollBanner = () => {
        offset -= scrollSpeed;
        if (Math.abs(offset) >= contentWidth) {
          offset = 0;
        }
        banner.style.transform = `translateX(${offset}px)`;
        animationFrameRef.current = requestAnimationFrame(scrollBanner);
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animationFrameRef.current = requestAnimationFrame(scrollBanner);
          } else {
            if (animationFrameRef.current) {
              cancelAnimationFrame(animationFrameRef.current);
            }
          }
        });
      });

      observer.observe(banner);

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        observer.disconnect();
        banner.style.transform = '';
      };
    }
  }, []);

  return (
    <div
      style={{
        overflow: 'hidden',
        width: '100%',
        position: 'relative',
        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
      }}
    >
      <div
        ref={bannerRef}
        style={{
          display: 'inline-block',
          whiteSpace: 'nowrap',
          willChange: 'transform',
        }}
      >
        <span style={{ fontSize: '2rem', display: 'inline-block', marginRight: '2rem' }}>
          <NextJsIcon />
        </span>
        <span style={{ fontSize: '2rem', display: 'inline-block', marginRight: '2rem' }}>
          <TypescriptIcon />
        </span>
        <span style={{ fontSize: '2rem', display: 'inline-block', marginRight: '2rem' }}>
          <JavascriptIcon />
        </span>
        <span style={{ fontSize: '2rem', display: 'inline-block', marginRight: '2rem' }}>
          <DatabricksIcon />
        </span>
        <span style={{ fontSize: '2rem', display: 'inline-block', marginRight: '2rem' }}>
          <DjangoIcon />
        </span>
        <span style={{ fontSize: '2rem', display: 'inline-block', marginRight: '2rem' }}>
          <ReactIcon />
        </span>
        <span style={{ fontSize: '2rem', display: 'inline-block', marginRight: '2rem' }}>
          <NodeJsIcon />
        </span>
        <span style={{ fontSize: '2rem', display: 'inline-block', marginRight: '2rem' }}>
          <SparkIcon />
        </span>
      </div>
    </div>
  );
};

export default ScrollingBanner;
