## Lifecycle

### Fluxo de montagem e desmontagem de componentes
- componentWillMount: antes do componente montar, é renderizado somente uma vez, executa no lado do frontend e do servidor.
- componentDidMount: depois que o componente montou, é renderizado somente uma vez, executa somente no lado do frontend, é utilizado para fazer manipulações no DOM, por ex.
- componentWillUnmount: antes do componente desmontar, ou seja, antes de desaparecer da tela.

### Fluxo de atualização de componentes

- componentWillReceiveProps: tem como parametro nextProps. Executado antes de receber as props.
- shouldComponentUpdate: tem como parametro nextProps e nextState. Serve como uma validação para saber se atualiza o componente ou não, sempre deve retornar um boolean.
- componentWillUpdate: tem como parametro nextProps e nextState. Não pode usar o this.setState nesse método, é executado antes do componente atualizar.
- componentDidUpdate: tem como parametro prevProps e prevState. Executado logo após a atualização do componente, bom pra manter um histórico das mudanças ou analizar o que mudou.

