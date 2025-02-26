import {
  BoldPlugin,
  ItalicPlugin,
  StrikethroughPlugin,
} from '@udecode/plate-basic-marks/react';
import { BlockquotePlugin } from '@udecode/plate-block-quote/react';
import { HEADING_KEYS } from '@udecode/plate-heading';
import { ResetNodePlugin } from '@udecode/plate-reset-node/react';
import { ParagraphPlugin } from '@udecode/plate/react';

const resetBlockTypesCommonRule = {
  types: [
    BlockquotePlugin.key,
    HEADING_KEYS.h1,
    HEADING_KEYS.h2,
    HEADING_KEYS.h3,
  ],
  defaultType: ParagraphPlugin.key,
};

const resetMarkTypesCommonRule = {
  types: [ItalicPlugin.key, StrikethroughPlugin.key, BoldPlugin.key],
  defaultType: ParagraphPlugin.key,
};

export const resetNodePlugin = ResetNodePlugin.configure({
  options: {
    rules: [
      {
        ...resetBlockTypesCommonRule,
        hotkey: 'Enter',
        predicate: (editor) => editor.api.isEmpty(),
      },
      {
        ...resetBlockTypesCommonRule,
        hotkey: 'Backspace',
        predicate: (editor) => editor.api.isAt({ start: true }),
      },
      {
        ...resetMarkTypesCommonRule,
        hotkey: ['Space', 'Enter'],
        predicate: (editor) => editor.api.isAt({ start: true }),
      },
    ],
  },
});
