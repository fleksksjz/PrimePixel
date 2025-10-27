import { useEffect, useState } from 'react';
import { Scissors } from 'lucide-react';

export default function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-bounce">
          <Scissors size={64} className="text-amber-500" />
        </div>
        <div className="mt-6">
          <h2 className="text-3xl font-bold text-white mb-2">BARBER STUDIO X</h2>
          <div className="flex space-x-2 justify-center">
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse delay-100"></div>
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse delay-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
