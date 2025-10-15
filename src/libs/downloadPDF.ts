export const downloadFile = () => {
  fetch("curriculum.pdf").then((response) => {
    console.log(response);
    response.blob().then((blob) => {
      const fileURL = window.URL.createObjectURL(blob);
      const alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "CV Angel Jesus Gamboa Cruz.pdf";
      alink.click();
    });
  });
};
