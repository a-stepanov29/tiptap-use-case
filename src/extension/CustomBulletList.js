import BulletList from '@tiptap/extension-bullet-list';

const CustomBulletList = BulletList.extend({
  addKeyboardShortcuts() {
    return {
      'Mod-l': () => this.editor.commands.toggleBulletList() // Mod-l = ctrl+l
    };
  }
});

export default CustomBulletList;
