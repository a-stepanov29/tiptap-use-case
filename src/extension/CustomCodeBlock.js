import { CodeBlock } from '@tiptap/extension-code-block';
import { mergeAttributes } from '@tiptap/core';

const CustomCodeBlock = CodeBlock.extend({
  renderHTML({ HTMLAttributes }) {
    return ['pre', ['code', HTMLAttributes, 0]];
    // добавить атрибуты к тем что уже есть
    // return ['a', mergeAttributes(HTMLAttributes, { rel: this.options.rel }), 0];
  }
});

export default CustomCodeBlock;
