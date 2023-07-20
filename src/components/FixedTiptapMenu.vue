<template>
  <div v-if='editor' class='tiptap-menu'>
    <button
      class='tiptap-menu__button'
      :class="{'tiptap-menu__button_is-active': editor.isActive({textAlign: 'right'})}"
      @click='editor.commands.toggleHeading({
        level: 1
      })'
    >
      H
    </button>
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
    <button
      class='tiptap-menu__button'
      :class="{'tiptap-menu__button_is-active': editor.isActive('bulletList')}"
      @click='editor.chain().focus().toggleBulletList().run()'
    >
      Маркированный список
    </button>
    <button
      class='tiptap-menu__button'
      :class="{'tiptap-menu__button_is-active': editor.isActive('orderedList')}"
      @click='editor.chain().focus().toggleOrderedList().run()'
    >
      Нумерованный список
    </button>
    <button
      class='tiptap-menu__button'
      :class="{'tiptap-menu__button_is-active': editor.isActive({textAlign: 'right'})}"
      @click='editor.commands.setContent(`<p>Вставленный текст</p>`)'
    >
      Вставить контент
    </button>
    <button
      class='tiptap-menu__button'
      :class="{'tiptap-menu__button_is-active': editor.isActive({textAlign: 'right'})}"
      @click='editor.commands.clearContent()'
    >
      Очистить
    </button>
    <button
      class='tiptap-menu__button'
      :class="{'tiptap-menu__button_is-active': editor.isActive({textAlign: 'right'})}"
      @click='editor.commands.setLink({href: "https://ya.ru"})'
    >
      Ссылка
    </button>
    <button
      class='tiptap-menu__button'
      :class="{'tiptap-menu__button_is-active': editor.isActive({textAlign: 'right'})}"
      @click='editor.commands.toggleBlockquote()'
    >
      Цитата
    </button>
    <button
      class='tiptap-menu__button'
      :class="{'tiptap-menu__button_is-active': editor.isActive({textAlign: 'right'})}"
      @click='editor.commands.insertTable()'
    >
      Таблица
    </button>
    <button
      class='tiptap-menu__button'
      :class="{'tiptap-menu__button_is-active': editor.isActive('codeBlock')}"
      @click='editor.commands.toggleCodeBlock()'
    >
      Блок кода
    </button>
    <button
      class='tiptap-menu__button'
      :class="{'tiptap-menu__button_is-active': editor.isActive('paragraph')}"
      @click='editor.commands.setParagraph()'
    >
      Параграф
    </button>
    <button
      class='tiptap-menu__button'
      :class="{'tiptap-menu__button_is-active': editor.isActive('image')}"
      @click="editor.commands.setImage({ src: 'https://img.freepik.com/free-photo/a-cupcake-with-a-strawberry-on-top-and-a-strawberry-on-the-top_1340-35087.jpg' })"
    >
      Изображение
    </button>
    <button
      class='tiptap-menu__button'
      :class="{'tiptap-menu__button_is-active': editor.isActive('custom')}"
      @click='editor.commands.setCustom()'
    >
      Custom
    </button>
    <button
      class='tiptap-menu__button'
      :class="{'tiptap-menu__button_is-active': editor.isActive('taskList')}"
      @click='editor.chain().focus().toggleTaskList().run()'
    >
      Чек-лист
    </button>
    <button
      class='tiptap-menu__button'
      :class="{'tiptap-menu__button_is-active': editor.isActive('taskList')}"
      @click='editor.chain().focus().splitListItem("taskItem").run()'
      :disabled="!editor.can().splitListItem('taskItem')"
    >
      <!--  splitListItem создает таску ниже тоже на котором фокус    -->
      Добавить пункт
    </button>
    <button
      class='tiptap-menu__button'
      :class="{'tiptap-menu__button_is-active': editor.isActive('taskList')}"
      :disabled="!editor.can().liftListItem('taskItem')"
      @click='editor.chain().focus().liftListItem("taskItem").run()'
    >
      <!--  liftListItem делает из пункта обычный параграф    -->
      Снять пункт
    </button>
    <button
      class='tiptap-menu__button'
      :class="{'tiptap-menu__button_is-active': editor.isActive('test')}"
      @click='editor.chain().focus().insertTest().run()'
    >
      Тест
    </button>
    <button
      class='tiptap-menu__button'
      :class="{'tiptap-menu__button_is-active': editor.isActive('test')}"
      @click='editor.chain().focus().addTestVariant().run()'
    >
      Добавить вариант
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
  flex-wrap: wrap;

  &__button {
    cursor: pointer;
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
