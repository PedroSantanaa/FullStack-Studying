function show() {
  //Por Id
  let elementName = document.getElementById("name");
  let NameValue = elementName.value;
  console.log(NameValue);
  //Por name
  let elementName1 = document.getElementsByName("phone");
  let phoneValue = elementName1[0].value;
  console.log(phoneValue);
  //Por query
  let elementName2 = document.querySelectorAll(
    "div#phones input[name='phone']"
  );
  console.log(elementName2);
  console.log(elementName2[1].value);
  //Por tag
  let elementName3 = document.getElementsByTagName("input");
  console.log(elementName3);
  console.log(elementName3[0].value);
}
