/* https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, and u as vowels for this Kata.
The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
    let vowelsCount = 0;
    let tab=[...str];
    console.log(tab);
    const samogloski=tab.filter(el=>{return (el=='a' || el=='e' ||el=='i' || el=='o'|| el=='u')});
    vowelsCount=samogloski.length;
    console.log(vowelsCount);
    return vowelsCount;
  }

  getCount("abracadabra");// 5
  getCount("In ES5, you declare variables via var. Such variables are function-scoped, their scopes are the innermost enclosing functions. The behavior of var is occasionally confusing. This is an example:");