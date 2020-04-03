import { ajax } from 'rxjs/ajax';

export const urlToBlob = async (url: string): Promise<Blob> => {
  const { response: file } = await ajax({
    url: url,
    responseType: 'arraybuffer'
  }).toPromise();
  return file;
};

export const blobToFile = (blob: Blob, suffix: string): File => {
  return new File([blob], `${new Date().toISOString()}__${suffix}.jpg`, {
    type: 'application/jpeg'
  });
};

export const fileToBase64 = (file): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  });
