// 1. Да въведа текст 
// * исполдзваме функцията prompt за да вземем текст от потребителя

// * искам да си създам място което да ми съдържа резултата 
// от отговора на въпроса какъв цвят харесвам. 
// ще си създам променлива (variable) -- контейнер за информация. 

// Как да си направим променлива -- нова количка за данни
// Ще си направя нова променлива която ще съдържа поздравително съобщение
var welcomeMessage = undefined; // декларация на променлива
alert(welcomeMessage);

// Как да сложа нещо в тази променлива
// X + 2 = 4
// X = 4 - 2
// X = 2
// Използваме знака (=) за да сложим стойност в променлива
welcomeMessage = "Добре си ми дошъл в цветовия конфигуратор"; // инициализация

// Искам да изведа съдържанието на променливата message на екрана
// пример за неформатиран запис - работи като пушка
alert   ( welcomeMessage );

// присвояване на нова стойност
welcomeMessage = "Имаш шанс да избереш любимия си цвят за стаята на мечтите ти";

alert(welcomeMessage);

// Ще си създам променлива която директно ще съдържа своята информация
var questionMessage = "Какъв е любими ти цвят ?"; // декларация + инициализация

// 2. Да взема този текст             
// * искам да вземам текста в самата програма 
var color;
color = prompt("Какъв е любими ти цвят ?"); // функцията връща данните си, на реда само трябва да ги вземем

alert("Вие направихте следния избор");
alert(color);


// 3. Да го предам на функцията alert


// Функция - извежда на екрана прозорец със текст
// alert("Това е моята първа програма");

// Функция - извежда текст имаме възможност да 
// кажем да (OK) или не (Cance)
// confirm variable result
// camileCase -> confirmVariableResult
// PascalCase -> ConfirmVariableResult
// snakeCase  -> confirm_variable_result
// kebapCase  -> confirm-variable-result
var confirmVariableResult = confirm("Потвърдете избора си");
alert(confirmVariableResult);

// Всички примитивни стойности които можем да съхраняваме 
// представени с литерали
var numericVariable = 1; // 2, 5, 5.5, 88  // числа 
var stringVariable  = "На колко си години ?" // 'Как се казваш, бебче ?' 
var booleanVariable = true // false // булеви стойности

// Искам да ми се изведене съобшението базирано на шаблона
// Вие потвърдихе покупката на цвят {цвят}, приятно боядисване

// Нека видим как се лепи текст (конкатенация)
// ТЕКСТ1 + ТЕКСТ2 + ТЕКСТ3 <=> ТЕКСТ1ТЕКСТ2ТЕКСТ3
var finalConfirmMessage = "Вие потвърдихе покупката на цвят " + color + ", приятно боядисване";
alert(finalConfirmMessage);

// x = 10 + 25
var sum = 10 + 25;