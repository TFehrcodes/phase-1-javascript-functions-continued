function saturdayFun(hobby = 'roller-skate') {
  return `This Saturday, I want to ${hobby}!`;
}
const mondayWork = function (hobby = 'go to the office') {
  return `This Monday, I will ${hobby}.`;
}
function wrapAdjective(e='*') {
  return function(adj='special') {
    return `You are ${e}${adj}${e}!`;
  }
}
wrapAdjective('a dedicated programmer', '||');

