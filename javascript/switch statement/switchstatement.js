//JAVASCRIPT SWITCH CASE STATEMENT
let roll10 = 24;
switch( roll10){
    case 1:
         console.log('Your rolled a 1');
         break;// stops more execution after the specif case has been executed
    case 2:
         console.log('Your rolled a 2');
         break;
    case 3:
        console.log('Your rolled a 3');
        break;
    case 4:
    console.log('Your rolled a 4');
        break;
    case 5:
        console.log('Your rolled a 5');
        break;
    case 6:
        console.log('Your rolled a 6');
        break;
    case 7:
        console.log('Your rolled a 7'); 
        break;
        default:
        console.log(`The number ${roll10} is not possible.`)   
}


let today24 = new Date(). toLocaleString( 'default',{weekday:'short'});

switch(today24){
    case 20=== 'Mon':
    console.log('Today is ${today}');
    break;
    case 21=== 'Tue':
    console.log('Today is ${today}');
    break;
    case 22=== 'Wed':
    console.log('Today is ${today}');
    break;
    case 23=== 'Thu':
    console.log('Today is ${today}');
    break;
    case 24=== 'Friday':
    console.log('Today is ${today}');
    break;
    case 25=== 'Sat':
    console.log('Today is ${today}');
    break;
    case 26=== 'Sun':
    console.log('Today is ${today}');
    break;
    default:
        console.log('No idea!');
}


const favFood10 = 'Beef Pilau';

switch(favFood10){
      case  'Rice Beans':
      console.log(`${favFood10} is my favourite food.`);
      break;
      case   'Chapati Beans':
      console.log(`${favFood10} is my favourite food.`);
      break;
      case   'Rice beef':
      console.log(`${favFood10} is my favourite food.`);
      break;
      case   'Chapati Beef':
      console.log(`${favFood10} is my favourite food.`);
      break;
      case    'Beef Pilau':
      console.log(`${favFood10}is my favourite food.`);
      break;
      default:
     console.log(`No Chef Ramsey did not cook ${favFood10}, sir.`);
}

