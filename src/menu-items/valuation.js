// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { PieChartOutlined } from '@ant-design/icons';

// icons
const icons = {
  PieChartOutlined
};

// ==============================|| MENU ITEMS - SUPPORT ||============================== //

const Valuation_Item = {
  //   id: 'Dashboard',
  //   title: <FormattedMessage id="Dashboard" />,
  type: 'group',
  url: 'valuation-page',
  children: [
    {
      id: 'valuation-page',
      title: <FormattedMessage id="Valuation tools" />,
      icon: icons.PieChartOutlined,
      type: 'item',
      url: 'valuation-page'
    }
  ]
};

export default Valuation_Item;
