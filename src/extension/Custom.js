import { Node, mergeAttributes } from '@tiptap/core';

const Custom = Node.create({
  name: 'custom',
  priority: 1000,
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: 'block',
  content: 'inline*',
  parseHTML() {
    return [
      { tag: 'custom' }
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ['custom', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  addCommands() {
    return {
      setCustom: () => ({ commands }) => {
        return commands.setNode(this.name); // setNode меняет ту ноду на которой фокус
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      'Mod-Alt-3': () => this.editor.commands.setCustom()
    };
  }
});

export default Custom;

