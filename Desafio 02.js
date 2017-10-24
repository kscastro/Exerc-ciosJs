Desafio 02
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.

function soma(a,b) {
	
	return a + b;
}


// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.

var resultado = soma(4,6) + 5 ;

// Qual o valor atualizado dessa variável?

resultado = 15;

// Declare uma nova variável, sem valor.

var valor;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/

function adicione_valor() {

	valor = 10;
	return "O valor da variável agora é " + valor;
	
}

// Invoque a função criada acima.

adicione_valor();

// Qual o retorno da função? (Use comentários de bloco).

/*O valor da vairavel agora é 10*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/

function calculadora(a,b,c) {
	var teste = "Preencha todos os valores corretamente!"
	if(a === undefined || b === undefined || c === undefined){
		return teste;
	}else{
		return a * b * c + 2;
	}
	
}

// Invoque a função criada acima, passando só dois números como argumento.

calculadora(2,2);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

//Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
calculadora(4,5,2);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

//42

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/

function newTeste(e,f,g) {
	if(e !== undefined && f === undefined && g === undefined){
			return e;
		}else if (e !== undefined && f !== undefined && g === undefined){
			return e + f;
		}else if(e !== undefined && f !== undefined && g !== undefined){
			return (e + f) / g;
		}else if (e === undefined && f === undefined && g === undefined){
			return false;
		}else{
			return null;
		}
	
}


// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

newTeste();
//false
newTeste(2);
//2
newTeste(5,6);
//11
newTeste(20,4,6);
//4