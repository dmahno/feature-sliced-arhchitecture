```
   ├── entities/                         # Layer: Бизнес-сущности
    |   ├── {some-entity}/               #     Slice: (н-р сущность User)
    |   |   ├── lib/                     #        Segment: Инфраструктурная-логика (helpers/utils)
    |   |        ├── helpers
    |   |        ├── utils
    |   |   ├── model/                   #         Segment: Бизнес-логика
    |   |        ├── actions
    |   |        ├── selectors 
    |   |        ├── constants          
    |   |   └── ui/ ~components          #         Segment: UI-логика
```
