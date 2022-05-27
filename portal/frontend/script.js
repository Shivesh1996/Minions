function submitForm() {

  const toastLiveExample = document.getElementById('liveToast');
  const backend = document.getElementById('backend');
  const frontend = document.getElementById('frontend');

  if (backend.value == "" || frontend.value == "") {
    let toast = new bootstrap.Toast(toastLiveExample);
    toast.show();
    return;
  }

  console.log(backend.value, frontend.value);
  let url = `http://localhost:3001/download/${backend.value}/${frontend.value}`;
  console.log(url);
  download(url);

}

function download(fileUrl) {
  var a = document.createElement("a");
  a.href = fileUrl;
  a.setAttribute("download", 'template.zip');
  a.click();
}