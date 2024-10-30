import React, { useState, useRef, useCallback } from 'react';
import {
  CellMeasurer,
  CellMeasurerCache,
  createMasonryCellPositioner,
  Masonry,
} from 'react-virtualized';
import { generateMockImages } from '../utils/mockImages';
import { Loader } from 'lucide-react';

const images = generateMockImages(200);

const columnWidth = (window.innerWidth / 4) - 20;
const defaultHeight = 300;

const cache = new CellMeasurerCache({
  defaultHeight,
  defaultWidth: columnWidth,
  fixedWidth: true,
});

const cellPositionerConfig = {
  cellMeasurerCache: cache,
  columnCount: 4,
  columnWidth,
  spacer: 16,
};

const cellPositioner = createMasonryCellPositioner(cellPositionerConfig);

const MasonryComponent = ({ items, setRef }) => {
  const cellRenderer = useCallback(
    ({ index, key, parent, style }) => {
      const item = items[index];
      const height = item.height + 44;

      return (
        <CellMeasurer cache={cache} index={index} key={key} parent={parent}>
          <div style={{...style, height}}>
            <ImageCard item={item} />
          </div>
        </CellMeasurer>
      );
    },
    [items]
  );

  return (
    <Masonry
      cellCount={items.length}
      cellMeasurerCache={cache}
      cellPositioner={cellPositioner}
      cellRenderer={cellRenderer}
      height={window.innerHeight - 32}
      width={window.innerWidth - 32}
      overscanByPixels={100}
      ref={setRef}
    />
  );
};

const ImageCard = ({ item }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="flex flex-col gap-2 h-full">
      {!isLoaded && (
        <div
          className="skeleton w-full flex justify-center items-center"
          style={{ height: `${item.height}px`, backgroundColor: '#e0e0e0' }}
        >
          <Loader width={15} height={15} />
        </div>
      )}
      <img
        src={item.src}
        alt={item.alt}
        className={`w-full h-[${item.height}px] ${isLoaded ? '' : 'hidden'} rounded`}
        onLoad={() => setIsLoaded(true)}
      />
      <div className="flex justify-between items-center text-xs px-2">
        <div>
          <div className="text-sm font-medium">{item.username}</div>
          <div>13m ago</div>
        </div>
        <div className="text-base">{item.likes} ♡</div>
      </div>
    </div>
  );
};

function Layout() {
  const masonryRef = useRef(null);

  return (
    <div style={styles.container}>
      <MasonryComponent
        setRef={(node) => (masonryRef.current = node)}
        items={images}
      />
    </div>
  );
}

const styles = {
  container: {
    width: '100%',
    // paddingLeft: '16px',
    // paddingRight: '16px',
    padding: '16px',
  },
};

export default Layout;
