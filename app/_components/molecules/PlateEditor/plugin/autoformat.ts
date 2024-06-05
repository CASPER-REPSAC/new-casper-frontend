import { AutoformatRule } from '@udecode/plate-autoformat';
import {
  MARK_BOLD,
  MARK_CODE,
  MARK_ITALIC,
  MARK_STRIKETHROUGH,
  MARK_UNDERLINE,
} from '@udecode/plate-basic-marks';
import { ELEMENT_BLOCKQUOTE } from '@udecode/plate-block-quote';
import { ELEMENT_DEFAULT, insertNodes, setNodes } from '@udecode/plate-common';
import {
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  ELEMENT_H5,
  ELEMENT_H6,
} from '@udecode/plate-heading';
import { ELEMENT_HR } from '@udecode/plate-horizontal-rule';

export const autoformatBlocks: AutoformatRule[] = [
  {
    mode: 'block',
    type: ELEMENT_H1,
    match: '# ',
  },
  {
    mode: 'block',
    type: ELEMENT_H2,
    match: '## ',
  },
  {
    mode: 'block',
    type: ELEMENT_H3,
    match: '### ',
  },
  {
    mode: 'block',
    type: ELEMENT_H4,
    match: '#### ',
  },
  {
    mode: 'block',
    type: ELEMENT_H5,
    match: '##### ',
  },
  {
    mode: 'block',
    type: ELEMENT_H6,
    match: '###### ',
  },
  {
    mode: 'block',
    type: ELEMENT_BLOCKQUOTE,
    match: '> ',
  },

  {
    mode: 'block',
    type: ELEMENT_HR,
    match: ['---', '—-', '___ '],
    format: (editor) => {
      setNodes(editor, { type: ELEMENT_HR });
      insertNodes(editor, {
        type: ELEMENT_DEFAULT,
        children: [{ text: '' }],
      });
    },
  },
  {
    mode: 'mark',
    type: MARK_BOLD,
    match: '**',
  },
  {
    mode: 'mark',
    type: MARK_CODE,
    match: '`',
  },
  {
    mode: 'mark',
    type: MARK_STRIKETHROUGH,
    match: '~~',
  },
  {
    mode: 'mark',
    type: MARK_ITALIC,
    match: ['*', '_'],
  },
  {
    mode: 'mark',
    type: MARK_UNDERLINE,
    match: '__',
  },
];
