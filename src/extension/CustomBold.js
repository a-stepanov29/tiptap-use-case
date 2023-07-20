import Bold from '@tiptap/extension-bold';

const CustomBold = Bold.extend({ // переназначает разметку для данного расширения
  renderHTML({ HTMLAttributes }) {
    // Original:
    // return ['strong', HTMLAttributes, 0]
    // 0: имя тега
    // 1: передаем все атрибуты данного элемента(может быть массивом - пример ниже)
    // 2: 0 используется для указания того, куда следует вставить содержимое.
    return ['b', HTMLAttributes, 0];
    // return ['pre', ['code', HTMLAttributes, 0]]
  },
  parseHTML() {
    return [
      {
        tag: 'strong'
      },
      {
        tag: 'b',
        getAttrs: node => node.style.fontWeight !== 'normal' && null
      }
      // getAttr: функция которая проверяет соответствие атрибутов если вернется false значит не соотвтетствует
      //     {
      //       style: 'font-weight',
      //       getAttrs: value => /^(bold(er)?|[5-9]\d{2,})$/.test(value as string) && null,
      //      },
    ];
  }
});

export default CustomBold;
