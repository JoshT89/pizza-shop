import react, {useState, useEffect} from 'react';
// next image
import Image from 'next/image';
// icons
import { IoMdCheckmark } from 'react-icons/io';

const Topping = ({ topping, additionalTopping, setAdditionalTopping }) => {
  // checkbox state
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div
    className={`${
      isChecked && 'border-orange'
    } w-full max-w-[110px] h-[140px]p-1`}
    >
<Image 
src={topping.image}
width={70}
height={70}
alt=''
className='mb-2'
/>
{/* topping name */}
<div className='text-sm capitalize text-center font-medium'>
{topping.name}
</div>
    </div>
  );
};

export default Topping;
