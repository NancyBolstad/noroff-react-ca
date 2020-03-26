import * as React from 'react';
import { check } from '../../util/icons';
import {
  InfoListWrapper,
  InfoListFlexParent,
  InfoItemFlexChild,
  InfoItemTitleWrapper,
} from './styles';
import Typography from '../Typography';
import mockCheckBoxList from './data';

interface Props {}

export const InfoList: React.FC<Props> = () => {
  const { sectionTitle, list } = mockCheckBoxList;
  return (
    <InfoListWrapper>
      <Typography element="h1" variant="h1" top={32} bottom={32} content={sectionTitle} />
      <InfoListFlexParent>
        {(list || []).map((box, index) => (
          <InfoItemFlexChild key={index}>
            {!!box.title && (
              <InfoItemTitleWrapper>
                {check}
                <Typography element="h2" variant="h2" content={box.title} />
              </InfoItemTitleWrapper>
            )}
            {!!box.content && (
              <Typography element="p" variant="b1" content={box.content} isPrimaryColor />
            )}
          </InfoItemFlexChild>
        ))}
      </InfoListFlexParent>
    </InfoListWrapper>
  );
};

export default InfoList;
