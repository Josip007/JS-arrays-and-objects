const menu = {
    _meal: '',
    _price: 0,
    set meal(mealToCheck) {
      if(typeof(mealToCheck) === 'string') {
        return this._meal = mealToCheck; 
      }
    },
    set price(priceToCheck) {
      if(typeof(priceToCheck) === 'number') {
        return this._price = priceToCheck;
      }
    },
  
    get todaysSpecial() {
      if(this._meal && this._price) {
        return `Today's special is ${this._meal} for ${this._price}$`;
      } else {return 'Not set correct!'};
    }
  
  };
  menu.meal = 'pizza';
  menu.price = 6;
  console.log(menu);
  console.log(menu.todaysSpecial)