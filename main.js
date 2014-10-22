define(function (require, exports, module) {
  'use strict';
	require("./django-mode");
  	var LanguageManager = brackets.getModule("language/LanguageManager");

  LanguageManager.defineLanguage("django", {
      name: "Django",
      mode: ["django", "text/x-django"],
      fileExtensions: ["html", "htm", "djhtml", "djhtm"],
      blockComment: ["{#", "#}"],
  });
});
