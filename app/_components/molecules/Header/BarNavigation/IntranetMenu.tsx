import { DefaultButton } from '@app/_components/common';
import { PATH } from '@app/_constants/urls';
import BarNavMenu from './common/BarNavMenu';

function IntranetMenu() {
  const {
    extra: { nas, wiki, recruit },
  } = PATH;

  return (
    <BarNavMenu
      title={<DefaultButton>Intranet</DefaultButton>}
      subMenus={
        <>
          <DefaultButton
            className="w-full"
            onClick={() => {
              window.location.href = nas.url;
            }}
          >
            {nas.name}
          </DefaultButton>
          <DefaultButton
            className="w-full"
            onClick={() => {
              window.location.href = wiki.url;
            }}
          >
            {wiki.name}
          </DefaultButton>
          <DefaultButton
            className="w-full"
            onClick={() => {
              window.location.href = recruit.url;
            }}
          >
            {recruit.name}
          </DefaultButton>
        </>
      }
    />
  );
}

export default IntranetMenu;
