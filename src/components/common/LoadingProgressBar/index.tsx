import { pageLoadingState } from '@src/atoms/pageLoadingState';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

function LoadingProgressBar() {
  const { isLoading } = useRecoilValue(pageLoadingState);
  const [percentage, setPercentage] = useState(0);
  const rafRef = useRef<number>(0);

  const animate = useCallback(() => {
    setPercentage((prevPercentage) => prevPercentage + 0.1);
    rafRef.current = requestAnimationFrame(animate);
  }, [setPercentage]);

  useEffect(() => {
    if (!isLoading) {
      return () => {
        cancelAnimationFrame(rafRef.current);
      };
    }
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      setPercentage(100);
      cancelAnimationFrame(rafRef.current);
      setTimeout(() => {
        setPercentage(0);
      }, 200);
    };
  }, [isLoading, animate]);

  return <Wrapper $visible={isLoading} $percentage={percentage} />;
}

const Wrapper = styled.div<{ $visible: boolean; $percentage: number }>`
  position: absolute;
  bottom: -2px;
  height: 3px;
  width: ${({ $percentage }) => `${$percentage}vw`};
  background-color: ${({ theme }) => theme.purple};
  transition-property: width, opacity;
  transition-duration: 0.2s, 0.4s;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
`;

export default LoadingProgressBar;
