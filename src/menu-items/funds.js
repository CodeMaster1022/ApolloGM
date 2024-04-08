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
  // icon: icons.MoneyCollectTwoTone,
  type: 'group',
  children: [
    {
      id: 'Funds',
      title: <FormattedMessage id="Funds" />,
      type: 'item',
      icon: icons.MoneyCollectTwoTone,
      url: 'funds',
      children: [
        {
          id: 'fund-list',
          title: <FormattedMessage id="fund-list" />,
          // type: 'item',
          url: '/funds/fund-list'
        },
        {
          id: 'fund-view',
          title: <FormattedMessage id="fund-view" />,
          // type: 'item',
          url: '/funds/fund-view'
        }
        // {
        //   id: 'invested',
        //   title: <FormattedMessage id="invested" />,
        //   type: 'item',
        //   url: '/funds/Invested'
        // },
        // {
        //   id: 'Invited',
        //   title: <FormattedMessage id="Invited" />,
        //   type: 'item',
        //   url: '/funds/Invited'
        // },
        // {
        //   id: 'Past Investments',
        //   title: <FormattedMessage id="Past Investments" />,
        //   type: 'item',
        //   url: '#'
        // },
        // {
        //   id: 'Not Interested',
        //   title: <FormattedMessage id="Not Interested" />,
        //   type: 'item',
        //   url: '#'
        // }
      ]
    }
  ]
};

export default Funds_Item;
