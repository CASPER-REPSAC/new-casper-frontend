import { createExitBreakPlugin } from '@udecode/plate-break';
import { KEYS_HEADING } from '@udecode/plate-heading';

export const exitBreakPlugin = createExitBreakPlugin({
  options: {
    rules: [
      {
        hotkey: 'mod+enter',
      },
      {
        hotkey: 'mod+shift+enter',
        before: true,
      },
      {
        hotkey: 'enter',
        query: {
          start: true,
          end: true,
          allow: KEYS_HEADING,
        },
        relative: true,
        level: 1,
      },
    ],
  },
});
