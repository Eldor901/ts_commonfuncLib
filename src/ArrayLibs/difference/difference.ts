

export const difference = <T>(array1: T[], array2: T[]) => {
   let result = [];
   

   for(let i = 0; i < array1.length; i++)
   {
      if(!array2.includes(array1[i]))
      {
         result.push(array1[i])
      }
   }

   return result;
}

const a = difference([], [2, 3]);
a

// function concat() {
//     var length = arguments.length;
//     if (!length) {
//       return [];
//     }
//     var args = Array(length - 1),
//         array = arguments[0],
//         index = length;
  
//     while (index--) {
//       args[index - 1] = arguments[index];
//     }
//     return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
//   }
  
//   module.exports = concat;
  
