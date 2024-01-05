import { DefaultButton } from '@app/_components/common';
import { PATH } from '@app/_constants/urls';
import BarNavMenu from './BarNavMenu';

function IntranetMenu() {
  const intranetMenus = Object.values(PATH.extra).map(({ name, url }) => (
    <DefaultButton
      key={name}
      className="w-full"
      onClick={() => {
        window.location.href = url;
      }}
    >
      {name}
    </DefaultButton>
  ));

  return (
    <BarNavMenu
      title={<DefaultButton>Intranet</DefaultButton>}
      subMenus={intranetMenus}
    />
  );
}

export default IntranetMenu;
