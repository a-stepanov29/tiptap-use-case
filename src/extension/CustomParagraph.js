import Paragraph from '@tiptap/extension-paragraph';

const CustomParagraph = Paragraph.extend({
  draggable: true, // дока по схеме https://prosemirror.net/docs/ref/#model.SchemaSpec
  onCreate() {
    // Редактор готов.
  },
  onUpdate() {
    // Контент изменился.
  },
  onSelectionUpdate({ editor }) {
    // Выделение изменилось.
  },
  onTransaction({ transaction }) {
    // Состояние редактора изменилось.
  },
  onFocus({ event }) {
    // Редактор сфокусирован.
  },
  onBlur({ event }) {
    // Фокусировки больше нет.
  },
  onDestroy() {
    // Редактор eуничтожен/выключен
  },
  addAttributes() {
    // return {
    //   color: {
    //     default: 'pink' // Result: <p color="pink">Example Text</p>
    //   }
    // };
    // return {
    //   color: {
    //     default: 'red',
    //     renderHTML: attributes => {
    //       return {
    //         style: `color: ${attributes.color}`
    //       };
    //     }
    //     // Result: <p style="color: pink">Example Text</p>
    //   }
    // };
    return {
      color: {
        default: null,
        // rendered: false, // отключить отрисовку атрибута
        // находим CustomParagraph с атрибутом data-color <p data-color="pink" style="color: pink">Example Text</p>
        parseHTML: element => element.getAttribute('data-color'),
        // рендерим найденным CustomParagraph атрибут style с теми значениями атрибута которые лежали в data-color
        renderHTML: (attributes) => {
          return {
            'data-color': attributes.color,
            style: `color: ${attributes.color}`
          };
        }
      }
    };
  },
  addCommands() {
    return {
      setParagraph: () => ({ commands }) => {
        console.log('ee');

        return commands.setNode('paragraph');
      }
    };
  }
});
// Result:

export default CustomParagraph;
