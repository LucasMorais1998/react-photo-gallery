import { getDownloadURL, listAll, ref } from "firebase/storage";

import { storage } from "../libs/firebase";

import { Photo } from "../@types/Photo";

export const getAll = async () => {
  let list: Photo[] = [];

  const imagesFolder = ref(storage, "images");

  const photoList = await listAll(imagesFolder);

  for (let i in photoList.items) {
    let photoURL = await getDownloadURL(photoList.items[i]);

    list.push({
      name: photoList.items[i].name,
      url: photoURL,
    });
  }

  return list;
};
