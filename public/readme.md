## App Controle de portas

### Opções:
* servidor nuvem para servir o app principal
    <!-- * Sera alocado um servidor externo, para servir o app, de controle, e para os dados dos usuarios. -->
    * Tera um servidor local para controlar a porta.
    * O servidor local sera requisitado pelo servidor externo quando ouver alguma alteração, ou o servidor interno ira requisitar ao servidor externo de tempo em tempo.
    * Possibilidades:
        * Servidor local, tratara as requisições do app desde que essas requsiçoes deja feitas da rede interna.
        <!-- * Servidor local tera armazenado apenas os conjuntos de chaves permitidas e o seu horario, não sendo permitido atraves dele criar usuarios. -->
        * O app tera uma lista de ips:porta dos servidores de controle, ou os roteadores/hosters da rede farão esse redirecionamento atraves de um ip especifico.

    