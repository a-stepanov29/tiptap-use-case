import { Extension } from '@tiptap/core';

const CustomTextAlign = Extension.create({
  addGlobalAttributes() {
    return [
      {
        // text align будет работать для данных расширений
        types: [
          'heading',
          'paragraph'
        ],
        attributes: {
          textAlign: {
            default: 'left',
            renderHTML: attributes => ({
              style: `text-align: ${attributes.textAlign}`
            }),
            parseHTML: element => element.style.textAlign || 'left'
          }
        }
      }
    ];
  }
});


export default {
  CustomTextAlign
};
