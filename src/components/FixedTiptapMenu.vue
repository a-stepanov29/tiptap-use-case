<template>
  <div v-if='editor' class='tiptap-menu'>

    <button
      class='tiptap-menu__button'
      :class="{'tiptap-menu__button_is-active': editor.isActive('bold')}"
      @click='editor.chain().focus().toggleBold().run()'
    >
      B
    </button>
    <button
      class='tiptap-menu__button'
      :class="{'tiptap-menu__button_is-active': editor.isActive({textAlign: 'left'})}"
      @click="editor.chain().focus().setTextAlign('left').run()"
    >
      Align left
    </button>
    <button
      class='tiptap-menu__button'
      :class="{'tiptap-menu__button_is-active': editor.isActive({textAlign: 'center'})}"
      @click="editor.chain().focus().setTextAlign('center').run()"
    >
      Align center
    </button>
    <button
      class='tiptap-menu__button'
      :class="{'tiptap-menu__button_is-active': editor.isActive({textAlign: 'right'})}"
      @click="editor.chain().focus().setTextAlign('right').run()"
    >
      Align right
    </button>
  </div>

</template>

<script>
export default {
  name: 'FixedTiptapMenu',
  props: {
    editor: Object
  }
};
</script>

<style lang='scss' scoped>
.tiptap-menu {
  display: flex;
  gap: 8px;

  &__button {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 10px 26px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 10px;

    &_is-active {
      background-color: #008CBA;
    }
  }
}
</style>
