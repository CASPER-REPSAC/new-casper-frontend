import { ExitBreakPlugin } from '@udecode/plate-break/react';
import { HEADING_LEVELS } from '@udecode/plate-heading';

export const exitBreakPlugin = ExitBreakPlugin.configure({
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
          allow: HEADING_LEVELS,
        },
        relative: true,
        level: 1,
      },
    ],
  },
});
