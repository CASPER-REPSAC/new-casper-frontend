import { useRef } from 'react';
import { cn } from '@udecode/cn';
import { Plate, TElement } from '@udecode/plate-common';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Editor } from '@app/_shadcn/components/plate-ui/editor';
import { FixedToolbar } from '@app/_shadcn/components/plate-ui/fixed-toolbar';
import { FixedToolbarButtons } from '@app/_shadcn/components/plate-ui/fixed-toolbar-buttons';
import { FloatingToolbar } from '@app/_shadcn/components/plate-ui/floating-toolbar';
import { FloatingToolbarButtons } from '@app/_shadcn/components/plate-ui/floating-toolbar-buttons';
import { TooltipProvider } from '@app/_shadcn/components/plate-ui/tooltip';
import { CursorOverlay } from '@app/_shadcn/components/plate-ui/cursor-overlay';
import plugins from './plugin';

interface Props {
  readOnly?: boolean;
  initialValue?: TElement[];
  onValueChange?: (value: TElement[]) => void;
}

export function PlateEditor({
  readOnly = false,
  initialValue,
  onValueChange,
}: Props) {
  const containerRef = useRef(null);

  return (
    <>
      <TooltipProvider>
        <DndProvider backend={HTML5Backend}>
          <Plate
            plugins={plugins}
            initialValue={initialValue}
            onChange={onValueChange}
          >
            <div
              ref={containerRef}
              className={cn('relative', !readOnly && 'border')}
            >
              <CursorOverlay containerRef={containerRef} />

              {!readOnly && (
                <FixedToolbar>
                  <FixedToolbarButtons />
                </FixedToolbar>
              )}

              <Editor
                readOnly={readOnly}
                variant="ghost"
                className={`h-full ${!readOnly && 'px-8'}`}
                focusRing={false}
                placeholder="내용을 입력해주세요."
              />

              {!readOnly && (
                <FloatingToolbar>
                  <FloatingToolbarButtons />
                </FloatingToolbar>
              )}
            </div>
          </Plate>
        </DndProvider>
      </TooltipProvider>
    </>
  );
}
