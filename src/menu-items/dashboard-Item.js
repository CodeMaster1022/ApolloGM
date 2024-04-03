// third-party
import { FormattedMessage } from 'react-intl';

// assets
import {
  BorderOutlined,
  BoxPlotOutlined,
  ChromeOutlined,
  DeploymentUnitOutlined,
  GatewayOutlined,
  MenuUnfoldOutlined,
  QuestionOutlined,
  SmileOutlined,
  StopOutlined
} from '@ant-design/icons';

// icons
const icons = {
  ChromeOutlined,
  MenuUnfoldOutlined,
  BoxPlotOutlined,
  StopOutlined,
  BorderOutlined,
  SmileOutlined,
  GatewayOutlined,
  QuestionOutlined,
  DeploymentUnitOutlined
};

// ==============================|| MENU ITEMS - SUPPORT ||============================== //

const Dashboard_Item = {
//   id: 'Dashboard',
//   title: <FormattedMessage id="Dashboard" />,
  type: 'group',
  url:"dashboard-page",
  children:[
    {
      id: 'dashboard-page',
      title: <FormattedMessage id= 'Dashboard' />,
      icon: icons.ChromeOutlined,
      type:'item',
      url: 'dashboard-page',
    }, 
  ]
};

export default Dashboard_Item;
