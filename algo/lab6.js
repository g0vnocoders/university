/*
    Роботу виконав Вітязь Денис (116-1)
    Варіант 3
*/

/*
3. Поле шахівниці визначається парою натуральних чисел, кожне з
яких не перевершує восьми: перше число – номер вертикалі (при рахунку
зліва направо), друге – номер горизонталі (при рахунку від низу до верху).
Дано натуральні числа k, l, m, n, кожне з яких не перевершує восьми. На
полі (k, l) розташований ферзь. Чи погрожує він полю (m, n).
*/
m = input("Введіть m");
n = input("Введіть n");
k = input("Введіть k");
l = input("Введіть l");

//перевірити якщо ферзь б'є по горизонталі і вертикалі
if (m == k || n == l) {
    output("Ферзь погрожує по горизонталі і вертикалі");
}
//перевірити якщо ферзь б'є по діагоналі
else if (Math.abs(m - k) == Math.abs(n - l)) {
    output("Ферзь погрожує по діагоналі");
}
//інакше ферзь не б'є
else {
    output("Ферзь не погрожує");
}