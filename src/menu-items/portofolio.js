// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { AccountBookFilled } from '@ant-design/icons';

// icons
const icons = {
  AccountBookFilled
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
      icon: icons.AccountBookFilled,
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
