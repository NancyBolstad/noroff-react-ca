import * as React from 'react';
import { check } from '../../util/icons';
import { Wrapper, ListFlexParent, ItemFlexChild, ItemTitleWrapper } from './styles';
import Heading from '../Heading';
import mockCheckBoxList from './data';

interface Props {}

export const NewsList: React.FC<Props> = () => {
  const { sectionTitle, list } = mockCheckBoxList;
  return (
    <Wrapper>
      <Heading content={sectionTitle} />
      <ListFlexParent>
        {(list || []).map((box, index) => (
          <ItemFlexChild key={index}>
            {!!box.title && (
              <ItemTitleWrapper>
                {check}
                <h2>{box.title}</h2>
              </ItemTitleWrapper>
            )}
            {!!box.content && <p>{box.content}</p>}
          </ItemFlexChild>
        ))}
      </ListFlexParent>
    </Wrapper>
  );
};

export default NewsList;
