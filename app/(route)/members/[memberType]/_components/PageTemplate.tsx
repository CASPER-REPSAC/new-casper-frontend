import { styled } from 'styled-components';
import { MouseEventHandler, ReactNode } from 'react';
import { useRecoilState } from 'recoil';
import { PageShadow } from 'app/_components/common';
import { detailedMemberPopupState } from 'app/_store/memberCardAtoms';

interface Props {
  popupSection: ReactNode;
  memberGridSection: ReactNode;
}

function PageTemplate({ popupSection, memberGridSection }: Props) {
  const [popupVisible, setPopupVisible] = useRecoilState(
    detailedMemberPopupState,
  );

  const closePopup: MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.target === e.currentTarget) {
      setPopupVisible(false);
    }
  };

  return (
    <>
      {popupVisible && (
        <PageShadow onClick={closePopup}>
          <>{popupSection}</>
        </PageShadow>
      )}

      <Cards>{memberGridSection}</Cards>
    </>
  );
}

const Cards = styled.div`
  display: grid;
  margin: 0 auto;
  place-items: center;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px 10px;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    width: 630px;
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    width: 630px;
  }
  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
    width: 840px;
  }
`;

export default PageTemplate;
