import { withProps } from '@udecode/cn';
import { createPlugins, PlateElement } from '@udecode/plate-common';
import { ELEMENT_PARAGRAPH } from '@udecode/plate-paragraph';
import {
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  ELEMENT_H5,
  ELEMENT_H6,
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
import { withPlaceholders } from '@app/_shadcn/components/plate-ui/placeholder';
import { withDraggables } from '@app/_shadcn/components/plate-ui/with-draggables';
import { ParagraphElement } from '@app/_shadcn/components/plate-ui/paragraph-element';
import { createAutoformatPlugin } from '@udecode/plate-autoformat';
import { createBasicElementsPlugin } from '@udecode/plate-basic-elements';

import { createResetNodePlugin } from '@udecode/plate-reset-node';
import { autoformatBlocks } from './autoformat';
import { resetNodeRules } from './resetNode';

const plugins = createPlugins(
  [
    // Pick your plugins in https://platejs.org/?builder=true

    createHorizontalRulePlugin(),
    createBasicElementsPlugin(),
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
  ],
  {
    components: withDraggables(
      withPlaceholders({
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
      }),
    ),
  },
);

export default plugins;
