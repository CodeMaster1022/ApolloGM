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
  AppstoreAddOutlined,
  MoneyCollectTwoTone
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
  FileTextOutlined,
  MoneyCollectTwoTone
};
// ==============================|| MENU ITEMS - APPLICATIONS ||============================== //

const Funds_Item = {
  //   id: 'group-applications',
  //   title: <FormattedMessage id="applications" />,
  icon: icons.MoneyCollectTwoTone,
  type: 'group',
  children: [
    {
      id: 'Funds',
      title: <FormattedMessage id="Funds" />,
      type: 'collapse',
      icon: icons.AppstoreFilled,
      children: [
        {
          id: 'Fund-view',
          title: <FormattedMessage id="Fund-view" />,
          type: 'item',
          url: '/funds/fund-view'
        },
        {
          id: 'Investred',
          title: <FormattedMessage id="Invested" />,
          type: 'item',
          url: '/funds/Investred'
        },
        {
          id: 'Fund-view',
          title: <FormattedMessage id="Invited" />,
          type: 'item',
          url: '/funds/Invited'
        },
        {
          id: 'Past Investments',
          title: <FormattedMessage id="Past Investments" />,
          type: 'item',
          url: '#'
        },
        {
          id: 'Past Investments',
          title: <FormattedMessage id="Not Interested" />,
          type: 'item',
          url: '#'
        }
      ]
    }
  ]
};

export default Funds_Item;
