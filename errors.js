//errors

//1)reference error
//2)syntax error
//3)type error

"use strict";
const an = "anandan";
console.log(an);

//try catch finally used for avoid a error

const error = () => {
  try {
    const name = "anand";
    name = "oviya";
  } catch (err) {
    console.error(err);
    console.warn(err);
    console.table(err);
  }
};
error();

//example for error through a user

const error1 = () => {
  try {
    throw new error("this is a error");
  } catch (err) {
    console.error(err.name);
  }
};
error1();

//finally

const error3 = () => {
  try {
    let name = "anand";
    name = "oviya";
  } catch (err) {
    console.error(err);
    console.warn(err);
    console.table(err);
  } finally {
    console.log("...finally"); //when using finally it work all time in a code when error or not appear or not
  }
};
error3();
