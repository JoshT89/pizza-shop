'use client';
// next image
import Image from 'next/image';
// parallax
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from 'react-parallax-mouse';

const Banner = () => {
  return (
    <section className='bg-primary bg-pattern lg:min-h-[768px] pt-16 lg:pt-16'>
      <div className='container mx-auto min-h-[768px] flex items-center
      justify-center'>
        <MouseParallaxContainer
          globalFactorX={0.4}
          globalFactorY={0.3}
          resetOnLeave
          className='w-full flex flex-col lg:flex-row justify-between items-center'
        >
          {/* banner text */}
          <MouseParallaxChild factorX={.1} factorY={.2}>
            <div className='flex flex-col lg:flex-row items-center text-center 
    lg:text-left flex-1 px-6 text-white'>
              <div className='flex-1'>
                <div className='font-bangers text-[32px] text-white uppercase 
                tracking-[0.03]'>
                  Turner Frown Pizza
                </div>
                <h1 className='text-6xl lg:text-8xl font-bangers drop-shadow-md'>
                  That warm fuzzy feeling <br /> in every bite
                </h1>
              </div>
            </div>
          </MouseParallaxChild>
          {/* banner images */}
          <MouseParallaxChild factorX={0.2} factorY={0.3} className='relative'>
            {/* pizza image */}
            <div>
              <div>
                <Image
                  src={'/pizza-banner.png'}
                  width={550}
                  height={558}
                  alt=''
                  priority={1}
                />
              </div>
            </div>
            {/* chilli image 1 */}
            <MouseParallaxChild 
            factorX={0.2}
            factorY={0.3}
            className='absolute top-6 left-4 hidden xl:flex'
            >
              <Image
                src={'/chilli-1.png'}
                width={160}
                height={84}
                alt=''
                priority={1}
              />
            </MouseParallaxChild>
          </MouseParallaxChild>
        </MouseParallaxContainer>
      </div>
    </section>
  );
};

export default Banner;
