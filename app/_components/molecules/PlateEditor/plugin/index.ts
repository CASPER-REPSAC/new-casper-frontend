import { BasicElementsPlugin } from '@udecode/plate-basic-elements/react';
import { BasicMarksPlugin } from '@udecode/plate-basic-marks/react';
import { ListPlugin } from '@udecode/plate-list/react';
import { autoformatPlugin } from './autoformat';
import { exitBreakPlugin } from './exitBreak';
import { resetNodePlugin } from './resetNode';

const plugins = [
  // Pick your plugins in https://platejs.org/?builder=true
  BasicElementsPlugin,
  BasicMarksPlugin,
  autoformatPlugin,
  exitBreakPlugin,
  resetNodePlugin,
  ListPlugin,
];

export default plugins;
