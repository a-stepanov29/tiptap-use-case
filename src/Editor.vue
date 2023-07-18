<template>
  <FixedTiptapMenu :editor='editor' />
  <EditorContent class='element' :editor='editor' />
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-3';
import { StarterKit } from '@tiptap/starter-kit';
import FixedTiptapMenu from './components/FixedTiptapMenu.vue';
// import { EditorState } from '@tiptap/pm/state';
import TextAlign from '@tiptap/extension-text-align';
import CustomBold from './extension/CustomBold.js';

export default {
  components: {
    FixedTiptapMenu,
    EditorContent
  },

  props: {
    modelValue: {
      type: String,
      default: ''
    }
  },

  emits: ['update:modelValue'],

  data() {
    return {
      editor: null
    };
  },

  watch: {
    modelValue(value) {
      // HTML
      // const isSame = this.editor.getHTML() === value;

      // JSON
      const isSame = JSON.stringify(this.editor.getJSON()) === JSON.stringify(value);

      if (isSame) {
        return;
      }

      this.editor.commands.setContent(value, false);
    }
  },
  mounted() {
    this.editor = new Editor({
      element: document.querySelector('.element'),
      attributes: {
        class: 'prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none' // передача классов элементу содержащему редактор
      },
      extensions: [
        StarterKit.configure({
          heading: {
            levels: [1, 2, 3]
          },
          paragraph: {
            HTMLAttributes: {
              class: 'paragraph' // кастомные классы удобно с tailwind
            }
          },
          strike: false, // отключение екстеншена из пакета
          italic: false
        }),
        CustomBold,
        TextAlign.configure({
          types: ['heading', 'paragraph']
        })
      ],
      content: this.modelValue,
      autofocus: true,
      editable: true,
      injectCSS: false,
      onUpdate: () => {
        // HTML
        this.$emit('update:modelValue', this.editor.getJSON());

        // JSON
        // this.$emit('update:modelValue', this.editor.getJSON())
      }
    });
  },

  beforeUnmount() {
    this.editor.destroy();
  }
};
</script>

<style lang='scss' scoped>
.paragraph {
  color: red;
}
</style>

<style lang='scss'>
.ProseMirror {
  border-radius: 20px;
  border: 1px solid green;
  padding: 14px;
  margin-top: 20px;
}
</style>
