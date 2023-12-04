import { isDarkState } from 'app/_store';
import { useCallback, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { Theme, darkDefaultTheme, lightDefaultTheme } from '@blocknote/react';
import COLORS from 'app/_styles/colors';

function useBlockNoteTheme(editable: boolean) {
  const isDark = useRecoilValue(isDarkState);

  const getTheme = useCallback(() => {
    if (isDark) {
      return editable ? blockNotedarkTheme : blockNoteDarkThemeNoneBg;
    }
    return lightDefaultTheme;
  }, [isDark, editable]);

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
        background: COLORS.gray850,
      },
    },
  }),

  colors: {
    ...darkDefaultTheme.colors,
    editor: {
      text: 'white',
      background: COLORS.gray850,
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
