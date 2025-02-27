'use client';

import type { SlateEditor } from '@udecode/plate';
import { ElementApi } from '@udecode/plate';
import type {
  AutoformatBlockRule,
  AutoformatRule,
} from '@udecode/plate-autoformat';
import { autoformatArrow } from '@udecode/plate-autoformat';
import { AutoformatPlugin } from '@udecode/plate-autoformat/react';
import {
  BoldPlugin,
  CodePlugin,
  ItalicPlugin,
  StrikethroughPlugin,
  UnderlinePlugin,
} from '@udecode/plate-basic-marks/react';
import { BlockquotePlugin } from '@udecode/plate-block-quote/react';
import { HEADING_KEYS } from '@udecode/plate-heading';
import {
  INDENT_LIST_KEYS,
  ListStyleType,
  toggleIndentList,
} from '@udecode/plate-indent-list';
import { toggleList, unwrapList } from '@udecode/plate-list';
import {
  BulletedListPlugin,
  ListItemPlugin,
  NumberedListPlugin,
} from '@udecode/plate-list/react';

export const format = (editor: SlateEditor, customFormatting: () => void) => {
  if (editor.selection) {
    const parentEntry = editor.api.parent(editor.selection);

    if (!parentEntry) return;

    const [node] = parentEntry;

    if (ElementApi.isElement(node)) {
      customFormatting();
    }
  }
};

export const formatList = (editor: SlateEditor, elementType: string) => {
  format(editor, () =>
    toggleList(editor, {
      type: elementType,
    }),
  );
};

export const autoformatMarks: AutoformatRule[] = [
  {
    match: '**',
    mode: 'mark',
    type: BoldPlugin.key,
  },
  {
    match: '__',
    mode: 'mark',
    type: UnderlinePlugin.key,
  },
  {
    match: '*',
    mode: 'mark',
    type: ItalicPlugin.key,
  },
  {
    match: '_',
    mode: 'mark',
    type: ItalicPlugin.key,
  },
  {
    match: '~~',
    mode: 'mark',
    type: StrikethroughPlugin.key,
  },

  {
    match: '`',
    mode: 'mark',
    type: CodePlugin.key,
  },
];

export const autoformatBlocks: AutoformatRule[] = [
  {
    match: '# ',
    mode: 'block',
    type: HEADING_KEYS.h1,
  },
  {
    match: '## ',
    mode: 'block',
    type: HEADING_KEYS.h2,
  },
  {
    match: '### ',
    mode: 'block',
    type: HEADING_KEYS.h3,
  },
  {
    match: '> ',
    mode: 'block',
    type: BlockquotePlugin.key,
  },
];

export const preFormat: AutoformatBlockRule['preFormat'] = (editor) =>
  unwrapList(editor);

export const autoformatLists: AutoformatRule[] = [
  {
    match: ['- '],
    mode: 'block',
    preFormat,
    type: ListItemPlugin.key,
    format: (editor) => formatList(editor, BulletedListPlugin.key),
  },
  {
    match: [String.raw`^\d+\.$ `, String.raw`^\d+\)$ `],
    matchByRegex: true,
    mode: 'block',
    preFormat,
    type: ListItemPlugin.key,
    format: (editor) => formatList(editor, NumberedListPlugin.key),
  },
];

export const autoformatIndentLists: AutoformatRule[] = [
  {
    match: ['* ', '- '],
    mode: 'block',
    type: 'list',
    format: (editor) => {
      editor.tf.setNodes({
        listStyleType: ListStyleType.Disc,
      });
      toggleIndentList(editor, {
        listStyleType: ListStyleType.Disc,
      });
    },
  },
  {
    match: [String.raw`^\d+\.$ `, String.raw`^\d+\)$ `],
    matchByRegex: true,
    mode: 'block',
    type: 'list',
    format: (editor) =>
      toggleIndentList(editor, {
        listStyleType: ListStyleType.Decimal,
      }),
  },
  {
    match: ['[] '],
    mode: 'block',
    type: 'list',
    format: (editor) => {
      toggleIndentList(editor, {
        listStyleType: INDENT_LIST_KEYS.todo,
      });
      editor.tf.setNodes({
        checked: false,
        listStyleType: INDENT_LIST_KEYS.todo,
      });
    },
  },
  {
    match: ['[x] '],
    mode: 'block',
    type: 'list',
    format: (editor) => {
      toggleIndentList(editor, {
        listStyleType: INDENT_LIST_KEYS.todo,
      });
      editor.tf.setNodes({
        checked: true,
        listStyleType: INDENT_LIST_KEYS.todo,
      });
    },
  },
];

export const autoformatPlugin = AutoformatPlugin.configure({
  options: {
    enableUndoOnDelete: true,
    rules: [
      ...autoformatBlocks,
      ...autoformatMarks,
      ...autoformatArrow,
      ...autoformatLists,
      // ...autoformatIndentLists,
    ],
  },
});
