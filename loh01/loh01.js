let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while(isNaN(money) || money =='' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}

start();



let appData = {
    timeData: time,
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

// let i = 0;
// let a;
// let b;
// while (i < 2) {
//     a = prompt("Введите обязательную статью расходов в этом месяце", '');
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
//     a = prompt("Введите обязательную статью расходов в этом месяце", '');
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

function chooseExpenses () {
    for  (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = +prompt("Во сколько обойдется?", '');
    
        if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null 
            && (typeof(b))=== "number" && a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
            i--;
            }
        
    }
}

chooseExpenses();

let moneyPerDay;

function detectDayBudget() {
    appData.moneyPerDay = +((appData.budget / 30).toFixed(2));

    alert("Vash dnevnoi budget: " +appData.moneyPerDay);

}

detectDayBudget();


if (appData.moneyPerDay < 100) {
    console.log("Minimalnii uriven dostatka!")
} else if (appData.moneyPerDay >100 && appData.moneyPerDay < 2000) {
    console.log("Srednii uriven dostatka!");
} else if (appData.moneyPerDay > 2000) {
    console.log("Visokii uriven dostatka!");
} else {
    console.log("Proizoshla oshibka!");
}





function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Kakova summa nakoplenii?"),
            percent = +prompt("Pod kakoi procent?");

        appData.monthIncome = save/100/12*percent;
        alert("Dohod v mesyc s vashego depozita: " + appData.monthIncome);
    }
}

checkSavings();

function chooseOptExpenses() {
    for (i = 0; i < 3; i++) {
        let neOb = prompt("Статья необязательных расходов?");
        if ( (typeof(neOb))=== 'string' && (typeof(neOb)) != null && neOb != '' && neOb.length < 50) {
                console.log("done");
                appData.optionalExpenses[i+1] = neOb;
            } else {
                i--;
                }
    }
}

chooseOptExpenses();