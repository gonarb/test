let money = +prompt("Ваш бюджет на месяц?", ''),
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

let appData = {
    timeData: time,
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

// let i = 0;
// let a;
// let b;
// while (i < 2) {
//     a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//     b = +prompt("Во сколько обойдется?", '');
//     i++;
//     if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null 
//          && (typeof(b))=== "number" && a != '' && b != '' && a.length < 50) {
//          console.log("done");
//          appData.expenses[a] = b;
//     } else {
//         i--;
//         }
// }

// let a;
// let b;
// let i = 0;
// do {
//     a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//     b = +prompt("Во сколько обойдется?", '');
//     i++;
//     if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null 
//           && (typeof(b))=== "number" && a != '' && b != '' && a.length < 50) {
//           console.log("done");
//           appData.expenses[a] = b;
//     } else {
//         i--;
//         }
// }
// while (i < 2);


for  (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = +prompt("Во сколько обойдется?", '');

    if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null 
        && (typeof(b))=== "number" && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {
        i--;
        };
    
};


appData.moneyPerDay = appData.budget / 30;

alert("Vash dnevnoi budget: " +appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Minimalnii uriven dostatka!")
} else if (appData.moneyPerDay >100 && appData.moneyPerDay < 2000) {
    console.log("Srednii uriven dostatka!");
} else if (appData.moneyPerDay > 2000) {
    console.log("Visokii uriven dostatka!");
} else {
    console.log("Proizoshla oshibka!");
}
