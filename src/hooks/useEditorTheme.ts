import { isDarkState } from '@src/atoms';
import { useCallback, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { Theme, darkDefaultTheme, lightDefaultTheme } from '@blocknote/react';
import { darkTheme } from '@src/styles/theme';

function useBlockNoteTheme(editable: boolean) {
  const isDark = useRecoilValue(isDarkState);

  const getTheme = useCallback(() => {
    if (isDark && editable) {
      return blockNotedarkTheme;
    }
    if (isDark && !editable) {
      return blockNoteDarkThemeNoneBg;
    }
    if (!isDark && editable) {
      return lightDefaultTheme;
    }
    if (!isDark && !editable) {
      return lightDefaultTheme;
    }
    return blockNotedarkTheme;
  }, [isDark, editable]);

  const [theme, setTheme] = useState<Theme>(getTheme);

  useEffect(() => {
    const newTheme = getTheme();
    setTheme(newTheme);
  }, [editable, setTheme, getTheme]);

  return theme;
}

export const blockNotedarkTheme = {
  ...darkDefaultTheme,
  componentStyles: () => ({
    // Adds basic styling to the editor.
    Editor: {
      backgroundColor: darkTheme.editorBg,
      padding: '1rem 0px',
      height: '100%',
      cursor: 'text',
      borderRadius: '4px',
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

export const blockNoteDarkThemeNoneBg = {
  ...darkDefaultTheme,
  componentStyles: () => ({
    // Adds basic styling to the editor.
    Editor: {
      backgroundColor: 'transparent',
      padding: '1rem 0',
      height: '100%',
      cursor: 'text',
    },
  }),
  colors: {
    ...darkDefaultTheme.colors,
    editor: {
      text: 'white',
      background: 'transparent',
    },
  },
} satisfies Theme;

export default useBlockNoteTheme;
