## Типы group в схеме расширения

    block list - список ul является блочным
    block - блочный тег div

## Типы Content в схеме расширения

Каждый из нижеприведенных типов может иметь одну из этих приставок

        * - 0 или более элементов
        + - 1 или более элементов

пример:

    block* - это значит что контент может быть 
    только блочным и количество блоково может быть 0 или более

**список типов:**

    block
    paragraph
    inline
    расширение

### Словарь

**Schema** - Настраивает структуру, которую может иметь ваш контент.

**Document** - Актуальный контент в вашем редакторе.

**State** - Все, чтобы описать текущий контент и выбор вашего редактора.

**Transaction** - Изменение состояния (updated selection, content, …)

**Extension** - Регистрирует новую функциональность.

**Node** - Тип содержимого, например заголовок или абзац.

**Mark** - Может применяться к node, например, для встроенного форматирования.

**Command** - Выполните действие внутри редактора, которое каким-то образом изменит состояние.

**Decoration** - Стилизация поверх документа, например, для выделения ошибок.
