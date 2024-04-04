// third-party
import { FormattedMessage } from 'react-intl';

// assets
import {
  BuildOutlined,
  CalendarOutlined,
  CustomerServiceOutlined,
  FileTextOutlined,
  MessageOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  AppstoreAddOutlined
} from '@ant-design/icons';

// icons
const icons = {
  BuildOutlined,
  CalendarOutlined,
  CustomerServiceOutlined,
  MessageOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  AppstoreAddOutlined,
  FileTextOutlined
};
// ==============================|| MENU ITEMS - APPLICATIONS ||============================== //

const Funds_Item = {
  //   id: 'group-applications',
  //   title: <FormattedMessage id="applications" />,
  icon: icons.AppstoreAddOutlined,
  type: 'group',
  children: [
    {
      id: 'Funds',
      title: <FormattedMessage id="Funds" />,
      type: 'collapse',
      icon: icons.CustomerServiceOutlined,
      children: [
        {
          id: 'Funds',
          title: <FormattedMessage id="Funds" />,
          type: 'item',
          url: '/funds/funds'
        },
        {
          id: 'Fund-view',
          title: <FormattedMessage id="Fund-view" />,
          type: 'item',
          url: '/funds/fund-view'
        },
        {
          id: 'Funds-2',
          title: <FormattedMessage id="Funds-2" />,
          type: 'item',
          url: '#'
        }
      ]
    }
  ]
};

export default Funds_Item;
