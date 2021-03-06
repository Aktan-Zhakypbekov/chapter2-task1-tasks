/*ЗАДАЧА #1
for (var i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i);
    })
};
Что выведет консоль и почему?*/

/*
Ответ:

Консоль выведет 10 десять раз, а не 0 1 2 3 4 5 6 7 8 9.
Проблема заключается в ключевом слове var и концепции closure. 
Понятие scope гласит так -  у каждой функции есть своя среда и значения внутри этой функции находятся в среде этой функции. 
Эти значения имеют доступ ко всем значениям которые
находятся вне среды содержащей функции, то есть за пределами среды этой функции (scope). 
Но, среды или функции которые находятся за пределами нашей изначальной функции или те функции которые содержат
нашу функцию не имеют доступа к значениям внутри нашей функции. То есть, функция это как машина с тонированными окнами - 
мы можем видеть что есть снаружи машины, но люди снаружи машины не могут видеть что внутри машины.
НО, иногда происходит так, что среды (scopeы) снаружи нашей функции могут заполучить доступ к значением внутри нашей функции.
Аналогично, некоторые люди снаружи нашей машины получают способность видеть внутрь машины сквозь тонированные окна 
(бредовая аналогия конечно). 
И это происходит благодаря такой концепции как closure. Понятие closure звучит так - все функции запоминают ту среду 
в которой они были созданы. Они не запоминают переменные и значения как таковые а только имеют некую секретную нить 
благодаря которой они заполучают доступ к этой среде - то есть они берут только самое последнее финальное значение 
которое есть в среде. В нашем случае когда мы нажимаем enter после того как написали код, console.log внутри setTimeout
берет только самое последнее занчение i. Это происходит по вине ключевого слово var которое является function scoped.
То есть, сейчас i является глобальным переменным и console.log использует значение этого глобального переменного.
Чтобы исправить проблему нужно всего лишь использовать let вместо var так как let является block scoped, то есть теперь 
i не будет существовать в глобальной среде - оно существовало только внутри блока for(;;). 

Решение:
for (let i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i);
    })
}; 

P.S. Помимо этого, этот код еще возвращает значение от функции setTimeout которое мы можем положить внутри clearTimeout.
И еще, так как мы не дали второй аргумент для setTimeout, оно выполнится сразу*/
