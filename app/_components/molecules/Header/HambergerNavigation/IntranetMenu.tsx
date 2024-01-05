import IntranetSubMenus from '../common/IntranetSubMenus';

function IntranetMenu() {
  return (
    <>
      <h1 className="text-3xl font-bold">Intranet</h1>
      <div className="flex flex-col">
        <IntranetSubMenus />
      </div>
    </>
  );
}

export default IntranetMenu;
