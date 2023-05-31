
// const A = parseInt(lines[0]);
// const B = parseInt(lines[1]);

// const X = A + B;

// console.log("X =",X);

// const R = parseFloat(lines[0]);
// const n = 3.14159;
// const A = n * (Math.pow(R, 2));
// const Area = A.toFixed(4)
// console.log("A="+A)

// const lines = ["30","10"];
// const A = parseInt(lines[0]);
// const B = parseInt(lines[1]);

// const SOMA = A+B;
// console.log("SOMA =",SOMA);
// const lines = ["3","9"];
// const A = parseInt(lines[0]);
// const B = parseInt(lines[1]);
// const PROD = A*B;
// console.log("PROD =",PROD);

// const lines = ["5.0","6.0","7.0"];
// const A = parseFloat(lines[0]*2);
// const B = parseFloat(lines[1]*3);
// const C = parseFloat(lines[1]*5);
// const PROD = (A+B+C) / 10;
// const MEDIA = PROD.toFixed(1)
// console.log("MEDIA =",MEDIA);

// const lines = ["5", "6", "7", "8"];
// const [A, B, C, D] = lines.map(x => parseInt(x));
// const DIFERENCA = ((A*B) - (C*D));
// console.log("DIFERENCA =",DIFERENCA);

// const lines = [25, 100, 5.50];
// const NUMBER = lines[0];
// const SALARY = lines[1]*parseFloat(lines[2]);
// console.log(`NUMBER = ${NUMBER}
// SALARY = U$ ${SALARY.toFixed(2)}`)

// const lines = ["JOAO", "500.00", "1230.00"];
// const bonus = (15/100)*parseFloat(lines[2]);
// const TOTAL = parseFloat(lines[1])+bonus;
// console.log(`TOTAL = R$ ${TOTAL.toFixed(2)}`);

// const [A,B] = lines.map(X => X.split(" "));
// const Product1 = A[1]*A[2];
// const Product2 = B[1]*B[2];
// const Total = Product1 + Product2;
// console.log(`VALOR A PAGAR: R$ ${Total.toFixed(2)}`)

// 1012 right answers
// const lines = ['3.0 4.0 5.2'];
// const data = lines[0].split(' ');
// const [A,B,C] = data.map(X => parseFloat(X));
// const pi = 3.14159;
// const TRIANGULO = 1/2 * A * C;
// const CIRCULO = pi*Math.pow(C,2);
// const TRAPEZIO = 1/2*(A+B)*C;
// const QUADRADO = Math.pow(B,2);
// const RETANGULO = A*B;
// console.log(`TRIANGULO: ${TRIANGULO.toFixed(3)}
// CIRCULO: ${CIRCULO.toFixed(3)}
// TRAPEZIO: ${TRAPEZIO.toFixed(3)}
// QUADRADO: ${QUADRADO.toFixed(3)}
// RETANGULO: ${RETANGULO.toFixed(3)}`);



// 1013 wrong answers
// var input = '217 14 6';
// var lines = input.split('/n');
// var data = lines[0].split(' ');
// var [a,b,c] = data.map(X => parseInt(X));
// var maxValue = (a+b+Math.abs(a-b))/2;
// var maxValue = (b+c+Math.abs(b-c))/2;
// var maxValue = (c+a+Math.abs(c-a))/2;
// console.log(`${maxValue} eh o maior`);

// 1013 right answers
// var input = '217 14 5';
// var lines = input.split('/n');
// const data = lines[0].split(' ');
// const arr = data.map(X => parseInt(X));
// let largest = arr[0];
 
// for(let i=0; i < arr.length; i++){
//     if(largest < arr[i]){
//         largest = arr[i]
//     }
// }
// console.log(`${largest} eh o maior`)

// 1014
// var input = `500
// 35.0`;
// var lines = input.split('\n');
// const [A, B] = lines.map(X => parseFloat(X));
// const result = A/B;
// console.log(`${result.toFixed(3)} km/l`)

// 1015 right ans
// const input = `1.0 7.0
// 5.0 9.0`;
// const lines = input.split('\n');
// const [p1,p2] = lines.map(X => X);
// const [x1, y1] = p1.split(' '); 
// const [x2, y2] = p2.split(' ');
// const value = Math.pow(parseFloat(x2) - parseFloat(x1),2) + Math.pow(parseFloat(y2) - parseFloat(y1),2);
// const result = Math.sqrt(value);
// console.log(result.toFixed(4));

// 1016
// const lines = ['30'];
// const result = parseInt(lines[0]) * 2;
// console.log(`${result} minutos`)

// 1017
// const input = `10
// 85`;
// const lines = input.split('\n');
// const [time, speed] = lines.map(X => parseInt(X));
// const result = (time * speed) / 12;
// console.log(result.toFixed(3));

// 1018
// const input = '503';
// const lines = input.split('\n');

// const totalAmount = parseInt(lines[0]);
// let value = totalAmount;
// const arr = [100,50,20,10,5,2,1];
// let note = [];
// for(let i = 0; i < arr.length; i++){
//     let A = Math.floor(value / arr[i]);
//     let B =  value - (A* arr[i]) ;
//     note.push(A);
//     value = B;
// }

// console.log(`${totalAmount}
// ${note[0]} nota(s) de R$ 100,00
// ${note[1]} nota(s) de R$ 50,00
// ${note[2]} nota(s) de R$ 20,00
// ${note[3]} nota(s) de R$ 10,00
// ${note[4]} nota(s) de R$ 5,00
// ${note[5]} nota(s) de R$ 2,00
// ${note[6]} nota(s) de R$ 1,00`);

// 1019
// const input = '1';
// const lines = input.split('\n');
// let secValue = parseInt(lines[0]);
// let min = 0;
// let H = 0;
// H = Math.floor(secValue / 3600);
// secValue = Math.floor(secValue % 3600);
// min = Math.floor(secValue / 60);
// secValue = secValue % 60;
// console.log(`${H}:${min}:${secValue}`)


// 1020
// const input = '30';
// const lines = input.split('\n');
// let age = parseInt(lines[0]);
// let year = 0;
// let month = 0;
// let days = 0;
// year = Math.floor(age / 365);
// age = age - (year*365)
// month = Math.floor(age / 30);
// days = Math.floor(age%30)
// console.log(`${year} ano(s)
// ${month} mes(es)
// ${days} dia(s)`)


// 1021
// const input = '576.73';
// const lines = input.split('\n');

// const totalAmount = parseFloat(lines[0]);
// let value = totalAmount;
// const arr = [100,50,20,10,5,2,1];
// const coins = [0.50,0.25,0.10,0.05,0.01];
// let note = [];
// let moedas = [];
// for(let i = 0; i < arr.length; i++){
//     let A = Math.floor(value / arr[i]);
//     let B =  value - (A* arr[i]) ;
//     note.push(A);
//     value = B;   
// }
// let newValue = parseFloat(value.toFixed(2))*100
//     for(let j = 0; j < coins.length; j++){
//         let C = Math.floor(newValue /(coins[j]*100) );
//         let D = (newValue) - (C*(coins[j]*100));
//         moedas.push(C);
//         newValue = D;
//     }
// console.log(`NOTAS:
// ${note[0]} nota(s) de R$ 100.00
// ${note[1]} nota(s) de R$ 50.00
// ${note[2]} nota(s) de R$ 20.00
// ${note[3]} nota(s) de R$ 10.00
// ${note[4]} nota(s) de R$ 5.00
// ${note[5]} nota(s) de R$ 2.00
// MOEDAS:
// ${note[6]} moeda(s) de R$ 1.00
// ${moedas[0]} moeda(s) de R$ 0.50
// ${moedas[1]} moeda(s) de R$ 0.25
// ${moedas[2]} moeda(s) de R$ 0.10
// ${moedas[3]} moeda(s) de R$ 0.05
// ${moedas[4]} moeda(s) de R$ 0.01`)

// 1035
// const input = '2 3 2 6';
// const lines = input.split('\n');
// const [A,B,C,D] = (lines[0].split(' '))

// if ( (parseInt(B) > parseInt(C) && parseInt(D) > parseInt(A)) && (parseInt(C)+parseInt(D) > parseInt(A)+parseInt(B)) && (parseInt(C) > 0 && parseInt(D) > 0) && (parseInt(A) % 2 === 0)) {
    
//     console.log("Valores aceitos");
    
// }else{
//     console.log("Valores nao aceitos");
// }

// 1036
// const input = '10.0 20.1 5.1';
// const lines = input.split('\n');
// const [A,B,C] = (lines[0].split(' '));

// let delta = parseFloat(B) * parseFloat(B) - 4 * parseFloat(A) * parseFloat(C);



// if (delta <= 0 || parseFloat(A) === 0 ) {
//   console.log("Impossivel calcular");
// } else {
//   let r1 = (-parseFloat(B) + Math.sqrt(delta)) / (2 * parseFloat(A));
//   let r2 = (-parseFloat(B) - Math.sqrt(delta)) / (2 * parseFloat(A));
//   console.log('R1 = ' + r1.toFixed(5));
//   console.log('R2 = ' + r2.toFixed(5));
// }

// 1037
// const input = '65.02';
// const lines = input.split('\n');
// const value = parseFloat(lines[0].split(' '));


// if(value < 0 || value > 100){
//     console.log('Fora de intervalo')
// }else{
//     if(value >= 0 && value <= 25.0000){
//         console.log(`Intervalo [0,25]`)
//     }else if(value > 25.00001 && value <= 50.0000000){
//         console.log(`Intervalo (25,50]`)
//     }else if(value > 50.00001 && value <= 75.000000){
//         console.log(`Intervalo (50,75]`)
//     }else if(value > 75.00001 && value <= 100.000000){
//         console.log(`Intervalo (75,100]`)
//     }else{
//         console.log('Fora de intervalo');
//     }
// };

// 1038
// const input = '2 3';
// const lines = input.split('\n');
// const value = lines[0].split(' ');
// const [X,Y] = value;
// const table = [
//     {
//         code : 1,
//         specification : 'Cachorro Quente',
//         Price : 4.00
//     },
//     {
//         code : 2,
//         specification : 'X-Salada',
//         Price : 4.50
//     },
//     {
//         code : 3,
//         specification : 'X-Bacon',
//         Price : 5.00
//     },
//     {
//         code : 4,
//         specification : 'Torrada simples',
//         Price : 2.00
//     },
//     {
//         code : 5,
//         specification : 'Refrigerante',
//         Price : 1.50
//     }
// ];
// const found = table.find(element => element.code == X);
// const exactValue = (Y * found.Price).toFixed(2);
// console.log(`Total: R$ ${exactValue}`);


// 1040
// const input = `2.0 6.5 4.0 9.0
// 6.4`;
// const lines = input.split('\n');
// const value = lines[0].split(' ');
// const [N1, N2, N3, N4] = value;
// const sum = (N1*2) + (N2*3) + (N3*4) + (N4*1);
// const result = sum / 10;
// if(result < 5.0){
//     console.log(`Media: ${result.toFixed(1)}
// Aluno reprovado.`)
//   }else if(result == 5.0 || result <= 6.9){
//       console.log(`Media: ${result.toFixed(1)}
// Aluno em exame.`)
//   }else if(result >= 7.0){
//       console.log(`Media: ${result.toFixed(1)}
// Aluno aprovado.`)
//   };

// if(lines[1]){
//     const FinalResult = (parseFloat(lines[1]) + result)/2; 
//     if(FinalResult <= 4.9){
//         console.log(`Nota do exame: ${parseFloat(lines[1]).toFixed(1)}
// Aluno reprovado.
// Media final: ${FinalResult.toFixed(1)}`)
//     }else if(FinalResult >= 5.0){
//         console.log(`Nota do exame: ${parseFloat(lines[1]).toFixed(1)}
// Aluno aprovado.
// Media final: ${FinalResult.toFixed(1)}`)
//     }
// };


// 1041
// const input = `0.0 0.0`
// const lines = input.split('\n');
// const value = lines[0].split(' ')
// const [X,Y] = value

// if(parseFloat(X) === 0.0){
//     if(parseFloat(Y) === 0.0){
//         console.log(`Origem`);
//     }else{
//         console.log(`Eixo Y`);
//     }
// }else if( parseFloat(Y) === 0.0){
//     if(parseFloat(X) === 0.0){
//         console.log(`Origem`);
//     }else{
//         console.log(`Eixo X`);
//     }
// }
// else if(X>0.0 && Y>0.0){
//     console.log("Q1");
// }
// else if(X<0.0 && Y>0.0){
//     console.log("Q2");
// }
// else if(X<0.0 && Y<0.0){
//     console.log("Q3");
// }
// else if(X>0.0 && Y<0.0){
//     console.log("Q4");
// }

// 1042
// var input = `-14 21 7`;
// var lines = input.split('\n');
// const value = lines[0].split(' ');
// const result = value.map(x=> parseInt(x)).sort(function(a,b){
//     if(a > b) return 1;
//     if(a < b) return -1;
//     return 0;
    
// });
// const [x,y,z] = result;
// const [a,b,c] = value;
// console.log(`${x}
// ${y}
// ${z}

// ${a}
// ${b}
// ${c}`)

// 1043
// var input = `6.0 4.0 2.0`;
// var lines = input.split('\n');
// const value = lines[0].split(' ');
// const [A,B,C] = value.map(x => parseFloat(x));

// if(A + B > C && A + C > B && B + C > A){
//     const tringle = A + B + C;
//     console.log(`Perimetro = ${tringle.toFixed(1)}`);
// }else {
//     const area = ((A + B)/2)*C;
//     console.log(`Area = ${area.toFixed(1)}`);
// }

// 1044
// var input = `6 24`;
// var lines = input.split('\n');
// const value = lines[0].split(' ');
// const [A,B] = value.map(x => parseInt(x));
// if(B % A === 0 || A % B === 0){
//     console.log(`Sao Multiplos`);
// }else{
//     console.log(`Nao sao Multiplos`);
// }

// 1045
// var input = `6.0 8.0 10.0`;
// var lines = input.split('\n');
// const value = lines[0].split(' ');
// const result = value.map(x=> parseFloat(x)).sort(function(a,b){
//     if(a > b) return -1;
//     if(a < b) return 1;
//     return 0;
    
// });
// const [A,B,C] = result;
// if(A === B && B === C && C === A){
//     if(A >= B + C){
//         console.log(`NAO FORMA TRIANGULO`)
//     }else if(Math.pow(A,2) == Math.pow(B,2) + Math.pow(C,2)){
//         console.log(`TRIANGULO RETANGULO`)
//     }else if(Math.pow(A,2) > Math.pow(B,2) + Math.pow(C,2)){
//         console.log(`TRIANGULO OBTUSANGULO`)
//     }else if(Math.pow(A,2) < Math.pow(B,2) + Math.pow(C,2)){
//         console.log(`TRIANGULO ACUTANGULO`)
//     }
//    console.log(`TRIANGULO EQUILATERO`);
// }else if(A === B || B === C || C === A){
//     if(A >= B + C){
//         console.log(`NAO FORMA TRIANGULO`)
//     }else if(Math.pow(A,2) == Math.pow(B,2) + Math.pow(C,2)){
//         console.log(`TRIANGULO RETANGULO`)
//     }else if(Math.pow(A,2) > Math.pow(B,2) + Math.pow(C,2)){
//         console.log(`TRIANGULO OBTUSANGULO`)
//     }else if(Math.pow(A,2) < Math.pow(B,2) + Math.pow(C,2)){
//         console.log(`TRIANGULO ACUTANGULO`)
//     }
//     console.log(`TRIANGULO ISOSCELES`);
// }else if(A > B && A > C){
//     if(A >= B + C){
//         console.log(`NAO FORMA TRIANGULO`)
//     }else if(Math.pow(A, 2) == Math.pow(B, 2) + Math.pow(C, 2)){
//         console.log(`TRIANGULO RETANGULO`)
//     }else if(Math.pow(A,2) > Math.pow(B,2) + Math.pow(C,2)){
//         console.log(`TRIANGULO OBTUSANGULO`)
//     }else if(Math.pow(A,2) < Math.pow(B,2) + Math.pow(C,2)){
//         console.log(`TRIANGULO ACUTANGULO`)
//     }
// }

// 1046
// var input = `0 2`;
// var lines = input.split('\n');
// const value = lines[0].split(' ');
// const [A,B] = value.map(x => parseInt(x));
// const TotalHours = 24;

// if(A === B){
//     console.log(`O JOGO DUROU ${TotalHours} HORA(S)`);

// }else if(A > 12 && B >= 12){
//     let result = A - B;
//     console.log(`O JOGO DUROU ${result} HORA(S)`);

// }else if(A > 12){
//     let result = TotalHours - A + B;
//     console.log(`O JOGO DUROU ${result} HORA(S)`);

// }
// else if(A <= 12){
//     let result = B - A;
//     console.log(`O JOGO DUROU ${result} HORA(S)`);
// }

// 1047
// var input = `23 0 24 0`;
// var lines = input.split('\n');
// const value = lines[0].split(' ');
// const [A,C,B,D] = value.map(x => parseInt(x));
// const TotalHours = 24;

// if(A === B){
//     if (C === D){
//         let min = 0;
//         console.log(`O JOGO DUROU ${TotalHours} HORA(S) E ${min} MINUTO(S)`);
//     }else if(C < D ){
//         let min = D - C;
//         console.log(`O JOGO DUROU ${TotalHours} HORA(S) E ${min} MINUTO(S)`);
//     }else if(C > D){
//         let min = 60 - (C - D);
//         console.log(`O JOGO DUROU ${TotalHours} HORA(S) E ${min} MINUTO(S)`);
//     }
    
// }else if(A > 12 && B >= 12){
    
//     let result = Math.abs(A - B);
//     if (C === D){
//         let min = 0;
//         console.log(`O JOGO DUROU ${result} HORA(S) E ${min} MINUTO(S)`);
//     }else if(C < D ){
//         let min = D - C;
//         console.log(`O JOGO DUROU ${result} HORA(S) E ${min} MINUTO(S)`);
//     }else if(C > D){
//         let min = 60 - (C - D);
//         console.log(`O JOGO DUROU ${result === 1 ? 0 : result} HORA(S) E ${min} MINUTO(S)`);
//     }

// }else if(A > 12 && B < A){
    
//     let result = (TotalHours - A + B);
//     if (C === D){
//         let min = 0;
//         console.log(`O JOGO DUROU ${result} HORA(S) E ${min} MINUTO(S)`);
//     }else if(C < D ){
//         let min = D - C;
//         console.log(`O JOGO DUROU ${result} HORA(S) E ${min} MINUTO(S)`);
//     }else if(C > D){
//         let min = 60 - (C - D);
//         console.log(`O JOGO DUROU ${result === 1 ? 0 : result} HORA(S) E ${min} MINUTO(S)`);
//     }

// }
// else if(A <= 12){
    
//     let result = Math.abs(B - A);
//     if (C === D){
//         let min = 0;
//         console.log(`O JOGO DUROU ${result} HORA(S) E ${min} MINUTO(S)`);
//     }else if(C < D ){
//         let min = D - C;
//         console.log(`O JOGO DUROU ${result} HORA(S) E ${min} MINUTO(S)`);
//     }else if(C > D){
//         let min = 60 - (C - D);
//         console.log(`O JOGO DUROU ${result === 1 ? 0 : result} HORA(S) E ${min} MINUTO(S)`);
//     }
// }


// var input = `7 10 8 9`;
// var lines = input.split('\n');
// const value = lines[0].split(' ');
// const [A,C,B,D] = value.map(x => parseInt(x));

// let result = null;
// result = ((B*60)+D) - ((A*60)+C);
// if(result <= 0){
//     result += 24*60;
// }
// let time = result/60;
// let min = result%60;
// console.log(`O JOGO DUROU ${parseInt(time)} HORA(S) E ${parseInt(min)} MINUTO(S)`);


// 1048
// var input = `400.00`;
// var lines = input.split('\n');
// const value = parseFloat(lines[0]);
// let earnedMoney = null;
// let Newsalary = null;

// if(value <= 400.00){
//     let earnedMoney = (value / 100) * 15;
//     let Newsalary = earnedMoney + value;
//     console.log(`Novo salario: ${Newsalary.toFixed(2)}
// Reajuste ganho: ${earnedMoney.toFixed(2)}
// Em percentual: 15 %`);

// }else if(value >= 400.01 && value <= 800.00){
//     let earnedMoney = (value / 100) * 12;
//     let Newsalary = earnedMoney + value;
//     console.log(`Novo salario: ${Newsalary.toFixed(2)}
// Reajuste ganho: ${earnedMoney.toFixed(2)}
// Em percentual: 12 %`);

// }else if(value >= 800.01 && value <= 1200.00){
//     let earnedMoney = (value / 100) * 10;
//     let Newsalary = earnedMoney + value;
//     console.log(`Novo salario: ${Newsalary.toFixed(2)}
// Reajuste ganho: ${earnedMoney.toFixed(2)}
// Em percentual: 10 %`);

// }else if(value >= 1200.01 && value <= 2000.00){
//     let earnedMoney = (value / 100) * 7;
//     let Newsalary = earnedMoney + value;
//     console.log(`Novo salario: ${Newsalary.toFixed(2)}
// Reajuste ganho: ${earnedMoney.toFixed(2)}
// Em percentual: 7 %`);

// }else if(value > 2000.00){
//     let earnedMoney = (value / 100) * 4;
//     let Newsalary = earnedMoney + value;
//     console.log(`Novo salario: ${Newsalary.toFixed(2)}
// Reajuste ganho: ${earnedMoney.toFixed(2)}
// Em percentual: 4 %`);
// }

// 1049
// var input = `invertebrado
// anelideo
// onivoro`;
// var lines = input.split('\n');
// const data = [
//     ['vertebrado','ave','carnivoro','aguia'],
//     ['vertebrado','ave','onivoro','pomba'],
//     ['vertebrado','mamifero','onivoro','homem'],
//     ['vertebrado','mamifero','herbivoro','vaca'],
//     ['invertebrado','inseto','hematofago','pulga'],
//     ['invertebrado','inseto','herbivoro','lagarta'],
//     ['invertebrado','anelideo','hematofago','sanguessuga'],
//     ['invertebrado','anelideo','onivoro','minhoca'],
// ]
// const newData = data.some(X =>{
//     if(X[0] === lines[0] && X[1] === lines[1] && X[2] === lines[2]){
//         console.log(X[3]);
//     }
// })

// 1050
// var input = '11'
// var lines = input.split('\n');
// if(lines[0] === '61'){
//     console.log(`Brasilia`);
// }else if(lines[0] === '71'){
//     console.log(`Salvador`);
// }else if(lines[0] === '11'){
//     console.log(`Sao Paulo`);
// }else if(lines[0] === '21'){
//     console.log(`Rio de Janeiro`);
// }else if(lines[0] === '32'){
//     console.log(`Juiz de Fora`);
// }else if(lines[0] === '19'){
//     console.log(`Campinas`);
// }else if(lines[0] === '27'){
//     console.log(`Vitoria`);
// }else if(lines[0] === '31'){
//     console.log(`Belo Horizonte`);
// }else{
//     console.log(`DDD nao cadastrado`);
// }

// 1051
// var input = `1701.12`;
// var lines = input.split('\n');
// const value = parseFloat(lines[0]);

// if(value > 4500.00){
//     let taxe1 = (1000 /100) * 8;
//     let taxe2 = (1500 /100) * 18;
//     let taxe3 = ((value - 4500) / 100) * 28;
//     let result = taxe1 + taxe2 + taxe3;
//     console.log(`R$ ${result.toFixed(2)}`);
// }else if(value > 3000.01 && value <= 4500.00){
//     let taxe1 = (1000/100)*8;
//     let taxe2 = ((value - 3000) / 100) * 18;
//     let result = taxe1 + taxe2;
//     console.log(`R$ ${result.toFixed(2)}`);
// }else if(value > 2000.01 && value <= 3000.00){
//     let taxe1 = ((value - 2000)/100) * 8;
//     console.log(`R$ ${taxe1.toFixed(2)}`);
// }else if(value <= 2000.00){
//     console.log(`Isento`);
// }

// 1052
// var input = `7`;
// var lines = input.split('\n');
// const value = parseInt(lines[0]);
// const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// month.find((X,i) => {
//     if(value == i+1){
//         console.log(X);
//     }
// });

// 1059
// for (let i = 1; i <= 100; i++) {
//     if(i % 2 == 0){
//         console.log(i);
//     }
// }

// 1060
// var input = `7
// -5
// 6
// -3.4
// 4.6
// 12`;
// var lines = input.split('\n');
// const value = lines.map(X => parseInt(X));
// let result = [];
// for(let i = 0; i <= value.length; i++) {
    
//     if(value[i] > 0){
//         result.push(value[i]);
//     }

// }
// console.log(`${result.length} valores positivos`);


// 1061
// var input = `Dia 5
// 08 : 12 : 23
// Dia 9
// 06 : 13 : 23`;
// var lines = input.split('\n');
// const [Dia1, day1] = lines[0].split(' '); // '5' 
// const [Dia2, day2] = lines[2].split(' ');// '9'
// const [h1,m1,s1] = lines[1].split(':'); //08 12 23
// const [h2,m2,s2] = lines[3].split(':');//06 13 23

// let sec = s2 - s1;
// let min = m2 - m1;
// let hour = h2 - h1;
// let day = day2 - day1;

// if(sec<0){
//     sec += 60
//     min -= 1
// }
// if(min<0){
//     min += 60
//     hour -= 1
// }
// if(hour<0){
//     hour += 24
//     day -= 1
// }

// console.log(`${day} dia(s)
// ${hour} hora(s)
// ${min} minuto(s)
// ${sec} segundo(s)`);

// 1064
// var input = `7
// -5
// 6
// -3.4
// 4.6
// 12`;
// var lines = input.split('\n');
// const value = lines.map(X => parseFloat(X));
// let result = [];
// for(let i = 0; i <= value.length; i++) {
    
//     if(value[i] > 0){
//         result.push(value[i]);
//     }

// }

// const sum_result = result.reduce((acc, val) => acc + val,0);
// const Avg = parseFloat(sum_result) / result.length;

// console.log(`${result.length} valores positivos
// ${Avg.toFixed(1)}`);


// 1065
// var input = `7
// -5
// 6
// -4
// 12`;
// var lines = input.split('\n');
// const value = lines.map(X => parseFloat(X));
// let result = [];
// for(let i = 0; i <= value.length; i++) {
    
//     if(value[i] % 2 === 0){
//         result.push(value[i]);
//     }

// }
// console.log(`${result.length} valores pares`);


// 1066
// var input = `-5
// 0
// -3
// -4
// 12`;
// var lines = input.split('\n');
// const value = lines.map(X => parseInt(X));
// let even = 0;
// let odd = 0;
// let positive = 0;
// let negative = 0;
// for(let i = 0; i < 5; i++) {
//     // even numbers
//     if(value[i] % 2 === 0){
//         even+=1;
//     }else{
        
//         odd+=1;
//     }
//     //positive numbers
//     if(value[i] > 0){
//         positive+=1;
//     }
//     //negative numbers
//     if(value[i] < 0){
//         negative+=1;
//     }
// }
// console.log(value.length)
// console.log(`${even} valor(es) par(es)
// ${odd} valor(es) impar(es)
// ${positive} valor(es) positivo(s)
// ${negative} valor(es) negativo(s)`);


// 1067
// var input = `8`
// var lines = input.split('\n');
// const value = parseInt(lines[0]);
// if(value >= 1 && value <= 1000){
//     for(let i = 1; i <= value; i++){
//         if(i % 2 !== 0){
//           console.log(i);
//         }
//     };
    
// }


// 1070
// var input = `8`
// var lines = input.split('\n');
// const value = parseInt(lines[0]);

// for(let i = value; i <= (value+11); i++){
//     if(i % 2 !== 0){
//         console.log(i);
//     }
// }

// 1071
// var input = `12
// 12`;
// var lines = input.split('\n');
// const [X,Y] = lines.map(X => parseInt(X));
// let sum = 0;
// for(let i = (Y+1); i < X; i++){
//     if(i % 2 !== 0){
//         sum+=i;
//     }
// }
// console.log(sum);


// 1072
// var input = `4
// 14
// 123
// 10
// -25`;
// var lines = input.split('\n');
// const value = lines.map(X => parseInt(X));
// const testCase = value.shift();
// let  inInterval = 0;
// let  outInterval = 0;
// for(let i = 0; i < testCase; i++){

//     if(value[i] >= 10 && value[i] <= 20){
//         inInterval+=1;
//     }else{
//         outInterval+=1;
//     }
// }
// console.log(`${inInterval} in
// ${outInterval} out`);

// 1073
// var input = `32`
// var lines = input.split('\n');
// const value = parseInt(lines[0]);

// for(let i = 1; i <= value; i++){
//     if(i % 2 === 0){
//         console.log(`${i}^2 = ${(i*i)}`);
//     }
// }


// 1074
// var input = `4
// -5
// 0
// 3
// -4`;
// var lines = input.split('\n');
// const value = lines.map(X => parseInt(X));
// const testCase = value.shift();

// for(let i = 0; i < testCase; i++){
//     if(value[i] !== 0){
//         if(value[i] % 2 === 0){
//             if(value[i] > 0){
//                 console.log('EVEN POSITIVE');
//             }else{
//                 console.log("EVEN NEGATIVE");
//             }
//         }else{
//             if(value[i] > 0){
//                 console.log('ODD POSITIVE');
//             }else{
//                 console.log('ODD NEGATIVE');
//             }
//         }
//     }
//     if(value[i] === 0){
//         console.log("NULL");
//     }
    
// }

// 1075
// var input = `13`
// var lines = input.split('\n');
// const value = parseInt(lines[0]);
// for(let i = 1; i < 10000; i++){
//     if(i % value === 2){
//         console.log(i)
//     }
// }

// 1078
// var input = `140`
// var lines = input.split('\n');
// const value = parseInt(lines[0]);
// for(let i = 1; i <= 10; i++){
//     console.log(`${i} x ${value} = ${i * value}`);

// }

// 1079
// var input = `3
// 9.1 7.5 4.3
// 8.3 5.5 6.1
// 9.1 7.8 5.6`
// var lines = input.split('\n');
// const testCase = lines.shift();

// for(let i = 0; i < testCase; i++) {
//     let [X,Y,Z] = lines[i].split(' ');
//     const result =  ((X * 2) + (Y * 3) + (Z * 5)) / 10; 
//     console.log(parseFloat(result).toFixed(1));
// }


// 1079 worng answers
// let A = lines.map(x => {
//     let [X,Y,Z] = x.split(' ')
//     const result =  ((X * 2) + (Y * 3) + (Z * 5)) / 10; 
//     console.log(parseFloat(result).toFixed(1));
// })
// let f = 7.24
// console.log(f.toFixed(1));


// 1080
// var input = `86371
// 47686
// 96720
// 31060
// 1979
// 39970
// 31643
// 15529
// 50837
// 10742
// 14155
// `
// var lines = input.split('\n');
// const value = lines.map(X => parseInt(X));
// const max = lines.reduce((a, b) => Math.max(a, b), -Infinity);
// const indexOf_MaxValue = value.indexOf(max);
// console.log(max);
// console.log(indexOf_MaxValue + 1);

// 1094
// var input = `10
// 10 C
// 6 R
// 15 S
// 5 C
// 14 R
// 9 C
// 6 R
// 8 S
// 5 C
// 14 R`
// var lines = input.split('\n');
// const testCase = lines.shift();

// let NewArr = [];

// const splitArr = lines.forEach(X => {
    
//     NewArr.push(X.split(' '))
// })

// let total_ani = 0;
// for(let i = 0; i < testCase; i++){
//     total_ani =  total_ani + parseInt(NewArr[i][0]);
// }
// const C = NewArr.filter(X => X[1] === 'C');
// const S = NewArr.filter(X => X[1] === 'S');
// const R = NewArr.filter(X => X[1] === 'R');
// const C_result = C.map(s => parseInt(s[0])) 
// const Total_coelhos = C_result.reduce((acc,i) => acc + i,0); //29
// const R_result = R.map(s => parseInt(s[0])) 
// const Total_ratos = R_result.reduce((acc,i) => acc + i,0); //29
// const S_result = S.map(s => parseInt(s[0])) 
// const Total_sapos = S_result.reduce((acc,i) => acc + i,0); //29
// console.log(`Total: ${total_ani} cobaias
// Total de coelhos: ${Total_coelhos}
// Total de ratos: ${Total_ratos}
// Total de sapos: ${Total_sapos}
// Percentual de coelhos: ${(Total_coelhos/total_ani *100).toFixed(2)} %
// Percentual de ratos: ${(Total_ratos/total_ani *100).toFixed(2)} %
// Percentual de sapos: ${(Total_sapos/total_ani *100).toFixed(2)} %`);


// 1095

// let I = [1];
// let J = [];

// for (let i = 60; i >= 0 ; i-=5){
//     J.push(i);
// }
// let Y = 1;
// for(let x= 1; x <= J.length; x++){
//     Y = Y + 3;
//     I.push(Y);
// }
// console.log(`I=${I[0]} J=${J[0]}
// I=${I[1]} J=${J[1]}
// I=${I[2]} J=${J[2]}
// I=${I[3]} J=${J[3]}
// I=${I[4]} J=${J[4]}
// I=${I[5]} J=${J[5]}
// I=${I[6]} J=${J[6]}
// I=${I[7]} J=${J[7]}
// I=${I[8]} J=${J[8]}
// I=${I[9]} J=${J[9]}
// I=${I[10]} J=${J[10]}
// I=${I[11]} J=${J[11]}
// I=${I[12]} J=${J[12]}`);

// 1096

// let i ;
// let j ;

// for(let i = 1; i <=9; i=i+2){
//     for(let j =7; j>=5;j--){
//         console.log(`I=${i} J=${j}`)
//     }
// }

// 1097
// let i ;
// let j ;

// for(let i = 1; i <= 9; i=i+2){
//     for(let j =6+i; j>3+i; j--){
//         console.log(`I=${i} J=${j}`);
// }}


// 1098
// let i ;
// let j ;

// for(let i = 0; i <= 2; i=i+0.2){
    
//     for(let j =1+i; j<=3+i; j++){
//         console.log(`I=${parseFloat(i.toFixed(1))} J=${parseFloat(j.toFixed(1))}`);
//     }
// }

// 1099

// let input = `7

// 4 5

// 13 10

// 6 4

// 3 3

// 3 5

// 3 4

// 3 8`
// let lines = input.split('\n');
// let testCase = lines.map(line => line.split(' '));


// for (let i = 0; i < testCase.length; i++) {
//     let element = testCase[i];
//     if(element.length === 2){
//       let numberOfArray = element.map(num => parseInt(num));
//       let start = Math.min(...numberOfArray);
//       let end = Math.max(...numberOfArray);
      
//       let sum = 0;
//       for (let i = start + 1; i < end; i++) {
//         if (i % 2 !== 0) {
//           sum += i;
//         }
//       }
      
//       console.log(sum);
      
    
//     }
// };


// 1101

// let input =`1 1
// 5`;
// let lines = input.split('\n');

// const output = lines.map(line => line.split(' '));

// for (let i = 0; i < output.length; i++) {
//     const numOfArray = output[i].map(num => parseInt(num))
    
//     if( numOfArray[0] <= 0 || numOfArray[1] <= 0){
//         break;
//     }else{
//         let start = Math.max(...numOfArray);
//       let end = Math.min(...numOfArray);
      
//       let sum = [];
//       for (let i = end; i <= start; i++) {
//         sum.push(i)
//     }
    
//     const result = sum.reduce((acc, sum) => acc + sum,0);
    
      
//     console.log(`${sum.join(' ')} Sum=${result}`);
        
//     }
// }


// 1113

let input =`5 4
7 2
3 8
2 2`
let lines = input.split('\n');
lines.forEach(line => {
    let [x,y] = line.split(' ');
    if(parseInt(x) > parseInt(y)){
        console.log('Decrescente');
    }else if(parseInt(x) < parseInt(y)){
        console.log('Crescente');
    }
});