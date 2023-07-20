import { Node, mergeAttributes } from '@tiptap/core';
import { VueNodeViewRenderer } from '@tiptap/vue-3';

import Component from '../components/Test.vue';

export default Node.create({
  name: 'test',
  group: 'block',
  content: 'testItem+',

  parseHTML() {
    return [{
      tag: 'test'
    }];
  },
  addCommands() {
    return {
      insertTest: () => ({ tr, commands, can, dispatch, chain, editor, state, view }) => {
        // чтобы знать что можно получить из этих параметров, см. https://www.tiptap.dev/api/commands/insert-content
        console.log('test-component', { tr, commands, can, chain, dispatch, editor, state, view });
        return commands.insertContent({
          type: this.name,
          content: [{
            'type': 'testItem',
            'content': [
              {
                'type': 'paragraph',
                'attrs': {
                  'textAlign': 'left',
                  'color': null
                }
              }
            ]
          }]
        });
        // return commands.insertContent('<testItem>Варик</testItem>');
      },
      addTestVariant: () => ({ tr, commands, can, dispatch, chain, editor, state, view }) => {
        // чтобы знать что можно получить из этих параметров, см. https://www.tiptap.dev/api/commands/insert-content
        return commands.insertContent(`<test-item>Вариант 2</test-item>`);
      }
    };
  },
  renderHTML({ HTMLAttributes }) {
    return ['test', ['testItem', mergeAttributes(HTMLAttributes), 0]];
    // return ['test', mergeAttributes(HTMLAttributes), 0];
  },
  addNodeView() {
    return VueNodeViewRenderer(Component);
  }
});

