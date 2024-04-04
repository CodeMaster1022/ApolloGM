// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { SubnodeOutlined } from '@ant-design/icons';

// icons
const icons = {
  SubnodeOutlined
};

// ==============================|| MENU ITEMS - SUPPORT ||============================== //

const Subscription_Item = {
  //   id: 'Dashboard',
  //   title: <FormattedMessage id="Dashboard" />,
  type: 'group',
  url: 'dashboard-page',
  children: [
    {
      id: 'subscription-page',
      title: <FormattedMessage id="Subscriptions" />,
      icon: icons.SubnodeOutlined,
      type: 'item',
      url: 'subscription-page'
    }
  ]
};

export default Subscription_Item;
