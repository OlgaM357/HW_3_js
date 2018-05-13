// 1.======= дана строка, сделать первые буквы каждого слова в верхнем регистре
let str = '  i am   in the easycode ';
let str1 = '';
for(let i = 0; i < str.length; i++){	  
	str1 += str[i-1] === " " || i === 0 && str[0] !== " " ?  str[i].toUpperCase() :
	str[i];
}
console.log(str);
console.log(str1);

// 2.======= дана строка, сделать перевертыш
let str2 = 'tseb eht ma i';
let str3 = '';
for(let i = str2.length-1; i >= 0; i--){
	str3 += str2[i];
}
console.log(str3);

// 3.======= факториал числа 10
 // while
 let res = 1;
 let i = 10;
 while (i){
 	res *= i--;
 }
 console.log(res);

 // for
 let result = 1;
 for(let i = 10; i > 0; i--){
 	result *= i;
 }
 console.log(result);

// 4.====== создать строку "Считаем до 10и:1, 2, 3, 4, 5, 6, 7, 8, 9, 10"
let str4 = 'Считаем до 10и: ';

for (let i = 1; i <= 10; i++) {
	str4 += i === 10 ? i : i +', ';
}
console.log(str4);

// 5.======создать новую строку,где каждое слово с большой буквы, а пробелы удалены
let str5 = ' JavaScript    is a pretty good language';
let str6 = '';
for(let i = 0; i < str5.length; i++){
	if(str5[i] === ' '){
		continue;
	}
	str6 += i === 0 && str5[0] !== ' ' ? str5[0].toUpperCase():
	str5[i-1] === ' ' ?  str5[i].toUpperCase(): str5[i];
}
console.log(str5);
console.log(str6);

// 6.====== найти все нечетные числа от 1 до 15 включительно и вывести их в консоль
for(let i = 1; i <= 15; i++){
	if(i % 2 === 1)
		console.log(i);
}
// для уменьшения количества итераций
let n = 1;
do{
	console.log(n);
}while((n += 2) <= 15);
