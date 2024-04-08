// third-party
import { FormattedMessage } from 'react-intl';
import { FileCopy } from '@mui/icons-material';
// icons
const icons = {
  FileCopy
};
// ==============================|| MENU ITEMS - APPLICATIONS ||============================== //

const Document_Item = {
  //   id: 'group-applications',
  //   title: <FormattedMessage id="applications" />,
  type: 'group',
  children: [
    {
      id: 'document',
      title: <FormattedMessage id="Documents" />,
      type: 'item',
      icon: icons.FileCopy
      // children: [
      //   {
      //     id: 'document-1',
      //     title: <FormattedMessage id="Document-1" />,
      //     type: 'item',
      //     url: '/document/fund-view'
      //   },
      //   {
      //     id: 'document-2',
      //     title: <FormattedMessage id="Document-2" />,
      //     type: 'item',
      //     url: '#'
      //   }
      // ]
    }
  ]
};

export default Document_Item;
