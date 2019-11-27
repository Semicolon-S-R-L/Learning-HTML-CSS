const menu={
    _courses:{
     appetizers: [],
      mains:[],
      desserts:[],
    },
  get appetizer(){
    return this._courses.appetizer;
  },
    get mains(){
    return this._courses.mains;
  },
    get desserts(){
    return this._courses.appetizer;
  },
    set appetizers(appetizers){
      this.courses.appetizer=appetizer;
    },
     set mains(mains){
      this.courses.mains=mains;
    },
     set desserts(desserts){
      this.courses.desserts=desserts;
    },
    get courses(){
      return{
       appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      }
    },
    addDishToCourse(courseName,dishName ,dishPrice){
      const dish={
        name: dishName,
        prece: dishPrice, 
      };
      return this.courses[courseName].push(dish)
    },
    getRandomDishFromCourse(courseName){
      const dishes=this._courses[courseName];
      const randomIndex=Math.floor(Math.random()*dishes.length);
      return dishes[randomIndex];
    },
    generateRandomMeal(){
     const appetizer =this.getRandomDishFromCourse('appetizers');
     const main =this.getRandomDishFromCourse('mains');
     const dessert =this.getRandomDishFromCourse('desserts');
     const totalPrice=appetizer.price + main.price +dessert.pirce;
      return `Your meal is ${appetizer.name},${main.name} and ${dessert.name}.The price is ${totalPrice}`;
    }
  };
  
  menu.addDishToCourse('appetizers','salad', 4.00);
  menu.addDishToCourse('appetizers','wings', 4.50);
  menu.addDishToCourse('appetizers','ribs', 5.00);
  
  menu.addDishToCourse('mains','steak', 6.00);
  menu.addDishToCourse('mains','salmon', 7.00);
  menu.addDishToCourse('mains','tofu', 8.00);
  
  menu.addDishToCourse('desserts','tea', 9.00);
  menu.addDishToCourse('desserts','coffe', 9.75);
  menu.addDishToCourse('desserts','cake', 12.35);
  
  const meal = menu.generateRandomMeal();
  console.log(meal);
  
  