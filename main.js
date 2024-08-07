import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))

$("#form").validate({
  rules: {
    firstname: "required",
    lastname: "required",
    email: {
      required: true,
      email: true,
    },
    message: "required",
    // checkbox: {
    //   required: true,
    // },
  },
  messages: {
    firstname: "This field is required.",
    lastname: "This field is required.",
    email: {
      required: "This field is required.",
      email: "Please enter a valid email",
    },
    message: "This field is required",
    // checkbox: "To submit this form, please consent to being contacted.",
  },
});

$("#form").on("submit", function (e) {
  e.preventDefault();
  if (!$("#checkbox").is(":checked")) {
    const errorMsg = $("#checkbox").next("label").children("p");
    errorMsg.removeClass("hidden");
    return;
  }
  const formDataArr = [...new FormData(this)];
  const formData = Object.fromEntries(formDataArr);
  console.log(formData);
  //   alert("Form submitted");
  //   console.log($("#form")[0]);
  console.log($(this)); // $(this) is jquery element on which jquery functions could be called
  if ($(this).valid()) {
    this.reset(); // (this ) is the html element, and reset() is called on html element. $(this).reset() won't work
    // $(".form-container").load("thanks.html");
    $(".toast").slideDown("slow");

    setTimeout(() => {
      $(".toast").slideUp("slow");
    }, 1800);
  }
  //
  //

  //   $.ajax({
  //     type: "post",
  //     url: $(this).attr("action"),
  //     data: formData,
  //     contentType: "application/x-www-form-urlencoded",
  //     success: function (responseData, textStatus, jqXHR) {
  //       this.reset();
  //       $(".form-container").load("thanks.html");

  //       //    alert("data saved");
  //     },
  //     error: function (jqXHR, textStatus, errorThrown) {},
  //   });
});
