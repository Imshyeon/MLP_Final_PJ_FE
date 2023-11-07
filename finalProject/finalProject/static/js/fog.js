const fileInput = document.getElementById("fileInput");
const uploadedVideo = document.getElementById("uploadedVideo");
const uploadedImage = document.getElementById("uploadedImage");

fileInput.addEventListener("change", function () {
  const selectedFile = fileInput.files[0];
  if (selectedFile) {
    if (selectedFile.type.startsWith("image/")) {
      // 선택한 파일이 이미지인 경우
      uploadedVideo.style.display = "none";
      uploadedImage.style.display = "block";
      uploadedImage.src = URL.createObjectURL(selectedFile);
    } else if (selectedFile.type.startsWith("video/")) {
      // 선택한 파일이 비디오인 경우
      uploadedImage.style.display = "none";
      uploadedVideo.style.display = "block";
      uploadedVideo.src = URL.createObjectURL(selectedFile);
    } else {
      alert("이미지 또는 비디오 파일을 업로드하세요.");
    }
  }
});

const uploadButton = document.querySelector(".file-upload .btn");
uploadButton.addEventListener("click", function () {
  fileInput.click();
});