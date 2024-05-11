import { Plate } from '@udecode/plate-common';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Editor } from '@app/_shadcn/components/plate-ui/editor';
import { FixedToolbar } from '@app/_shadcn/components/plate-ui/fixed-toolbar';
import { FixedToolbarButtons } from '@app/_shadcn/components/plate-ui/fixed-toolbar-buttons';
import { FloatingToolbar } from '@app/_shadcn/components/plate-ui/floating-toolbar';
import { FloatingToolbarButtons } from '@app/_shadcn/components/plate-ui/floating-toolbar-buttons';
import { TooltipProvider } from '@app/_shadcn/components/plate-ui/tooltip';
import plugins from './plugin';

export function PlateEditor() {
  return (
    <TooltipProvider>
      <DndProvider backend={HTML5Backend}>
        <div className="min-h-[500px] border">
          <Plate plugins={plugins} onChange={(v) => console.log(v)}>
            <FixedToolbar>
              <FixedToolbarButtons />
            </FixedToolbar>

            <Editor variant="ghost" className="h-full px-8" focusRing={false} />

            <FloatingToolbar>
              <FloatingToolbarButtons />
            </FloatingToolbar>
          </Plate>
        </div>
      </DndProvider>
    </TooltipProvider>
  );
}
