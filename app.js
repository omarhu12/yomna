this.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelectorAll(".question");
  questions.forEach((question) =>
    question.addEventListener("click", () => {
      if (question.parentNode.classList.contains("active")) {
        question.parentNode.classList.toggle("active");
      } else {
        questions.forEach((question) =>
          question.parentNode.classList.remove("active")
        );
        question.parentNode.classList.add("active");
      }
    })
  );
});

// Listen for submit

document
  .querySelector(".second button")
  .addEventListener("click", computeResults);

function computeResults(e) {
  // UI

  const UIDownPayment = document.getElementById("DownPayment").value;
  const UIHomePrice = document.getElementById("HomePrice").value;
  const UIinterest = document.getElementById("InterestRate").value;
  const UIyears = document.getElementById("Loanterm").value;
  const UIamount = UIHomePrice - UIDownPayment;
  // Calculate

  const principal = parseFloat(UIamount);
  const CalculateInterest = parseFloat(UIinterest) / 100 / 12;
  const calculatedPayments = parseFloat(UIyears) * 12;

  //Compute monthly Payment

  const x = Math.pow(1 + CalculateInterest, calculatedPayments);
  const monthly = (principal * x * CalculateInterest) / (x - 1);
  const monthlyPayment = monthly.toFixed(2);
  console.log(monthlyPayment);
  //Compute Interest

  const totalInterest = (monthly * calculatedPayments - principal).toFixed(2);

  //Compute Total Payment

  const totalPayment = (monthly * calculatedPayments).toFixed(2);

  //Show results

  document.getElementById("total").innerHTML = "$" + monthlyPayment;
  document.getElementById("tipAmount").innerHTML = "$" + totalPayment;
  document.getElementById("Interest").innerHTML = "%" + totalInterest;

  e.preventDefault();
}

const menuBtn = document.querySelector(".hamburger");
// const btn = document.querySelector(".menu-btn");
const navUl = document.querySelector("ol");

const a = document.querySelector("#about");
const m = document.querySelector("#mortgage");
const c = document.querySelector("#calculator");
const con = document.querySelector(".ol");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("is-active");
});

menuBtn.addEventListener("click", function () {
  navUl.classList.toggle("active");
});

a.addEventListener('click', function () {
    navUl.classList.remove("active");
    menuBtn.classList.remove("is-active");
})
m.addEventListener('click', function () {
    navUl.classList.remove("active");
    menuBtn.classList.remove("is-active");
})
c.addEventListener('click', function () {
    navUl.classList.remove("active");
    menuBtn.classList.remove("is-active");
})
con.addEventListener('click', function () {
    navUl.classList.remove("active");
    menuBtn.classList.remove("is-active");
})


