const formElement = document.querySelector("form");

const inpArr = [...formElement];

inpArr.forEach((inpElement) => {
  inpElement.addEventListener("focusout", ({ target }) => {
    if (target.type === "email") {
      if (target.value === "") {
        target.parentNode.setAttribute("data-empty", "true");
        target.parentNode.setAttribute("data-invalid", "false");
      } else {
        target.parentNode.setAttribute("data-empty", "false");
        let emailRegex = new RegExp(/\S+@\S+\.\S+/);
        if (emailRegex.test(target.value)) {
          target.parentNode.setAttribute("data-invalid", "false");
        } else target.parentNode.setAttribute("data-invalid", "true");
      }
    }

    if (target.value === "") {
      target.parentNode.setAttribute("data-empty", "true");
    } else {
      target.parentNode.setAttribute("data-empty", "false");
    }
  });
});
