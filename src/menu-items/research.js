// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { SearchOutlined } from '@ant-design/icons';

// icons
const icons = {
  SearchOutlined
};

// ==============================|| MENU ITEMS - SUPPORT ||============================== //

const Research_Item = {
  //   id: 'Dashboard',
  //   title: <FormattedMessage id="Dashboard" />,
  type: 'group',
  url: 'research-page',
  children: [
    {
      id: 'research-page',
      title: <FormattedMessage id="Research" />,
      icon: icons.SearchOutlined,
      type: 'item',
      url: 'research-page'
    }
  ]
};

export default Research_Item;
