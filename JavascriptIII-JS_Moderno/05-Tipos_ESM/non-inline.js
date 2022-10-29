function group() {
  console.log("Export nomeado não-inline (agrupado)");
}
function exportDefault() {
  console.log("Export default não-inline");
}

//Export no inline
export { group };
//Export default no inline
export default exportDefault;
