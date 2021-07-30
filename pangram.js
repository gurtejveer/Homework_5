const pangram = (str) => {
    const strUpper = str.toUpperCase();
    // start at A
    for (let i = 65; i <= 90; i++) {
      if (!strUpper.includes(String.fromCharCode(i))) {
        return false;
      }
    }
    return true;
  };
  console.log(pangram('abcdefghijklmnopqrstuvwxyz'));
  console.log(pangram('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'));