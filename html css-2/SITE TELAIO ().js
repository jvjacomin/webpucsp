interno Receber ()
int num;
escrever ("Digite um inteiro");
num = ler ();
retornar num;

Mostrar calculos (real res)
escrever ("O resultado é:" +res)

Real calculo (int n1, int n2)
real soma;
soma = n1 + n2;
retornar soma;

Real Subtracao ()
real diferenca;
int n1;n2;
n1 = Receber ();
n2 = Receber ();
diferenca = n1-n2;
retornar diferenca;

Multiplicacao (int n1, int n2)
real produto;
produto = n1*n2;
Mostrar resultado (produto);

Divisao ()
real quociente;
int n1,n2;
n1 = Receber ();
n2 = Receber ();
quociente = n1/n2;
Mostrar resultado (quociente);

Principal ()
int n1,n2;
real resultório;
n1 = receber ();
n2 = receber ();
resultado= adicao (n1,n2);
mostrar resultado (resultado);
n1 = receber ();
n2 = receber ();
Multiplicacao (n1,n2);
Divisao();