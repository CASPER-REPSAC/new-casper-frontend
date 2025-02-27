import { cn } from '@udecode/cn';
import { TElement } from '@udecode/plate';
import { Plate } from '@udecode/plate/react';
import { useRef } from 'react';
import { Editor, EditorContainer } from './plate-ui/editor';
import { useCreateEditor } from './use-create-editor';

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
              placeholder={`마크 다운 문법을 사용해 내용을 작성해보세요. \n\n# Heading 1\n## Heading 2\n### Heading 3\n\n**Bold**\n*Italic* \n\n- list\n1. numbered list  \n\n> blockquote`}
            />
          </EditorContainer>

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
