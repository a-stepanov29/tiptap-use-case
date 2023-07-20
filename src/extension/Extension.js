import { Extension } from '@tiptap/core';

const CustomExtension = Extension.create({
  name: 'customExtension',

  addStorage() {
    return {
      awesomeness: 100 // можно получить через editor.storage.customExtension.awesomeness
    };
  },

  onUpdate() {
    this.storage.awesomeness += 1;
  }
});

export default CustomExtension;
