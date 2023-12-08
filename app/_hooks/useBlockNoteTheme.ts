import { useCallback, useEffect, useState } from 'react';
import { Theme, darkDefaultTheme, lightDefaultTheme } from '@blocknote/react';
import useTheme from './useTheme';

function useBlockNoteTheme(editable: boolean) {
  const { theme } = useTheme();

  const getTheme = useCallback(() => {
    if (theme === 'dark') {
      return editable ? darkTheme : darkThemeNoneBg;
    }
    if (theme === 'light') {
      return editable ? lightTheme : lightThemeNoneBg;
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

const darkTheme = {
  ...darkDefaultTheme,
  componentStyles: () => ({
    Editor: {
      cursor: 'text',
      height: '100%',
      paddingTop: '1rem',
      paddingBottom: '1rem',
      background: 'transparent',
      '.tiptap': {
        background: 'transparent',
      },
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

const darkThemeNoneBg = {
  ...darkTheme,
  componentStyles: () => ({
    Editor: {
      ...darkTheme.componentStyles().Editor,
      backgroundColor: 'transparent',
      '.tiptap': {
        background: 'transparent',
      },
    },
  }),
  colors: {
    ...darkTheme.colors,
    editor: {
      ...darkTheme.colors.editor,
      background: 'transparent',
    },
  },
} satisfies Theme;

const lightTheme = {
  ...lightDefaultTheme,
  componentStyles: () => ({
    Editor: {
      cursor: 'text',
      height: '100%',
      paddingTop: '1rem',
      paddingBottom: '1rem',
      '.tiptap': {
        background: 'transparent',
      },
    },
  }),

  colors: {
    ...lightDefaultTheme.colors,
    editor: {
      text: 'text-black',
      background: 'transparent',
    },
  },
} satisfies Theme;

const lightThemeNoneBg = {
  ...lightTheme,
  componentStyles: () => ({
    Editor: {
      ...lightTheme.componentStyles().Editor,
      backgroundColor: 'transparent',
      '.tiptap': {
        background: 'transparent',
      },
    },
  }),
  colors: {
    ...lightTheme.colors,
    editor: {
      ...lightTheme.colors.editor,
      background: 'transparent',
    },
  },
} satisfies Theme;
