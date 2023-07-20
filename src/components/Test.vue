<template>
  <NodeViewWrapper class='test'>
    <!--  чтобы представить блок NodeViewContent В виде определенного тега нужно использовать директиву as  -->
    <button :contenteditable='false' class='button button_success button_small' @click='addVariant'>Добавить вариант
    </button>
    <NodeViewContent as='div' />
    <button :contenteditable='false' class='button button_primary button_small' @click='checkAnswers'>Проверить</button>
  </NodeViewWrapper>
</template>

<script>
import { NodeViewWrapper, NodeViewContent } from '@tiptap/vue-3';

export default {
  name: 'Test',
  components: { NodeViewContent, NodeViewWrapper },
  props: {
    editor: {
      type: Object
    }, // Экземпляр редактора.
    node: {
      type: Object,
      required: true
    }, // Доступ к текущему узлу.
    decorations: {
      type: Array
    }, // Массив декораторов.
    selected: {
      type: Boolean
    }, // Значение true, если в текущем представлении узла есть NodeSelection
    extension: {
      type: Object
    }, // Доступ к расширению узла, например, для получения опций.
    getPos: {
      type: Function
    }, // Получить позицию документа текущего узла.
    updateAttributes: {
      type: Function,
      required: true
    }, // Обновите атрибуты текущего узла.
    deleteNode: {
      type: Function
    } // Удалить текущий узел.
  },
  mounted() {
    console.log('eee');
  },
  methods: {
    addVariant() {
      const from = this.getPos();
      const to = from + this.node.nodeSize;
      this.editor.state.doc.descendants((node, pos, parent, index) => { // пробежать циклом по потомкам
        if (pos < from || pos > to) return;
        if (node.type.name === 'test') {
          this.editor.commands.insertContentAt(pos + 1, {
            'type': 'testItem',
            'content': [
              {
                'type': 'paragraph'
              }
            ]
          });
        }
      });
    },
    checkAnswers() {
      const from = this.getPos();
      const to = from + this.node.nodeSize;
      this.editor.state.doc.descendants((node, pos, parent, index) => { // пробежать циклом по потомкам
        if (pos < from || pos > to) return;
        if (node.type.name === 'testItem') {
          this.editor.view.dispatch(this.editor.view.state.tr.setNodeMarkup(pos, undefined, {
            ...node.attrs,
            correctness: node.attrs.isRight
          }));
        }
      });
    }
  }
};
</script>

<style lang='scss' scoped>
button {
  border: none;
  outline: none;
}

.button {
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
  color: white;
  width: 100%;
  border-radius: 10px;

  &_primary {
    background: #4507ca;
  }

  &_success {
    background: rgba(0, 128, 0, 0.91);
  }

  &_small {
    min-height: 40px;
    font-size: 16px;
  }
}

.test {
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px 20px;


}
</style>
