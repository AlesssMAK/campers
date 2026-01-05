'use client';

import ButtonComponent from '@/componets/Button/ButtonComponent';
import { useRouter } from 'next/navigation';

const HeroButton = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/catalog');
  };
  return (
    <div>
      <ButtonComponent
        type="button"
        onClick={handleClick}
        className="button button--primary"
      >
        View Now
      </ButtonComponent>
    </div>
  );
};

export default HeroButton;
