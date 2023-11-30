import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { isPageLoadingState } from 'app/_recoil';
import { useRecoilValue } from 'recoil';
import { styled } from 'styled-components';

function LoadingProgressBar() {
  const isLoading = useRecoilValue(isPageLoadingState);
  const [percentage, setPercentage] = useState(0);
  const [visible, setVisible] = useState(true);
  const rafRef = useRef<number>(0);

  const calcInterval = (value: number) => {
    if (value < 30) return 2;
    if (value < 50) return 1;
    if (value < 70) return 0.5;
    if (value < 90) return (90 - value) * 0.1;
    return 1;
  };

  const animate = useCallback(() => {
    setVisible(true);
    setPercentage((prevPercentage) => {
      const interval = calcInterval(prevPercentage);

      const nextPrecentage = prevPercentage + interval;
      return nextPrecentage;
    });
    rafRef.current = requestAnimationFrame(animate);
  }, [setPercentage]);

  const controlLoadingProgressAnimation = useCallback(() => {
    if (isLoading) {
      setVisible(true);
      setPercentage(0);
      rafRef.current = requestAnimationFrame(animate);
    }
    return () => {
      cancelAnimationFrame(rafRef.current);
      setPercentage(100);
    };
  }, [isLoading, animate]);

  const finishLoadingProgressAnimation = useCallback(() => {
    if (percentage >= 100) {
      setTimeout(() => {
        setVisible(false);
        setPercentage(0);
      }, 500);
    }
  }, [percentage]);

  useEffect(controlLoadingProgressAnimation, [controlLoadingProgressAnimation]);
  useEffect(finishLoadingProgressAnimation, [finishLoadingProgressAnimation]);

  return (
    <Wrapper
      style={{
        transform: `scaleX(${percentage / 100})`,
        display: visible ? 'inline' : 'none',
      }}
    />
  );
}

const Wrapper = styled.div`
  position: absolute;
  bottom: -2px;
  height: 3px;
  width: 100vw;
  transform-origin: left;
  transition: transform ease 0.5s;
  background-color: ${({ theme }) => theme.purple};
`;

export default memo(LoadingProgressBar);
