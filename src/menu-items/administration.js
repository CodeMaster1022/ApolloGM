// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { SettingOutlined } from '@ant-design/icons';

// icons
const icons = {
  SettingOutlined
};

// ==============================|| MENU ITEMS - SUPPORT ||============================== //

const Administration_Item = {
  type: 'group',
  url: 'administration-page',
  children: [
    {
      id: 'administration-page',
      title: <FormattedMessage id="Administration" />,
      icon: icons.SettingOutlined,
      type: 'item',
      url: '#'
    }
  ]
};

export default Administration_Item;
