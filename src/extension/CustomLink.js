import Link from '@tiptap/extension-link';

const CustomLink = Link.extend({
  priority: 1000 // приоритет влияет на то какой тег будет оберткой над остальными и последовательность при инициализации
});

export default CustomLink;
