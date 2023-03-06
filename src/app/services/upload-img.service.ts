import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadImgService {

  constructor() { }
  CLOUD_NAME: string = "dcwibf9o5"
  UPLOAD_PRESET: string = "vt0iqgff"
  UPLOAD_URL: string = `https://api.cloudinary.com/v1_1/${this.CLOUD_NAME}/image/upload`

  public uploadImg(ev: any) {
    const formData = new FormData()
    formData.append('upload_preset', this.UPLOAD_PRESET)
    formData.append('file', ev.target?.files[0])

    return fetch(this.UPLOAD_URL, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(res => {
        return res
      })
      .catch(err => console.error(err))
  }
}
