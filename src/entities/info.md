```
   ├── entities/                         # Layer: Бизнес-сущности
    |   ├── {some-entity}/               #     Slice: (н-р сущность User)
    |   |   ├── lib/                     #        Инфраструктурная-логика (helpers/utils)
    |   |   ├── model/                   #         :Бизнес-логика
    |   |        ├── state               #         :actions, initialState
    |   |        ├── selectors           #         :селекторы для стора
    |   |        ├── thunks              #         :другие side-effect (изменение (запись) объекта, доступ (чтение или запись) к объекту)
    |   |        ├── index.ts            #         :Экспорт
    |   |   └── ui                       #         :UI-логика
    index.ts
```
