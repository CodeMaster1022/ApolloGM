// project import
// import other from './other';
// import widget from './widget';
import Dashboard_Item from './dashboard-Item';
import Funds_Item from './fund-Item';
import Administration_Item from './administration';
import Capital_Item from './capital';
import Document_Item from './document';
import Investor_Item from './investor-item';
import Portofolio_Item from './portofolio';
import Note_Item from './note';
import Research_Item from './research';
import Subscription_Item from './subscription';
import Transaction_Item from './transaction';
import Valuation_Item from './valuation';
import Action_Item from './Actions';
import Analytics_Item from './Analytics';
import Comms_Item from './Comms';
// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
  items: [
    Dashboard_Item,
    Funds_Item,
    Investor_Item,
    Portofolio_Item,
    Transaction_Item,
    Subscription_Item,
    Capital_Item,
    Document_Item,
    Note_Item,
    Research_Item,
    Valuation_Item,
    Analytics_Item,
    Action_Item,
    Comms_Item,
    Administration_Item
  ]
};

export default menuItems;
