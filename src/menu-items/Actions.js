// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { InteractionFilled } from '@ant-design/icons';

// icons
const icons = {
  InteractionFilled
};

// ==============================|| MENU ITEMS - SUPPORT ||============================== //

const Action_Item = {
  type: 'group',
  url: 'administration-page',
  children: [
    {
      id: 'administration-page',
      title: <FormattedMessage id="Actions" />,
      icon: icons.InteractionFilled,
      type: 'item',
      url: '#'
    }
  ]
};

export default Action_Item;
