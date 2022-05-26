/**
 * Данные по курсам
 */
let courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [500, null] },
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
const requiredRanges = [[null, 200], [100, 350], [200, null], [0, 600]];

/**
 * Фильтрация курсов по стоимости
 * @param {Array<{name, prices}>} courses массив с данными по курсам
 * @param {number[]} range диапазон цен для фильтрации
 * @returns {Array<{name, prices}>} отфильтрованный массив данных с курсами
 */
function filterCoursesByPrice(courses, range) {
    const minRangePrice = Math.min(...range);
    const maxRangePrice = Math.max(...range);
    let result = courses.filter(course => {
        const minCoursePrice = Math.min(...course.prices);
        const maxCoursePrice = Math.max(...course.prices);
        return minCoursePrice >= minRangePrice && maxRangePrice >= maxCoursePrice;
    });
    return result;
}
/**
 * Отсортировать курсы по наибольшей стоимости по возрастанию или убыванию
 * @param {Array<{name, prices}>} courses массив с данными по курсам
 * @param {Boolean} ascending Направление сортировки. True - возрастание, false - убывание
 * @returns {Array<{name, prices}>} отсортированный массив данных с курсами
 */
function sortCoursesByPrice(courses, ascending) {
    const coursesArr = [...courses];
    coursesArr.sort((prev, next) => {
        if (ascending) {
            return Math.max(...prev.prices) - Math.max(...next.prices);
        }
        else {
            return Math.max(...next.prices) - Math.max(...prev.prices);
        }
    });
    return coursesArr;
}

requiredRanges.forEach(range => {
    const filtered = filterCoursesByPrice(courses, range);
    console.log(filtered);
    console.log(sortCoursesByPrice(filtered, false));
    console.log('-------------------------------------------');
});
