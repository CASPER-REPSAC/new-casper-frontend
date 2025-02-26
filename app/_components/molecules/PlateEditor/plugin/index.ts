import { BasicElementsPlugin } from '@udecode/plate-basic-elements/react';
import { createPlugins } from '@udecode/plate-common';

const plugins = createPlugins([
  // Pick your plugins in https://platejs.org/?builder=true
  BasicElementsPlugin,
]);

export default plugins;

/**
 * 
 *  createImagePlugin(),
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
    createCaptionPlugin({
      options: { pluginKeys: [ELEMENT_IMAGE, ELEMENT_MEDIA_EMBED] },
    }),
    createDndPlugin({
      options: { enableScroller: true },
    }),

    dragOverCursorPlugin,
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
 */
