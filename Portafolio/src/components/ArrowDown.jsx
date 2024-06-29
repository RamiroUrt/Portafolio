import { ChevronsDown } from 'lucide-react';
import '../assets/Arrow.css';

const Arrow = () => {
  const handleScroll = (event) => {
    event.preventDefault();
    const sections = document.querySelectorAll('section');
    let currentSectionIndex = 0;
    for (let i = 0; i < sections.length; i++) {
      const rect = sections[i].getBoundingClientRect();
      if (rect.top >= 0 && rect.top < window.innerHeight) {
        currentSectionIndex = i;
        break;
      }
    }
    const nextSection = sections[currentSectionIndex + 1];
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <article className="arrowDown">
      <a href="#!" onClick={handleScroll}>
        <ChevronsDown size={40} />
      </a>
    </article>
  );
};

export default Arrow;
