import { Component } from "./Component.js";
import { Form } from "./Form.js";
import { Input } from "./Input.js";
import { Label } from "./Label.js";

const title = new Component("h1", "body", { textContent: "olá,mundo" });
console.log(title);
title.render();

title.tag = "h3";
title.build().render();
const form = new Form("body");
const label = new Label("Nome:", form, { htmlFor: "nameInput" });
const newInput = new Input(form, { id: "nameInput", name: "name" });
form.render();
label.render();
form.addChildren(newInput);
