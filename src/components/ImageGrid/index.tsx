import React, { lazy, Suspense } from 'react';
import Grid, { GridItem } from '../Grid';
import Heading from '../Heading';
import ImageItem from './styles';

const LazyImage = lazy(() => import('./styles'));

interface Props {
  images?: string[];
  text?: string;
}

export const ImageGrid: React.FunctionComponent<Props> = ({ images, text }) => {
  return (
    <>
      {!!text && <Heading content={text} />}
      <Grid>
        {(images || []).map((image, k) => (
          <GridItem
            key={k}
            row={k === 0 || k === 3 ? 'span 2' : undefined}
            column={k === 0 ? 'span 2' : k === 3 ? 'span 3' : undefined}
          >
            <Suspense fallback={<ImageItem />}>
              <LazyImage imageURL={image} />
            </Suspense>
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default ImageGrid;
