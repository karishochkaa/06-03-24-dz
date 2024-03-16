// Вам потрібно реалізувати функцію performBankOperations, яка приймає об'єкт з балансом рахунку та callback-функцію, 
//яка виконує різні банківські операції, а саме: покалсти гроші на рахунок та зняти гроші з рахунку. 
//Функції з банківськими  операціями  є колбеками
const account = {
    balance: parseFloat(prompt("Введіть баланс рахунку")) || 0, 
  };
  
  const amountForDepositString = prompt("Введіть суму поповнення");
  const amountForWithdrawString = prompt("Введіть суму для зняття");
  
  const isNumeric = (value) => !isNaN(parseFloat(value));
  
  const amountForDeposit = isNumeric(amountForDepositString)
    ? parseFloat(amountForDepositString)
    : 0;
  
  const amountForWithdraw = isNumeric(amountForWithdrawString)
    ? parseFloat(amountForWithdrawString)
    : 0;
  
    function performBankOperations(obj, callback) {
      callback(obj);
    }
  
    const deposit = (obj) => {
      obj.balance += amountForDeposit;
      console.log(
        `На ваш рахунок покладено ${amountForDeposit}. На балансі ${obj.balance}`
      );
    };
  
    const withdraw = (obj) => {
      if (amountForWithdraw > obj.balance) {
        console.log(`Недостатньо коштів на рахунку`);
      } else {
        obj.balance -= amountForWithdraw;
        console.log(
          `З вашого рахунку знято ${amountForWithdraw}. На балансі ${obj.balance}`
        );
      }
    };
  
    performBankOperations(account, deposit);
    performBankOperations(account, withdraw);
  
    alert(`На вашому рахунку ${account.balance}`);
