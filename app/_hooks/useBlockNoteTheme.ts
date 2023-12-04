import { useCallback, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { Theme, darkDefaultTheme, lightDefaultTheme } from '@blocknote/react';
import COLORS from 'app/_styles/colors';
import themeState from 'app/_store/themeAtom';

function useBlockNoteTheme(editable: boolean) {
  const theme = useRecoilValue(themeState);

  const getTheme = useCallback(() => {
    if (theme === 'dark') {
      return editable ? blockNotedarkTheme : blockNoteDarkThemeNoneBg;
    }
    return lightDefaultTheme;
  }, [theme, editable]);

  const [blockNoteTheme, setBlockNoteTheme] = useState<Theme>(getTheme);

  useEffect(() => {
    const newTheme = getTheme();
    setBlockNoteTheme(newTheme);
  }, [getTheme]);

  return blockNoteTheme;
}

export default useBlockNoteTheme;

const blockNotedarkTheme = {
  ...darkDefaultTheme,
  componentStyles: () => ({
    Editor: {
      cursor: 'text',
      height: '100%',
      paddingTop: '1rem',
      paddingBottom: '1rem',
      '.tiptap': {
        background: COLORS.gray800,
      },
    },
  }),

  colors: {
    ...darkDefaultTheme.colors,
    editor: {
      text: 'white',
      background: COLORS.gray800,
    },
  },
} satisfies Theme;

const blockNoteDarkThemeNoneBg = {
  ...blockNotedarkTheme,
  componentStyles: () => ({
    Editor: {
      ...blockNotedarkTheme.componentStyles().Editor,
      backgroundColor: 'transparent',
      '.tiptap': {
        background: 'transparent',
      },
    },
  }),
  colors: {
    ...blockNotedarkTheme.colors,
    editor: {
      ...blockNotedarkTheme.colors.editor,
      background: 'transparent',
    },
  },
} satisfies Theme;
