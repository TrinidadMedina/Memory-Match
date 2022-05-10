import App from './App.js';

describe ('tests para la función createCardList', ()=>{
  it('createCardList should be a function', () => {
    let cardList = App.createCardList;
    expect(typeof cardList).toBe('function');
  });  
  it('cardList should be an object', ()=>{
    let cardList1 = App.createCardList();
    expect(typeof cardList1).toBe("object");
  }); 
})
describe ('tests para la función duplicateList', ()=>{
  test('retorna un arreglo duplicado',()=>{
    let arr =[1,2,3,4,5,6,7,8,9];
    let duplicated = App.duplicateList(arr);
    expect(duplicated).toHaveLength(arr.length*2);
  })
  test('it should be a function', ()=> {
    let duplicateList = App.duplicateList;
    expect(typeof duplicateList).toBe('function');
  })
  test('it should return an array', ()=> {
    let arr=[1,2];
    let duplicateList = App.duplicateList(arr);
    expect(typeof duplicateList).toBe('object');
  })
})
describe ('test para la función shuffle', ()=>{
  test('la función shuffle retorna un arreglo desordenado',()=>{
    let arr=[1,2,3,4,5,6,7,8,9];
    let shuffled = App.shuffle(arr);
    expect(shuffled).not.toEqual(arr);
  })
})
describe ('tests para la función createBoardElements', ()=>{
  test('la función createBoardElements retorna una instancia de HTML', () => {
    let arr=[1,2,3,4,5,6,7,8,9];
    const div = App.createBoardElements(arr);
    expect(div instanceof HTMLElement).toBe(true);
  });
})
describe ('tests para la función flipSelectedCard', ()=>{
  it("flip selectedCard should be a function", () => {
    let flip = App.flipSelectedCard;
    expect(typeof flip).toBe("function");
    //make visible divs (this)
  });
})
describe ('tests para función checkMatch', ()=>{
  it("checkMatch should be a function", () => {
    let checkMatch = App.checkMatch;
    expect(typeof checkMatch).toBe("function");
  });
})
describe ('tests para función match', ()=>{
  it("match should be a function", () => {
    let match = App.match;
    expect(typeof match).toBe("function");
  });
})
describe ('tests para la función noMatch', ()=>{
  it("noMatch should be a function", () => {
    let noMatch = App.noMatch;
    expect(typeof noMatch).toBe("function");
  });
})
describe ('tests para la función checkMatch', ()=>{
  it("with diferent value cards should return false", ()=>{
    let card1 = "1";
    let card2 = "2";
    let result = App.checkMatch(card1,card2);
    expect(result).toBe(false);
  });
  it("with same value cards should return false", ()=>{
    let card1 = "1";
    let card2 = "1";
    let result = App.checkMatch(card1,card2);
    expect(result).toBe(true);
  });
})

describe ('tests para la función resetValues', ()=>{
  it("it should be a function", ()=>{
    let resetValues = App.resetValues;
    expect(typeof resetValues).toBe("function");
  })
   it("it should work", ()=>{
    let turn = 1;
    let resetValues = App.resetValues();
    expect(resetValues).toBe(0);
  })
})