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

  // Function to update the size when the window is resized
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add the resize event listener to the window
    window.addEventListener('resize', handleResize);

    // Cleanup: remove the event listener when the component unmounts
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
};
