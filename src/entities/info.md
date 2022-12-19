```
   ├── entities/                         # Layer: Бизнес-сущности
    |   ├── {some-entity}/               #     Slice: (н-р сущность User)
    |   |   ├── lib/                     #        Segment: Инфраструктурная-логика (helpers/utils)
    |   |   ├── model/                   #         Segment: Бизнес-логика
    |   |        ├── state               #         Segment: actions, initialState
    |   |        ├── selectors           #         Segment: селекторы для стора
    |   |        ├── thunks              #         Segment: другие side-effect (изменение (запись) объекта, доступ (чтение или запись) к объекту)
    |   |   └── ui                       #         Segment: UI-логика
    index.ts
```
