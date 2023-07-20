<template>
  <FixedTiptapMenu :editor='editor' />
  <EditorContent class='element' :editor='editor' />
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-3';
import { StarterKit } from '@tiptap/starter-kit';
import Table from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableHeader from '@tiptap/extension-table-header';
import { TableCell } from '@tiptap/extension-table-cell';
import TextAlign from '@tiptap/extension-text-align';
import FixedTiptapMenu from './components/FixedTiptapMenu.vue';
import CustomBold from './extension/CustomBold.js';
import CustomBulletList from './extension/CustomBulletList.js';
import CustomLink from './extension/CustomLink.js';
import CustomHeading from './extension/CustomHeading.js';
import CustomExtension from './extension/Extension.js';
import CustomBlockquote from './extension/CustomBlockquote.js';
import CustomParagraph from './extension/CustomParagraph.js';
import CustomCodeBlock from './extension/CustomCodeBlock.js';
import Image from '@tiptap/extension-image';
import Custom from '@/extension/Custom.js';
import CustomTaskList from '@/extension/CustomTaskList.js';
import CustomTaskItem from '@/extension/CustomTaskItem.js';
import Test from '@/extension/test.js';
import TestItem from '@/extension/testItem.js';
import Placeholder from '@tiptap/extension-placeholder';

export default {
  components: {
    FixedTiptapMenu,
    EditorContent
  },

  props: {
    modelValue: {
      type: Object,
      default: {}
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
      // const isSame = this.editor.getHTML() === value;
      const isSame = JSON.stringify(this.editor.getJSON()) === JSON.stringify(value);
      if (isSame) return;
      this.editor.commands.setContent(value, false);
    }
  },
  mounted() {
    this.initEditorInstance();
  },
  methods: {
    initEditorInstance() {
      this.editor = new Editor({
        element: document.querySelector('.element'),
        attributes: {
          class: 'prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none' // передача классов элементу содержащему редактор
        },
        extensions: [ // расширения, можно взять уже имеющиеся ./node_modules/tiptap ...
          Document,
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
          CustomBold, // ... или сделать свой переназначив стандартный ...
          // ... или написать свой с нуля
          TextAlign.configure({
            types: ['heading', 'paragraph']
          }),
          CustomBulletList,
          CustomLink,
          CustomHeading,
          CustomExtension,
          CustomBlockquote,
          CustomParagraph,
          Table.configure({
            resizable: true
          }),
          TableRow,
          TableHeader,
          TableCell,
          CustomCodeBlock,
          Image,
          Custom,
          CustomTaskList,
          CustomTaskItem.configure({
            nested: true // разрешает делать подзадачи
          }),
          Test,
          TestItem,
          Placeholder.configure({
            placeholder: ({ node }) => {
              if (node.type.name === 'paragraph') {
                return 'Начните вводить текст';
              }
              return 'Placeholder';
            }
          })
        ],
        content: this.modelValue, // передать контент в редактор, в виде json или html, под капотом tiptap использует json
        autofocus: true, // при инициализации редактора курсор прыгнет в начальную строку
        editable: true, // если true то есть возможность редактировать содержимое
        injectCSS: false, // если false убирает весь изначальный css
        onUpdate: ({ editor }) => { // хук который отлавливает изменения, описание всех хуков: https://tiptap.dev/api/events
          this.$emit('update:modelValue', editor.getJSON()); // извлечь контент в видео json
          // this.$emit('update:modelValue', this.editor.getHTML()) // извлечь контент в видео html
        }
      });
    }
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
.task-item {
  display: flex;
  align-items: center;
  gap: 5px;
}

.ProseMirror {
  border-radius: 20px;
  border: 1px solid green;
  padding: 14px;
  margin-top: 20px;

  table {
    border-collapse: collapse;
    table-layout: fixed;
    width: 100%;
    margin: 0;
    overflow: hidden;

    td,
    th {
      min-width: 1em;
      border: 2px solid #ced4da;
      padding: 3px 5px;
      vertical-align: top;
      box-sizing: border-box;
      position: relative;

      > * {
        margin-bottom: 0;
      }
    }

    th {
      font-weight: bold;
      text-align: left;
      background-color: #f1f3f5;
    }

    .selectedCell:after {
      z-index: 2;
      position: absolute;
      content: "";
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: rgba(200, 200, 255, 0.4);
      pointer-events: none;
    }

    .column-resize-handle {
      position: absolute;
      right: -2px;
      top: 0;
      bottom: -2px;
      width: 4px;
      background-color: #adf;
      pointer-events: none;
    }

    p {
      margin: 0;
    }
  }
}
</style>
