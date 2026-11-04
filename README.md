# Архетип стиля

Сайт парикмахерской на Next.js, React, Tailwind CSS и Framer Motion.

## Публикация на GitHub Pages

1. Загрузите файлы в репозиторий `F1ROez/arhetip-style`, ветка `main`.
2. Откройте Settings → Pages → Build and deployment → Source: GitHub Actions.
3. Откройте Actions → Publish website → Run workflow.
4. Дождитесь успешного завершения build и deploy. GitHub покажет ссылку на сайт.

Настройка уже учитывает путь `/arhetip-style`. При изменении имени репозитория поменяйте `NEXT_PUBLIC_BASE_PATH` и `NEXT_PUBLIC_SITE_URL` в `.github/workflows/pages.yml`.

## Разработка

Установите Node.js 22, выполните `npm install`, затем `npm run dev`.

Статическая сборка: `npm run build`. Результат — папка `out/`. Для GitHub Pages используются переменные окружения из workflow. Для обычного хостинга с корневым доменом не задавайте `NEXT_PUBLIC_BASE_PATH`, а в `NEXT_PUBLIC_SITE_URL` укажите его адрес.

## Источники и ограничения

Ссылки записи и контакты взяты с сайта arhetype-st.ru, фотографии — из карточек 2ГИС. Цены и условия бонусной программы перед коммерческим запуском должен подтвердить владелец бизнеса. Карта зависит от доступности внешнего сервиса 2ГИС: публикация на другом хостинге сама по себе не гарантирует исправление виджета.

Архив не содержит ключей, токенов, настроек доступа ChatGPT и серверного окружения.
