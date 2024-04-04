// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { CreditCardOutlined } from '@ant-design/icons';

// icons
const icons = {
  CreditCardOutlined
};
// ==============================|| MENU ITEMS - APPLICATIONS ||============================== //

const Transaction_Item = {
  //   id: 'group-applications',
  //   title: <FormattedMessage id="applications" />,
  icon: icons.AppstoreAddOutlined,
  type: 'group',
  children: [
    {
      id: 'Transaction',
      title: <FormattedMessage id="Transactions" />,
      type: 'collapse',
      icon: icons.CreditCardOutlined,
      children: [
        {
          id: 'Transaction-1',
          title: <FormattedMessage id="Transaction-1" />,
          type: 'item',
          url: '/transaction/transaction'
        },
        {
          id: 'Transaction-2',
          title: <FormattedMessage id="Transaction-2" />,
          type: 'item',
          url: '#'
        }
      ]
    }
  ]
};

export default Transaction_Item;
