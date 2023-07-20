import { Node, mergeAttributes } from '@tiptap/core';
import { VueNodeViewRenderer } from '@tiptap/vue-3';

import Component from '../components/TestItem.vue';

const TestItem = Node.create({
  name: 'testItem',
  group: 'block',
  content: 'paragraph*',

  addAttributes() {
    return {
      isSelected: {
        default: false
      },
      correctness: {
        default: null
      },
      isRight: {
        default: false
      }
    };
  },
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [{
      tag: 'testItem'
    }];
  },
  renderHTML({ HTMLAttributes }) {
    return ['testItem', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  addKeyboardShortcuts() {
    return {
      Enter: ({ editor }) => {
        editor.commands.insertContent({ type: 'paragraph' });
        return true;
      }
    };
  },
  addNodeView() {
    return VueNodeViewRenderer(Component);
  }
});

export default TestItem;
