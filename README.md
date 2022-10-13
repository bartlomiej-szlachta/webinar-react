# React Developer Portfolio

Aplikacja webowa utworzona w React na potrzeby webinaru na JobIcon.

### Cel szkolenia

Zaimplementowanie aplikacji spełniającej funkcję portfolio programisty, przykład: https://dev-portfolio-react-training.herokuapp.com/.

### Stos technologiczny (w finalnej aplikacji)

- [React](https://pl.reactjs.org/)
- [Bootstrap](https://getbootstrap.com/)
- JavaScript ES6
- HTML5
- CSS

### Przygotowanie środowiska deweloperskiego

1. Instalacja narzędzia [npm](https://www.npmjs.com/), najprościej poprzez [node.js](https://nodejs.org/en/download/).
2. (Dla Windowsa) Dodanie *npm* do zmiennej środowiskowej `PATH` (domyślnie jest w katalogu `C:\Users\SQ12345\AppData\Roaming\npm`).
3. W folderze projektu wykonanie komendy `npm install`, która pobierze pliki wykorzystywanych bibliotek (w tym Reacta) do katalogu `node_modules`.
4. W folderze projektu wykonanie komendy `npm start`, która uruchomi lokalny serwer deweloperski obsługujący hot-reloading.

### Przebieg szkolenia

1. Krótkie wprowadzenie teoretyczne
2. Omówienie działania docelowej aplikacji
3. Uruchomienie bazowego projektu
4. Omówienie bazowego projektu
5. Nauka poszczególnych aspektów Reacta podczas implementacji dodatkowych funkcjonalności do bazowego projektu w ramach wymienionych zadań. Rozwiązanie każdego z zadań będzie się znajdować na osobnej gałęzi o nazwie np `tr1-task5`.
   - Zadanie 1: Trzeba utworzyć nowy komponent o nazwie np 'ProjectsList', wyświetlający nagłówek 'Projekty' i renderować go w komponencie 'App'.
   - Zadanie 2: Imię, nazwisko i stanowisko osoby trzeba przekazać do komponentu 'Header' przez 'propsy'.
   - Zadanie 3: Trzeba zaimplementować ładowanie listy projektów przez zapytanie API, wykorzystując do tego stan w komponencie 'ProjectsList'. Na czas wykonywania zapytania trzeba wyświetlić animację ładowania. Wyświetlenie projektów będzie w ramach następnego zadania.
   - Zadanie 4: Trzeba wyświetlać załadowane wcześniej dane o projektach.
