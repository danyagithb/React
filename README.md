# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```


ДЗ: Взяти приклад, який був на занятті, і розписати, що робить кожен рядок коду.

! Рекомендація: робити опис коду разом із відео по його ходу.
В ідеалі потім відкотити зміни і пройтись по коду ще раз самостійно (без відео).


1) Сначало в файл package.json добавляем библиотеки: axios, react-router-dom, react-hook-form и @hookform/resolvers
(в этом видео они не понадобились, я работал далее с ними, сделав branch). 

2) Создаем директорию models и файл IUserWithTokens.ts в ней. 
Далее, используя альтернативу json2ts (не работает), создаю интерфейс IUserWithTokens.
Также создаю файл ITokenPair.ts и интерфейс ITokenPair в ней, где содержаться accessToken и refreshToken.
Тогда я решил, что раз повторяются accessToken и refreshToken в обеих интерфейсах, то просто сделаю "interface IUserWithTokens extends ITokenPair".
Затем мы создаем файл IProduct.ts и интерфейс для нее (этот массив с обьектами мы будем получать с dummyjson используя токен)

3) Создаем директорию routes и в ней файл routes.ts (случайно создал tsx) и создаем роутер в нем. Внутрь передаем массив с путями.
Начальная страница с element: MainLayout. Для этого я создал директорию layouts и файл в ней.
Внутри этого файла компонент, в который передал компонент Menu и Outlet (ведь это родительский путь и далее в нем будут children).
Будут 3 children, а именно HomePage с path: ''. это можно заменить на index:true.
Второй это LoginPage с path: 'login' и третий это AuthResourcesPage с path: '/auth/resources'.
Вначале поставили '/' ведь это будет независимый путь. Для всех их я создал файлы и поместил в директорию pages.
Внутри этих файлов подключил файл-компонент с соответствующим названием. Компоненты поместил в директорию components
В файле main.tsx подключил routes используя RouterProvider.

4) В компоненте Menu создал ul с li и тегом link внутри li, нажимая на который, будем переходить на нужную страницу.
Внутрь to={} я передаю название маршрута и далее (не в to={}) название link.

5) В LoginComponent мы не создаем форму, куда должны вводить username и password (в своей branch я ее создал с валидацией),
а делаем так, чтобы функция login срабатывала при переходе на эту страницу.
Для этого пишем useEffect, который воспроизводит действие функции login(),
внутрь которой передаем обьект с username, password и expiresInMins (сколько будет действителен токен) и их значения.

6) Создаю директорию services и файл в ней. С помощью axios создаю baseUrl с url dummyjson + /auth
(потому что все запросы будут делаться именно через нее) и headers: {}. называю переменную axiosInstanse. 
Создаю функция login. она будет асинхронной, потому что она выполняет конкретную операцию-запрос к серверу, а именно post.
Эта функция login принимает username, password и expiresInMins. Создаем также для них type и типизируем. 
Создаем запрос post в функции login, а перед этим прописываем await, ведь функция асинхронная. в <> прописываем, что мы будем получать. Указываем типизацию.
А в () прописываем сначало url, куда эти данные отправляются и через запятую информацию, которую передаем, а именно username, password, expiresInMins.
Прописываем для всего этого запроса переменную и деструктуризируем ее, написав {data}. далее через : переименовываем, называя userWithTokens.
Сохраняем эти данные в localStorage, назвав ячейку user и передав вторым значением через запятую userWithTokens
(через JSON.stringify, ведь получаем обьект, а нужно его перевоплотить в string).

Также, раз функция login асинхронная, то она возвращает Promise, который типизируем как IUserWithTokens
и далее через return возвращаем userWithToken для дальнейшей с ним работы, если такова имеется

7) В AuthResourcesComponent пишем useEffect, внутри которой будет функция useAuthProducts, которая должна подгрузить products.
В api.service создаем эту функцию. Она также асинхронная и возвращает промис IProduct[].
Этот запрос будет get. Внутри () прописываем '/products', откуда получим нужную информация. 
Этим запросом мы получаем обьект с limit, total, skip и products.
Создаю интерфейс IProductsBaseModel, добавляю его в папку models. И далее типизирую запрос get в <>. 
Для этого запроса создаем conts и получаем {data: {products}}, продукты, и возвращаем их через return. 

8) Далее в файле AuthResourcesComponent прописываем после скобок функции useAuthProducts .then. Получаем products и выводим их через console.log()
Но она не выведится, потому что нужен токен. В api.service и используем интерсептор на request (нужно добавить токен перед отправкой),
который будет перехватывать запросы именно GET, ведь только для них нам нужен токен, чтобы получить с /auth инфу.
В скобках после request.use пишем requestObject (что вернет интерсептор) и далее внутри этой функции пишем.
Если от requestObject.method будет get, то в наш requestObject с разделом headers добавляется хеадер Authorisation,
который будет 'Bearer + наш токен', который в localStorage. 

9) Чтобы получить токен, мы вытягиваем его с localStorage, парсуем (перевоплащаем в обьект) и через точку получаем accessToken.
Но выходит ошибка, ведь JSON.parse не типизует. 
Поэтому для этого создаем доп. функцию, которая решит это. Называем retriveLocalStorage. Внутри его будет дженерик.
В скобки функции пишем key (по какому ключу будем искать) и типизируем его как string.
Далее внутри функции создаем const object, который будет равен тому, что мы получаем с localStorage по ключy 'key',
либо равен null, если ключа не будет существовать, который мы введем. Поэтому для этой const пишем,
что будем получать localStorage.getItem(key) либо ничего string типом, то есть так - '', потому что нужно, чтобы что-то прилетело, а не null
Далее делаем проверку: в случае, если object не существует, то есть если мы получаем пустую string (а это false),
то будем возвращать пустой обьект, строго типизированный как дженерик. 
В ином случае создаем переменную parse и парсуем информацию, которую получили из localStorage.
И возвращаем эту переменную строго типизированную как дженерик.

10) Далее этот retriveLocalStorage используем в интерпритаторе там, где пишем 'Bearer + ' и через точку получаем accessToken,
ведь парсанули обьект. Пишем в скобках, что хочем получить с 'user' - это и есть наш key. В <> передаем, что это наш IUserWithTokens - дженерик.
Эту функцию retriveLocalStorage перемещаем в файл helpers.ts. 

11) Более минуты пройдет и наш токен умрет. Поэтому нам нужен refreshToken. В сервисах создаем функцию refresh.
Раз это запрос, то функция будет асинхронной. Мы делаем с помощью await и axiosInstance post запрос на url '/refresh'.
Будем получать пару токенов, поэтому в <> типизируем заранее подготовленным интерфейсом ITokenPair.
Раз это post запрос, то также передаем рефреш токен и expiresInMins (сколько будет длится новый токен).
Чтобы передать значение рефреш токена, создаем переменную iUserWithTokens. Ее значение это user с localStorage.
То есть также используем retriveLocalStorage и передаем в скобках 'user' (получаем инфу под ячейкой user).
Далее передаем значение рефреш токена используя нашу переменную iUserWithTokens и .refreshToken. 
Для запроса делаем переменную и получаем информация, откуда достаем через деструктуризацию новые refreshToken и accessToken. 
И далее обращаемся к iUserWithTokens.refreshToken и внедряем новый рефреш токен. Аналогично так далаем и с accessToken.
Далее, чтобы новая инфа сохранилась, добавляем ее в localStorage под ячейку 'user',
передавая через запятую обновленный iUserWithTokens (делаем также JSON.stringify())

12) Чтобы все это работало в полной мере переходим в компонент AuthResourcesComponent и к 
    loadAuthProducts().then(products => {
    console.log(products);
    }) 
пишем .catch. В случае если случится ошибка, первое - можно вывести ее в консоль, второе - вызываем функицю refresh и
еще раз просим, чтобы сработала функция, которая загрузит products.
Делаем ей return инлайн конструкцией и через .then просим вывести value в консоль
   
