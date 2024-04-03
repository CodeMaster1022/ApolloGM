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

const Capital_Item = {
//   id: 'group-applications',
//   title: <FormattedMessage id="applications" />,
  icon: icons.AppstoreAddOutlined,
  type: 'group',
  children: [
    {
      id: 'Capital',
      title: <FormattedMessage id="Capital calls" />,
      type: 'collapse',
      icon: icons.CustomerServiceOutlined,
      children: [
        {
          id: 'capital-1',
          title: <FormattedMessage id="capital-1" />,
          type: 'item',
          url: '#'
        },
        {
          id: 'Capital-2',
          title: <FormattedMessage id="Capital-2" />,
          type: 'item',
          url: '#'
        }
      ]
    }
  ]
};

export default Capital_Item;
