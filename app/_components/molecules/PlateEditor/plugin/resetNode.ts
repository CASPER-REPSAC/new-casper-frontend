import { MARK_BOLD } from '@udecode/plate-basic-marks';
import { ELEMENT_BLOCKQUOTE } from '@udecode/plate-block-quote';
import {
  isBlockAboveEmpty,
  isSelectionAtBlockStart,
} from '@udecode/plate-common';
import { KEYS_HEADING } from '@udecode/plate-heading';
import { ELEMENT_PARAGRAPH } from '@udecode/plate-paragraph';
import { ResetNodePluginRule } from '@udecode/plate-reset-node';

const resetBlockTypesCommonRule = {
  types: [ELEMENT_BLOCKQUOTE, ...KEYS_HEADING, MARK_BOLD],
  defaultType: ELEMENT_PARAGRAPH,
};

export const resetNodeRules: ResetNodePluginRule[] = [
  {
    ...resetBlockTypesCommonRule,
    hotkey: 'Enter',
    predicate: isBlockAboveEmpty,
  },
  {
    ...resetBlockTypesCommonRule,
    hotkey: 'Backspace',
    predicate: isSelectionAtBlockStart,
  },
];
