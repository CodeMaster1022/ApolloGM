// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { FormOutlined } from '@ant-design/icons';

// icons
const icons = {
  FormOutlined
};

// ==============================|| MENU ITEMS - SUPPORT ||============================== //

const Note_Item = {
  //   id: 'Dashboard',
  //   title: <FormattedMessage id="Dashboard" />,
  type: 'group',
  url: 'dashboard-page',
  children: [
    {
      id: 'note-page',
      title: <FormattedMessage id="Notes" />,
      icon: icons.FormOutlined,
      type: 'item',
      url: 'note-page'
    }
  ]
};

export default Note_Item;
