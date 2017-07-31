function titleFromCamel(camel) {
  const partialTitle = camel.replace(/([A-Z])/g, " $1");
  return partialTitle[0].toUpperCase() + partialTitle.slice(1);
}

export { titleFromCamel };
