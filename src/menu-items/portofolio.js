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

const Portofolio_Item = {
//   id: 'group-applications',
//   title: <FormattedMessage id="applications" />,
  icon: icons.AppstoreAddOutlined,
  type: 'group',
  children: [
    {
      id: 'Portofolio',
      title: <FormattedMessage id="Portofolios" />,
      type: 'collapse',
      icon: icons.CustomerServiceOutlined,
      children: [
        {
          id: 'portofolio-1',
          title: <FormattedMessage id="Portofolio-1" />,
          type: 'item',
          url: '/portofolio/portofolio-1'
        },
        {
          id: 'portofolio-2',
          title: <FormattedMessage id="Portofolio-2" />,
          type: 'item',
          url: '#'
        }
      ]
    }
  ]
};

export default Portofolio_Item;
