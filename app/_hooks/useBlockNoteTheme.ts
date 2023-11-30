import { isDarkState } from 'app/_recoil';
import { useCallback, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { Theme, darkDefaultTheme, lightDefaultTheme } from '@blocknote/react';
import { darkTheme } from 'app/_styles/theme';

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
      backgroundColor: darkTheme.inputSurface,
      padding: '1rem 0px',
      cursor: 'text',
      height: '100%',
      borderRadius: '4px',
      '.tiptap': {
        background: darkTheme.inputSurface,
      },
    },
  }),

  colors: {
    ...darkDefaultTheme.colors,
    editor: {
      text: darkTheme.textDefault,
      background: darkTheme.editorBg,
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
