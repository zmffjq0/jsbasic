let fn;
{
  const privateUser = { id: 1, name: 'Hong' };
  fn = () => {
    return privateUser;
  };
}

const hong = fn();
hong.age = 30;
console.log(hong);
console.log(privateUser);
