import { DefaultButton } from '@app/_components/common';
import { PATH } from '@app/_constants/urls';

function IntranetSubMenus() {
  const {
    extra: { nas, wiki, recruit },
  } = PATH;

  return (
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
  );
}

export default IntranetSubMenus;
