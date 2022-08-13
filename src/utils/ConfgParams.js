const ConfigParams = (props) => {
  let newTitulo = props.titulo.split("(");
  let nameConsole = props.id
    .split("/")[1]
    .replaceAll("-", " ")
    .replace(/(^\w{1})|(\s+\w{1})/g, (letra) => letra.toUpperCase());

  props.titulo = newTitulo[0];
  props.nameConsole = nameConsole;

  return props;
};

export default ConfigParams;
