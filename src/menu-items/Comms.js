// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { MacCommandOutlined } from '@ant-design/icons';

// icons
const icons = {
  MacCommandOutlined
};

// ==============================|| MENU ITEMS - SUPPORT ||============================== //

const Comms_Item = {
  type: 'group',
  url: 'administration-page',
  children: [
    {
      id: 'administration-page',
      title: <FormattedMessage id="Comms Center" />,
      icon: icons.MacCommandOutlined,
      type: 'item',
      url: '#'
    }
  ]
};

export default Comms_Item;
