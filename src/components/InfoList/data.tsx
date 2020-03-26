interface NewsBox {
  title: string;
  content: string;
}

interface NewsListProps {
  sectionTitle: string;
  list: NewsBox[];
}

const checkBoxMockA: NewsBox = {
  title: 'Lorem ipsum dolor',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
};

const checkBoxMockB: NewsBox = {
  title: 'Pellentesque ac sapien',
  content:
    'Pellentesque ac sapien ac felis accumsan rutrum. Pellentesque ac sapien ac felis accumsan rutrum. Pellentesque ac sapien ac felis accumsan rutrum.',
};

const mockCheckboxList: NewsListProps = {
  sectionTitle: 'Molestie Pellentesque',
  list: [checkBoxMockA, checkBoxMockB, checkBoxMockB, checkBoxMockA],
};

export default mockCheckboxList;
