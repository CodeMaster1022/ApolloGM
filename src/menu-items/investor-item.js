// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { UsergroupAddOutlined } from '@ant-design/icons';
// icons
const icons = {
  UsergroupAddOutlined
};
// ==============================|| MENU ITEMS - APPLICATIONS ||============================== //

const Investor_Item = {
  //   id: 'group-applications',
  //   title: <FormattedMessage id="applications" />,
  // icon: icons.UserOutlined,
  type: 'group',
  children: [
    {
      id: 'Investor',
      title: <FormattedMessage id="Investors" />,
      type: 'collapse',
      icon: icons.UsergroupAddOutlined,
      children: [
        {
          id: 'Investor-1',
          title: <FormattedMessage id="Investor-1" />,
          type: 'item',
          url: '/investor/Investor-1'
        },
        {
          id: 'Funds-2',
          title: <FormattedMessage id="Investor-2" />,
          type: 'item',
          url: '#'
        }
      ]
    }
  ]
};

export default Investor_Item;
