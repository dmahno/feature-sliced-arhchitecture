# Проект

## Зависимости

1. Craco

### Архитектура проекта - feature-sliced

```
src/
    ├── app/                    # Layer: Приложение
    |                           #
    ├── assets/                 # Layer: Глобальные стили проекта, шрифты, переменные, миксины
    |                           #
    ├── processes/              # Layer: Процессы (опционально)
    |   ├── {some-process}/     #     Slice: (н-р процесс CartPayment)
    |   |   ├── lib/            #         Segment: Инфраструктурная-логика (helpers/utils)
    |   |   └── model/          #         Segment: Бизнес-логика
    |   ...                     #
    |                           #
    ├── pages/                  # Layer: Страницы
    |   ├── {some-page}/        #     Slice: (н-р страница ProfilePage)
    |   |   ├── lib/            #         Segment: Инфраструктурная-логика (helpers/utils)
    |   |   ├── model/          #         Segment: Бизнес-логика
    |   |   └── ui/             #         Segment: UI-логика
    |   ...                     #
    |                           #
    ├── widgets/                # Layer: Виджеты
    |   ├── {some-feature}/     #     Slice: (н-р виджет Header)
    |   |   ├── lib/            #         Segment: Инфраструктурная-логика (helpers/utils)
    |   |   ├── model/          #         Segment: Бизнес-логика
    |   |   └── ui/             #         Segment: UI-логика
    |   ...                     #
    |                           #
    ├── features/               # Layer: Фичи
    |   ├── {some-feature}/     #     Slice: (н-р фича AuthByPhone)
    |   |   ├── lib/            #         Segment: Инфраструктурная-логика (helpers/utils)
    |   |   ├── model/          #         Segment: Бизнес-логика
    |   |   └── ui/             #         Segment: UI-логика
    |   ...                     #
    |                           #
    ├── entities/               # Layer: Бизнес-сущности
    |   ├── {some-entity}/      #     Slice: (н-р сущность User)
    |   |   ├── lib/            #         Segment: Инфраструктурная-логика (helpers/utils)
    |   |   ├── model/          #         Segment: Бизнес-логика
    |   |   └── ui/             #         Segment: UI-логика
    |   ...                     #
    |                           #
    ├── shared/                 # Layer: Переиспользуемые ресурсы
    |   ├── api/                #         Segment: Логика запросов к API
    |   ├── config/             #         Segment: Конфигурация приложения
    |   ├── lib/                #         Segment: Инфраструктурная-логика приложения
    |   └── ui/                 #         Segment: UIKit приложения
    |   ...                     #
    |                           #
    └── index.tsx/              #
```

### Типы и структура коммитов

- feat — новая функциональность
- fix — исправление ошибок и дефектов
- docs — изменение документации
- build — изменения касающиеся процесса сборки, CI или других сопутствующих инструментов (например: webpack, npm scripts, ...)
- style — изменения, которые не меняют смысла кода (отступы, форматирование, пропущеные запятые, ...)
- test — добавление новых тестов или исправление существующих
