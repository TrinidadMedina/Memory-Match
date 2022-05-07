import App from './App.js';

describe ('tests para el archivo App.js', ()=>{
  test('la función duplicateList retorna un arreglo duplicado',()=>{
    let arr =[1,2,3,4,5,6,7,8,9];
    let duplicated = App.duplicateList(arr);
    //assertion
    //expect to be an array
    expect(duplicated).toHaveLength(arr.length*2);

  })
  test('la función shuffle retorna un arreglo desordenado',()=>{
    let arr=[1,2,3,4,5,6,7,8,9];
    let shuffled = App.shuffle(arr);
    //assertion
    expect(shuffled).not.toBe(arr);
  })
})

/* test('la función createBoardElements devuelve un div',()=>{
  })

test('la función flipSelectedCard devuelve:' 
  //'1. un div dado vuelta' 
  //'2. no permite dar vuelta más de 2' 
  //'3. no permite clikear la misma carta'
  , ()=>{
toHaveLength() cardlistduplicado
toContain()
  })
  
test('la función checkMatch devuelve informacion si dos divs clikeados son iguales(true or false)',()=>{
    let match
  })
})

import App from './App.js';

describe('App', () => {
  it('should render without crashing', () => {
    const el = App();
    expect(el instanceof HTMLElement).toBe(true);
  });
}); 
 */