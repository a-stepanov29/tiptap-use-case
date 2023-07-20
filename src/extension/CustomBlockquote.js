import Blockquote from '@tiptap/extension-blockquote';

const CustomBlockquote = Blockquote.extend({
  // * значит что может быть от можно использовать paragraph >= 0 кол-во контента типа paragraph
  // + paragraph >= 1
  name: 'customBlockquote',
  content: 'paragraph*'
});

export default CustomBlockquote;
