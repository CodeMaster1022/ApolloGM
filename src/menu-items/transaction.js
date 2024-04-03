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

const Transaction_Item = {
  //   id: 'group-applications',
  //   title: <FormattedMessage id="applications" />,
  icon: icons.AppstoreAddOutlined,
  type: 'group',
  children: [
    {
      id: 'Transaction',
      title: <FormattedMessage id="Transactions" />,
      type: 'collapse',
      icon: icons.CustomerServiceOutlined,
      children: [
        {
          id: 'Transaction-1',
          title: <FormattedMessage id="Transaction-1" />,
          type: 'item',
          url: '/transaction/transaction'
        },
        {
          id: 'Transaction-2',
          title: <FormattedMessage id="Transaction-2" />,
          type: 'item',
          url: '#'
        }
      ]
    }
  ]
};

export default Transaction_Item;
