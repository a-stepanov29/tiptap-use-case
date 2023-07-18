import Bold from '@tiptap/extension-bold';

const CustomBold = Bold.extend({ // переназначает разметку для данного расширения
  renderHTML({ HTMLAttributes }) {
    // Original:
    // return ['strong', HTMLAttributes, 0]
    return ['b', HTMLAttributes, 0];
  }
});

export default CustomBold;
