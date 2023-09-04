import { ReactNode, useCallback, useEffect, useState } from 'react';
import { styled } from 'styled-components';

function useMarkdown(text: string) {
  const [markdown, setMarkdown] = useState<ReactNode[]>();

  const convertHTag = (line: string) => {
    const result: ReactNode[] = [];
    if (line.startsWith('# ')) {
      const extractedText = line.slice(2);
      result.push(<h1>{extractedText}</h1>);
    } else if (line.startsWith('## ')) {
      const extractedText = line.slice(3);
      result.push(<h2>{extractedText}</h2>);
    } else if (line.startsWith('### ')) {
      const extractedText = line.slice(4);
      result.push(<h3>{extractedText}</h3>);
    } else if (line.startsWith('#### ')) {
      const extractedText = line.slice(5);
      result.push(<h4>{extractedText}</h4>);
    } else if (line.startsWith('##### ')) {
      const extractedText = line.slice(6);
      result.push(<h5>{extractedText}</h5>);
    } else {
      return false;
    }
    return result;
  };

  const convertLiTag = (line: string) => {
    const result: ReactNode[] = [];
    if (line.startsWith('- ')) {
      const extractedText = line.slice(2);
      result.push(<li>{extractedText}</li>);
    } else {
      return false;
    }
    return result;
  };

  const convertToMarkdown = useCallback((line: string) => {
    const result: ReactNode[] = [];

    const hTag = convertHTag(line);
    const liTag = convertLiTag(line);
    if (hTag) {
      result.push(hTag);
    } else if (liTag) {
      result.push(liTag);
    } else {
      result.push(<P>{line}</P>);
    }
    return result;
  }, []);

  useEffect(() => {
    const lineList = text.split('\n');
    const convertedText = lineList.map(convertToMarkdown);
    setMarkdown(convertedText);
  }, [text, setMarkdown, convertToMarkdown]);

  return {
    markdown,
  };
}

export default useMarkdown;

const P = styled.p`
  line-height: 18px;
  height: 18px;
`;
