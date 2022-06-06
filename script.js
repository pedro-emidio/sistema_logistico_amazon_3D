const mng = document.getElementById("manager");
const mycamera = document.getElementById("myCamera");
const audio1 = new Audio("assets/1.mp4");
const audio2 = new Audio("assets/2.mp4");
const audio3 = new Audio("assets/3.mp4");
const audio4 = new Audio("assets/4.mp4");
const audio5 = new Audio("assets/5.mp4");
const audio6 = new Audio("assets/6.mp4");
const audio7 = new Audio("assets/7.mp4");
const audio8 = new Audio("assets/8.mp4");
const audio9 = new Audio("assets/9.mp4");

function firstStep() {
  currentStep = () => {};
  const start = () => {
    audio2.play();
    mycamera.setAttribute("velocity", "6 0 0");
    mng.setAttribute("rotation", "0 90 0");
    mng.setAttribute("velocity", "6 0 0");
    const move2 = (evt) => {
      if (
        evt.detail.name === "position" &&
        evt.target.getAttribute("position").z >= 90
      ) {
        audio3.play();
        audio3.addEventListener("ended", () => {
          currentStep = secondStep;
        });
        mycamera.setAttribute("velocity", "0 0 0");
        mng.setAttribute("rotation", "0 180 0");
        mng.setAttribute("velocity", "0 0 0");
        mng.removeEventListener("componentchanged", move2);
      }
    };
    const move = (evt) => {
      if (
        evt.detail.name === "position" &&
        evt.target.getAttribute("position").x >= 37
      ) {
        mycamera.setAttribute("velocity", "0 0 7");
        mng.setAttribute("rotation", "0 0 0");
        mng.setAttribute("velocity", "0 0 7");
        mng.removeEventListener("componentchanged", move);
        mng.addEventListener("componentchanged", move2);
      }
    };

    mng.addEventListener("componentchanged", move);
  };
  audio1.addEventListener("ended", start);
  audio1.play();
}
function secondStep() {
  currentStep = () => {};
  audio4.play();
  mycamera.setAttribute("velocity", "0 0 -10");
  mng.setAttribute("velocity", "0 0 -10");
  const move3 = (evt) => {
    if (
      evt.detail.name === "position" &&
      evt.target.getAttribute("position").z >= 90
    ) {
      audio5.play();
      audio5.addEventListener("ended", () => {
        currentStep = thirdStep;
      });
      mycamera.setAttribute("velocity", "0 0 0");
      mng.setAttribute("rotation", "0 180 0");
      mng.setAttribute("velocity", "0 0 0");
      mng.removeEventListener("componentchanged", move3);
    }
  };
  const move2 = (evt) => {
    if (
      evt.detail.name === "position" &&
      evt.target.getAttribute("position").x <= 2
    ) {
      mycamera.setAttribute("velocity", "0 0 7");
      mng.setAttribute("rotation", "0 0 0");
      mng.setAttribute("velocity", "0 0 7");
      mng.removeEventListener("componentchanged", move2);
      mng.addEventListener("componentchanged", move3);
    }
  };
  const move = (evt) => {
    if (
      evt.detail.name === "position" &&
      evt.target.getAttribute("position").z <= 2
    ) {
      mycamera.setAttribute("velocity", "-10 0 0");
      mng.setAttribute("rotation", "0 -90 0");
      mng.setAttribute("velocity", "-10 0 0");
      mng.removeEventListener("componentchanged", move);
      mng.addEventListener("componentchanged", move2);
    }
  };

  mng.addEventListener("componentchanged", move);
}
function thirdStep() {
  currentStep = () => {};
  audio6.play();
  mycamera.setAttribute("velocity", "0 0 -10");
  mng.setAttribute("velocity", "0 0 -10");
  const move3 = (evt) => {
    if (
      evt.detail.name === "position" &&
      evt.target.getAttribute("position").z >= 90
    ) {
      audio7.play();
      audio7.addEventListener("ended", () => {
        currentStep = fourthStep;
      });
      mycamera.setAttribute("velocity", "0 0 0");
      mng.setAttribute("rotation", "0 180 0");
      mng.setAttribute("velocity", "0 0 0");
      mng.removeEventListener("componentchanged", move3);
    }
  };
  const move2 = (evt) => {
    if (
      evt.detail.name === "position" &&
      evt.target.getAttribute("position").x <= -27
    ) {
      mycamera.setAttribute("velocity", "0 0 6");
      mng.setAttribute("rotation", "0 0 0");
      mng.setAttribute("velocity", "0 0 6");
      mng.removeEventListener("componentchanged", move2);
      mng.addEventListener("componentchanged", move3);
    }
  };
  const move = (evt) => {
    if (
      evt.detail.name === "position" &&
      evt.target.getAttribute("position").z <= 2
    ) {
      mycamera.setAttribute("velocity", "-6 0 0");
      mng.setAttribute("rotation", "0 -90 0");
      mng.setAttribute("velocity", "-6 0 0");
      mng.removeEventListener("componentchanged", move);
      mng.addEventListener("componentchanged", move2);
    }
  };

  mng.addEventListener("componentchanged", move);
}
function fourthStep() {
  currentStep = () => {};
  audio8.play();
  audio8.addEventListener("ended", () => {
    fithStep();
  });
  mycamera.setAttribute("velocity", "0 0 -10");
  mng.setAttribute("velocity", "0 0 -10");
  const move3 = (evt) => {
    if (
      evt.detail.name === "position" &&
      evt.target.getAttribute("position").z >= 90
    ) {
      mycamera.setAttribute("velocity", "0 0 0");
      mng.setAttribute("rotation", "0 180 0");
      mng.setAttribute("velocity", "0 0 0");
      mng.removeEventListener("componentchanged", move3);
    }
  };
  const move2 = (evt) => {
    if (
      evt.detail.name === "position" &&
      evt.target.getAttribute("position").x <= -54
    ) {
      mycamera.setAttribute("velocity", "0 0 10");
      mng.setAttribute("rotation", "0 0 0");
      mng.setAttribute("velocity", "0 0 10");
      mng.removeEventListener("componentchanged", move2);
      mng.addEventListener("componentchanged", move3);
    }
  };
  const move = (evt) => {
    if (
      evt.detail.name === "position" &&
      evt.target.getAttribute("position").z <= 2
    ) {
      mycamera.setAttribute("velocity", "-10 0 0");
      mng.setAttribute("rotation", "0 -90 0");
      mng.setAttribute("velocity", "-10 0 0");
      mng.removeEventListener("componentchanged", move);
      mng.addEventListener("componentchanged", move2);
    }
  };

  mng.addEventListener("componentchanged", move);
}
function fithStep() {
  currentStep = () => {};
  audio9.play();
  mycamera.setAttribute("velocity", "0 0 -6");
  mng.setAttribute("velocity", "0 0 -6");

  const move2 = (evt) => {
    if (
      evt.detail.name === "position" &&
      evt.target.getAttribute("position").x >= 1
    ) {
      mycamera.setAttribute("velocity", "0 0 0");
      mng.setAttribute("rotation", "0 180 0");
      mng.setAttribute("velocity", "0 0 0");
      mng.removeEventListener("componentchanged", move2);
      currentStep = firstStep;
    }
  };
  const move = (evt) => {
    if (
      evt.detail.name === "position" &&
      evt.target.getAttribute("position").z <= 2
    ) {
      mycamera.setAttribute("velocity", "3 0 0");
      mng.setAttribute("rotation", "0 90 0");
      mng.setAttribute("velocity", "3 0 0");
      mng.removeEventListener("componentchanged", move);
      mng.addEventListener("componentchanged", move2);
    }
  };

  mng.addEventListener("componentchanged", move);
}

let currentStep = firstStep;

document.onkeydown = (event) => {
  currentStep();
};
