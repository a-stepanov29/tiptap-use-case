import Heading from '@tiptap/extension-heading';

const CustomHeading = Heading.extend({
  addOptions() {
    return {
      ...this.parent?.(), // берет все родительские атрибуты
      levels: [1, 2, 3]
    };
  }
});

export default CustomHeading;
