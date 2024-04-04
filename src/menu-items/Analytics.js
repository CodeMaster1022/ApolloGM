// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { BarChartOutlined } from '@ant-design/icons';

// icons
const icons = {
  BarChartOutlined
};

// ==============================|| MENU ITEMS - SUPPORT ||============================== //

const Analytics_Item = {
  type: 'group',
  url: 'administration-page',
  children: [
    {
      id: 'administration-page',
      title: <FormattedMessage id="Analytics" />,
      icon: icons.BarChartOutlined,
      type: 'item',
      url: '#'
    }
  ]
};

export default Analytics_Item;
