import React, { useState, useEffect } from 'react';
import vestidosG from '../data/vestidosG';

const HorizontalScroll = () => {

    const [visibleItems, setVisibleItems] = useState([]); // Arreglo de ítems visibles

  // Simular carga de contenido inicial
  useEffect(() => {
    setVisibleItems(vestidosG.slice(0, 4)); // Mostrar los primeros 4 elementos
  }, []);

  const fetchMoreItems = () => {
    const startIndex = visibleItems.length;
    const endIndex = startIndex + 4;
    setVisibleItems(prevVisibleItems => [
      ...prevVisibleItems,
      ...vestidosG.slice(startIndex, endIndex),
    ]);
  };

  const handleScroll = event => {
    const container = event.target;
    if (container.scrollWidth - container.clientWidth - container.scrollLeft < 50) {
      fetchMoreItems();
    }
  };

  return (
    <div className="infinite-scroll-container" onScroll={handleScroll}>
      <div className="infinite-scroll-content">
        {visibleItems.map((item, index) => (
          <div className="item" key={index}>
            <img src={item.url} alt={`Vestido ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll
