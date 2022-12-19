```
   ├── entities/                         # Layer: Бизнес-сущности
    |   ├── {some-entity}/               #     Slice: (н-р сущность User)
    |   |   ├── lib/                     #        Segment: Инфраструктурная-логика (helpers/utils)
    |   |   ├── model/                   #         Segment: Бизнес-логика
    |   |        ├── state               #         Segment: Бизнес-логика
    |   |        ├── selectors 
    |   |        ├── thunks              #         Segment: side-effect
    |   |   └── ui                       #         Segment: UI-логика
    index.ts
```
