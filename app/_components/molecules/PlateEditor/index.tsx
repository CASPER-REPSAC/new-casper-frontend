import { cn } from '@udecode/cn';
import { TElement } from '@udecode/plate';
import { Plate } from '@udecode/plate/react';
import { useRef } from 'react';
import { Editor, EditorContainer } from './plate-ui/editor';
import { useCreateEditor } from './use-create-editor';

// import plugins from './plugin';

interface Props {
  readOnly?: boolean;
  value?: TElement[];
  onValueChange?: (value: TElement[]) => void;
  className?: string;
}

export function PlateEditor({
  readOnly = false,
  value = [],
  onValueChange,
  className,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  const editor = useCreateEditor(value);

  return (
    <div data-registry="plate">
      <Plate
        editor={editor}
        onValueChange={({ value }) => {
          onValueChange?.(value);
        }}
      >
        <div
          ref={containerRef}
          className={cn('relative', !readOnly && 'border rounded', className)}
        >
          {/* <CursorOverlay containerRef={containerRef} /> */}
          {/* 
            {!readOnly && (
              <FixedToolbar>
                <FixedToolbarButtons />
              </FixedToolbar>
            )} */}

          <EditorContainer>
            <Editor
              className={cn(!readOnly && 'px-4', className)}
              readOnly={readOnly}
              variant="default"
              placeholder="내용을 입력해주세요."
            />
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
    </div>
  );
}
