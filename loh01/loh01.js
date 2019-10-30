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
    savings: true,
    chooseExpenses: function() {
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
    },
    detectDayBudget: function() {
        appData.moneyPerDay = +((appData.budget / 30).toFixed(2));
        alert("Vash dnevnoi budget: " +appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Minimalnii uriven dostatka!")
        } else if (appData.moneyPerDay >100 && appData.moneyPerDay < 2000) {
            console.log("Srednii uriven dostatka!");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Visokii uriven dostatka!");
        } else {
            console.log("Proizoshla oshibka!");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Kakova summa nakoplenii?"),
                percent = +prompt("Pod kakoi procent?");
    
            appData.monthIncome = save/100/12*percent;
            alert("Dohod v mesyc s vashego depozita: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (i = 0; i < 3; i++) {
            let opt = prompt("Статья необязательных расходов?", "");
            appData.optionalExpenses[i] = opt;
         }
    },
    chooseIncome: function() {
        for (let i = 0; i < 1; i++) {
            let items = prompt("Chto prineset dop dohod? (perechislite cherez zapiatuyu)", "");
            if ( (typeof(items))=== 'string' && (typeof(itams)) != null && (typeof(b)) != null 
                && items != '') {
                console.log("done");
            } else {
                i--;
                }
             appData.income = items.split(', ');
             
        }
        appData.income.push(prompt("Mojet xto-to esheo?"));
        appData.income.sort();
        appData.income.forEach(function(v, j, income) {
            alert("(Способы доп. заработка: " + income + ") " + j+1 + ": " + v )
        });
    }
};

 for (var key in appData) {
     console.log("Наша программа включает в себя данные: " + appData[key]);
 }


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