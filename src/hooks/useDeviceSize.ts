import { useState, useEffect } from 'react';

interface DeviceSize {
  width: number;
  height: number;
}

export const useDeviceSize = (): DeviceSize => {
  const [size, setSize] = useState<DeviceSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
};
