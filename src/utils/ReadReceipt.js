const ReadReceipt = async (fileInput) => {
    const readAsDataURL = (fileInput) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onerror = () => {
          reader.abort();
          reject(new Error("Error reading file."));
        };
        reader.addEventListener("load", () => {
          
          resolve(reader.result);
        }, false);
        reader.readAsDataURL(fileInput);
      });
    };      
    const valid = await isFileReceipt(fileInput)
    console.log(valid)
    if(valid){
      return readAsDataURL(fileInput)
    }else{
      return null
    }
}

const isFileReceipt = (file) => {
  return file && file['type'].split('/')[0] === 'application';
}

export default ReadReceipt