const form = document.getElementById("form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const file = document.getElementById("file").files[0];
  if (file) {
    upload(file);
  }
  return false;
});

const upload = (file) => {
  const xhr = new XMLHttpRequest();

  // обработчик для отправки
  xhr.upload.onprogress = function (event) {
    const progress = document.getElementById("progress");
    progress.value = event.loaded / event.total;
  };

  xhr.onload = xhr.onerror = function () {
    if (this.status >= 200 && this.status < 300) {
      console.log("success");
    } else {
      console.log("error " + this.status);
    }
  };
  xhr.open(
    "POST",
    "https://students.netoservices.ru/nestjs-backend/upload",
    true
  );

  xhr.send(file);
};
