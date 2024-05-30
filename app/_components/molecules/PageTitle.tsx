interface Props {
  pageTitle: string;
}

function PageTitle({ pageTitle }: Props) {
  return (
    <div className="flex-center my-16">
      <h1 className="text-5xl font-bold">{pageTitle}</h1>
    </div>
  );
}

export default PageTitle;
