// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { AppstoreFilled } from '@ant-design/icons';

// icons
const icons = {
  AppstoreFilled
};

// ==============================|| MENU ITEMS - SUPPORT ||============================== //

const Dashboard_Item = {
  //   id: 'Dashboard',
  //   title: <FormattedMessage id="Dashboard" />,
  type: 'group',
  url: 'dashboard-page',
  children: [
    {
      id: 'dashboard-page',
      title: <FormattedMessage id="Dashboard" />,
      icon: icons.AppstoreFilled,
      type: 'item',
      url: 'dashboard-page'
    }
  ]
};

export default Dashboard_Item;
