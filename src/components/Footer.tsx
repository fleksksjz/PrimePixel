import { useState } from 'react';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [clickCount, setClickCount] = useState(0);

  const handleSecretClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);

    if (newCount === 5) {
      if (onNavigate) {
        onNavigate('admin-panel');
      }
      setClickCount(0);
    }

    setTimeout(() => {
      setClickCount(0);
    }, 3000);
  };

  return (
    <footer className="bg-black border-t border-amber-500/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p
            className="text-gray-400 text-sm cursor-default select-none"
            onClick={handleSecretClick}
          >
            © 2025 Barber Studio X – Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
