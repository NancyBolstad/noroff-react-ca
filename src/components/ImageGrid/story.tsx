import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { ImageGrid } from '.';
import { createImagesList } from '../../util/mockHelpers';

export const ImageGridStory = <ImageGrid images={createImagesList(3)} text="Lorem Images" />;

storiesOf('Component/ImageGrid', module).add('Basic usage', () => ImageGridStory);
