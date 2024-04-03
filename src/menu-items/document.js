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

const Document_Item = {
//   id: 'group-applications',
//   title: <FormattedMessage id="applications" />,
  icon: icons.AppstoreAddOutlined,
  type: 'group',
  children: [
    {
      id: 'document',
      title: <FormattedMessage id="Documents" />,
      type: 'collapse',
      icon: icons.CustomerServiceOutlined,
      children: [
        {
          id: 'document-1',
          title: <FormattedMessage id="Document-1" />,
          type: 'item',
          url: '/document/fund-view'
        },
        {
          id: 'document-2',
          title: <FormattedMessage id="Document-2" />,
          type: 'item',
          url: '#'
        }
      ]
    }
  ]
};

export default Document_Item;
