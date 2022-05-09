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
    expect(shuffled).not.toEqual(arr);
  })

  it('la función createBoardElements retorna una instancia de HTML', () => {
    let arr=[1,2,3,4,5,6,7,8,9];
    const div = App.createBoardElements(arr);
    expect(div instanceof HTMLElement).toBe(true);
  });

  // it("flip selectedCard should be a function", () => {
  //   let flip = App.flipSelectedCard
  //   expect(typeof flip).toBe("function");
  // });

  it("checkMatch should return true if same name ", ()=>{
    let arr = [{id: 1, name: 'trini'}, {id:2, name: 'trini'}];
    let check = App.checkMatch(arr);
    expect(check).toBe(true);
    let arr2 = [{id: 1, name: 'maca'}, {id:2, name: 'trini'}];
    let check1 = App.checkMatch(arr2);
    expect(check1).toBe(false);
  });
  
})
/* 
test('la función flipSelectedCard devuelve:' 
  //'1. un div dado vuelta' 
  //'2. no permite dar vuelta más de 2' 
  //'3. no permite clikear la misma carta'
  , ()=>{
toHaveLength() cardlistduplicado
toContain()
  })
 */