import { cn } from '@udecode/cn';
import { TElement } from '@udecode/plate-common';
import { Plate, PlateContent } from '@udecode/plate/react';
import { useRef } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
// import { CursorOverlay } from '@app/_shadcn/components/plate-ui/cursor-overlay';
// import { FixedToolbar } from '@app/_shadcn/components/plate-ui/fixed-toolbar';
// import { FixedToolbarButtons } from '@app/_shadcn/components/plate-ui/fixed-toolbar-buttons';
// import { FloatingToolbar } from '@app/_shadcn/components/plate-ui/floating-toolbar';
// import { FloatingToolbarButtons } from '@app/_shadcn/components/plate-ui/floating-toolbar-buttons';
// import { TooltipProvider } from '@app/_shadcn/components/plate-ui/tooltip';
import { Editor, EditorContainer } from './plate-ui/editor';
import { useCreateEditor } from './use-create-editor';

// import plugins from './plugin';

interface Props {
  readOnly?: boolean;
  initialValue?: TElement[];
  onValueChange?: (value: TElement[]) => void;
  className?: string;
}

export function PlateEditor({
  readOnly = false,
  // initialValue,
  // onValueChange,
  className,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  const editor = useCreateEditor();

  return (
    // <TooltipProvider>
    <DndProvider backend={HTML5Backend}>
      <Plate
        editor={editor}
        // plugins={plugins}
        // initialValue={initialValue}
        // onChange={onValueChange}
      >
        <div
          ref={containerRef}
          className={cn('relative', !readOnly && 'border', className)}
        >
          {/* <CursorOverlay containerRef={containerRef} /> */}
          {/* 
            {!readOnly && (
              <FixedToolbar>
                <FixedToolbarButtons />
              </FixedToolbar>
            )} */}
          <PlateContent placeholder="내용을 입력해주세요."></PlateContent>

          <EditorContainer>
            <Editor variant="demo" placeholder="Type..." />
          </EditorContainer>
          {/* <Editor
              readOnly={readOnly}
              variant="ghost"
              className={`h-full ${!readOnly && 'px-8'}`}
              focusRing={false}
              placeholder="내용을 입력해주세요."
            /> */}

          {/* {!readOnly && (
            <FloatingToolbar>
              <FloatingToolbarButtons />
            </FloatingToolbar>
          )} */}
        </div>
      </Plate>
    </DndProvider>
    // </TooltipProvider>
  );
}
