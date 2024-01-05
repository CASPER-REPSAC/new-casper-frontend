import { DefaultButton } from '@app/_components/common';
import BarNavMenu from './common/BarNavMenu';
import IntranetSubMenus from '../common/IntranetSubMenus';

function IntranetMenu() {
  return (
    <BarNavMenu
      title={<DefaultButton>Intranet</DefaultButton>}
      subMenus={<IntranetSubMenus />}
    />
  );
}

export default IntranetMenu;
