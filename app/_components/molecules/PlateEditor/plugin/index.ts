import { withProps } from '@udecode/cn';
import { createPlugins, PlateElement, PlateLeaf } from '@udecode/plate-common';
import { ELEMENT_PARAGRAPH } from '@udecode/plate-paragraph';
import {
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  ELEMENT_H5,
  ELEMENT_H6,
  KEYS_HEADING,
} from '@udecode/plate-heading';
import { ELEMENT_BLOCKQUOTE } from '@udecode/plate-block-quote';
import {
  createHorizontalRulePlugin,
  ELEMENT_HR,
} from '@udecode/plate-horizontal-rule';
import { ELEMENT_UL, ELEMENT_OL, ELEMENT_LI } from '@udecode/plate-list';

import { BlockquoteElement } from '@app/_shadcn/components/plate-ui/blockquote-element';
import { HrElement } from '@app/_shadcn/components/plate-ui/hr-element';
import { HeadingElement } from '@app/_shadcn/components/plate-ui/heading-element';
import { ListElement } from '@app/_shadcn/components/plate-ui/list-element';
import { withDraggables } from '@app/_shadcn/components/plate-ui/with-draggables';
import { ParagraphElement } from '@app/_shadcn/components/plate-ui/paragraph-element';
import { createAutoformatPlugin } from '@udecode/plate-autoformat';
import { createBasicElementsPlugin } from '@udecode/plate-basic-elements';

import { createResetNodePlugin } from '@udecode/plate-reset-node';
import {
  createBasicMarksPlugin,
  MARK_BOLD,
  MARK_CODE,
  MARK_ITALIC,
  MARK_STRIKETHROUGH,
  MARK_UNDERLINE,
} from '@udecode/plate-basic-marks';
import { createImagePlugin, ELEMENT_IMAGE } from '@udecode/plate-media';
import { CodeLeaf } from '@app/_shadcn/components/plate-ui/code-leaf';
import { ImageElement } from '@app/_shadcn/components/plate-ui/image-element';
import {
  createExitBreakPlugin,
  createSoftBreakPlugin,
} from '@udecode/plate-break';
import { ELEMENT_TD } from '@udecode/plate-table';
import { autoformatBlocks } from './autoformat';
import { resetNodeRules } from './resetNode';

const plugins = createPlugins(
  [
    // Pick your plugins in https://platejs.org/?builder=true

    createImagePlugin(),
    createHorizontalRulePlugin(),
    createBasicElementsPlugin(),
    createBasicMarksPlugin(),
    createAutoformatPlugin({
      options: {
        rules: [...autoformatBlocks],
        enableUndoOnDelete: true,
      },
    }),
    createResetNodePlugin({
      options: {
        rules: resetNodeRules,
      },
    }),
    createSoftBreakPlugin({
      options: {
        rules: [
          { hotkey: 'shift+enter' },
          {
            hotkey: 'enter',
            query: {
              allow: [ELEMENT_BLOCKQUOTE, ELEMENT_TD],
            },
          },
        ],
      },
    }),

    createExitBreakPlugin({
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
    }),
  ],
  {
    components: withDraggables({
      [ELEMENT_H1]: withProps(HeadingElement, { variant: 'h1' }),
      [ELEMENT_H2]: withProps(HeadingElement, { variant: 'h2' }),
      [ELEMENT_H3]: withProps(HeadingElement, { variant: 'h3' }),
      [ELEMENT_H4]: withProps(HeadingElement, { variant: 'h4' }),
      [ELEMENT_H5]: withProps(HeadingElement, { variant: 'h5' }),
      [ELEMENT_H6]: withProps(HeadingElement, { variant: 'h6' }),
      [ELEMENT_UL]: withProps(ListElement, { variant: 'ul' }),
      [ELEMENT_OL]: withProps(ListElement, { variant: 'ol' }),
      [ELEMENT_LI]: withProps(PlateElement, { as: 'li' }),
      [ELEMENT_PARAGRAPH]: ParagraphElement,
      [ELEMENT_BLOCKQUOTE]: BlockquoteElement,
      [ELEMENT_HR]: HrElement,
      [MARK_BOLD]: withProps(PlateLeaf, { as: 'strong' }),
      [MARK_ITALIC]: withProps(PlateLeaf, { as: 'em' }),
      [MARK_STRIKETHROUGH]: withProps(PlateLeaf, { as: 's' }),
      [MARK_UNDERLINE]: withProps(PlateLeaf, { as: 'u' }),
      [MARK_CODE]: CodeLeaf,
      [ELEMENT_IMAGE]: ImageElement,
    }),
  },
);

export default plugins;
