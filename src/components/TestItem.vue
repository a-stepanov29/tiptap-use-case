<template>
  <node-view-wrapper
    class='test-item'
    :class="{
      'test-item_right-answer': node.attrs.correctness === true,
      'test-item_error-answer': node.attrs.correctness === false,
    }"
  >
    <div class='test-item__left'>
      <div v-if='editor.isEditable' :contenteditable='false' />
      <div class='test-item__checkbox' :class='{"test-item__checkbox_active": node.attrs.isSelected}'
           @click='changeAnswer'></div>
    </div>
    <div class='test-item__content'>
      <NodeViewContent></NodeViewContent>
    </div>
    <div v-if='editor.isEditable' class='test-item__right' @click='deleteNode'>
      Delete
    </div>
  </node-view-wrapper>
</template>

<script>
import { NodeViewWrapper, NodeViewContent } from '@tiptap/vue-3';

export default {
  name: 'TestItem',
  components: { NodeViewContent, NodeViewWrapper },
  props: {
    editor: {
      type: Object
    },
    node: {
      type: Object
    },
    decorations: {
      type: Array
    },
    selected: {
      type: Boolean
    },
    extension: {
      type: Object
    },
    getPos: {
      type: Function
    },
    updateAttributes: {
      type: Function
    },
    deleteNode: {
      type: Function
    }
  },
  methods: {
    changeAnswer() {
      const answer = !this.node.attrs.isSelected;
      this.updateAttributes({ isSelected: answer, isRight: answer });
    }
  }
};
</script>

<style lang='scss' scoped>
.test-item {
  min-height: 30px;
  margin: 10px auto;
  display: flex;
  gap: 12px;
  padding: 10px 24px;
  background: #FFFFFF;
  border-radius: 16px;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 18px;

  &__content {
    flex: 2;
  }

  &__right {
    cursor: pointer;
  }

  &__checkbox {
    background: white;
    border: 2px solid #999EAD;
    box-sizing: border-box;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 20px;
    height: 20px;
    position: relative;

    &_active {
      border: 2px solid #27C25B;
      background: #27C25B;

      &:before {
        content: '';
        background: #aaddff;
      }
    }
  }

  &__left {
    display: flex;
    gap: 12px;
    height: 16px;
    align-items: center;
  }

  &_right-answer {
    background: #E5FFEE;
  }

  &_error-answer {
    background: #FFEBF1;
  }
}

</style>
