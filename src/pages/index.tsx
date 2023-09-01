import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { HiLightBulb } from 'react-icons/hi';
import { useState } from 'react';
import {
  All,
  Background,
  Body,
  Col,
  Cur,
  CurPageBar,
  H1,
  H2,
  LeftButton,
  Notice,
  Page,
  PageBar,
  RightButton,
  Row,
  Title,
  White,
} from './home.style';

export default function Home() {
  const [page, setPage] = useState(1);
  const [allPage, setAllPage] = useState(5);
  const [bgImgs, setBgImgs] = useState(['background1.jpg', 'background2.jpg']);

  const nextPage = () => {
    setPage((curPage) => {
      return curPage === allPage ? allPage : curPage + 1;
    });
  };
  const prevPage = () => {
    setPage((curPage) => {
      return curPage === 1 ? 1 : curPage - 1;
    });
  };
  const renderPageBar = () => {
    const result = [];
    for (let i = 0; i < allPage; i++) {
      result.push(
        <CurPageBar key={i}>{page === i + 1 ? <White /> : null}</CurPageBar>,
      );
    }
    return result;
  };

  return (
    <>
      <Background bgurl={bgImgs[page - 1]} />
      <Body>
        <Notice>
          <HiLightBulb size={40} color="yellow" />
          신입생 모집 기간입니다.
        </Notice>
        <Title>
          <H1>THE CENTER OF SECURITY</H1>
          <H2>정보 보안 동아리 CASPER</H2>
        </Title>
        <Col>
          <Page>
            <Cur>{page}</Cur>
            <All>/{allPage}</All>
          </Page>
          <Row>
            <PageBar>{renderPageBar()}</PageBar>
            <LeftButton onClick={prevPage}>
              <MdArrowBackIos size={25} />
            </LeftButton>
            <RightButton onClick={nextPage}>
              <MdArrowForwardIos size={25} />
            </RightButton>
          </Row>
        </Col>
      </Body>
    </>
  );
}
