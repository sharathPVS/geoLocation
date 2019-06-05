import { Component, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { apiService , values} from '../apiService';
import { Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { loginUserData, logOutfactory, geoLocationFactory,SimFactory } from '../factories/globalFactories';
import { Geolocation } from '@ionic-native/geolocation/ngx';


import { ActionSheetController, ToastController, Platform, LoadingController } from '@ionic/angular';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
import { File, FileEntry } from '@ionic-native/file/ngx';
//import { HttpClient } from '@angular/common/http';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Storage } from '@ionic/storage';

import { finalize } from 'rxjs/operators';
 
const STORAGE_KEY = 'my_images';


const H = window['H'];

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  map: any;
  username: string;
  password: string;
  message: string;
  // register Data .. password is there  duplicates are error 
  name: string;
  email: string;
  phone: number;
  companyName: string;
  fileUrl: any = null;
  respData: any;
  images = [];
  public positionData: any;

  // these are the  on click button show and hide the  fetures 
  public loginButton: boolean = false;
  public signUpButton: boolean = false;
  public uploadImage: boolean = false;
  public mapsData: boolean = true;

  // error messages 
  public userEmailMessage: string;
  private loginData: any;
  public existingUser: boolean = false;
  @ViewChild('map') mapContainer: ElementRef;

   constructor(private router: Router, public geolocation: Geolocation,
  private http: HttpClient, public camera: Camera,
    public file: File, public webview: WebView,public ref: ChangeDetectorRef,
    public actionSheetController: ActionSheetController, public toastController: ToastController,
    public storage: Storage, public plt: Platform, public loadingController: LoadingController) {
    logOutfactory.setAdminLoginFactory(true);
    loginUserData.initialiseLoginUsereDataFactory();
    this.location();

  }

  location() {
    this.geolocation.getCurrentPosition().then((resp) => {
      // console.log(resp.coords)
      this.mapData({ lat: resp.coords.latitude, lon: resp.coords.longitude })
    }).catch((error) => {
      //console.log('Error getting location', error);
    });

  }


  // display in map 
  public mapData(val) {
    let coordsData = { lat: val.lat, lng: val.lon };

    const platform = new H.service.Platform({
      app_id: 'Xs9OgBdukNyvJbPrJjS7',
      app_code: 'rveTk4vWm3IgrJo4qdb_0g',
      useCIT: true,
      useHTTPS: true
    });
    const defaultLayers = platform.createDefaultLayers({
      tileSize: 256 * Math.min(2, devicePixelRatio),
      ppi: devicePixelRatio > 1 ? 320 : 72
    });
    const map = new H.Map(
      this.mapContainer.nativeElement,
      defaultLayers.normal.map,
      {
        center: coordsData,
        pixelRatio: Math.min(2, devicePixelRatio),
        zoom: 10
      }
    );

    var marker = new H.map.Marker(coordsData);
    map.addObject(marker);

    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
    const ui = H.ui.UI.createDefault(map, defaultLayers);

    return map;

  }


  submit() {
    this.message = " Fetching Login Details ..........";
    // for login 
    // get the data from db  with validation 
    //console.log(apiService.login + this.username);
    this.http.get(apiService.login + this.username).subscribe(data => {
      this.loginData = data;
      console.log(data);

      if (this.loginData == null) {
        this.message = " Your not a Existing Usere.. ";
      } else {


        // console.log(this.loginData.message.rows[0].value);
        if (this.loginData._id == this.username && this.loginData.password == this.password) {
          if (this.loginData.state == "active") {
            if (this.loginData._id == "admin") {
              this.message = "Admin Login success!!!!!";
              // admin page redirect 
              //this.router.navigateByUrl('/location');
              this.router.navigateByUrl('/adminApprove');
            } else {
              this.message = this.loginData._id + "Login success!!!!!";
              //console.log("login user data", this.loginData);
              loginUserData.setLoginUserData(this.loginData);
              this.router.navigateByUrl('/vendorDashboard');

            }
            //this.router.navigateByUrl('/location');
            //this.router.navigateByUrl('/simData');
          } else {
            this.message = "Your Account is Inactive.Kindly Contact Admin.";
          }

        }
        else {
          this.message = "Oops!! Username or password is Wrong";
        }
      }
    },error =>{
       console.log(error)
 
    });

  }
  login() {
    // only  for sisplay the login feilds 
    this.loginButton = !this.loginButton;
    this.signUpButton = false;
    this.message = '';
    this.uploadImage = false;
    this.mapsData = false;

  }
  signUp() {
    this.signUpButton = !this.signUpButton;
    this.loginButton = false;
    this.uploadImage = false;
    this.message = '';
    this.mapsData = false;
  }
  RegisterSubmit() {

    if (this.name == undefined || this.name == "" || this.name == null) {
      this.userEmailMessage = 'Please Enter Name';
    }
    else if (this.email == undefined || this.email == "" || this.email == null) {
      this.userEmailMessage = 'Please Enter email';
    }
    else if (this.phone == undefined || this.phone == 0 || this.phone == null) {
      this.userEmailMessage = 'Please Enter phone';
    }
    else if (this.password == undefined || this.password == "" || this.password == null) {
      this.userEmailMessage = 'Please Enter password';
    }
    else if (this.companyName == undefined || this.companyName == "" || this.companyName == null) {
      this.userEmailMessage = 'Please Enter Company name';
    }
    else {
      this.userEmailMessage = 'Storing Data....';
      this.http.post(apiService.signUp,
        {
          _id: this.email,
          name: this.name,
          email: this.email,
          phone: this.phone,
          password: this.password,
          company: this.companyName,
          state: "inActive"
        }).subscribe(
          data => {
            console.log("POST Request is successful ", data);
            this.userEmailMessage = 'Registered successfully,An Verification Email has been sent to Your Email';
            this.reset();
          },
          error => {

            console.log("Error", error);

          });
    }

  }
  reset() {
    this.name = '',
      this.email = '';
    this.phone = 0;
    this.password = '';
    this.companyName = '';

  }
  onChange() {
    this.message = "";
    this.userEmailMessage = "";
    if (this.email) // if a is Not negative,undefined,null,empty value then...
    {
      this.checkUserNameExists(this.email);
    }
  }
  upload() {
    this.uploadImage = !this.uploadImage;
    this.signUpButton = false;
    this.loginButton = false;
    this.message = '';
    this.mapsData = false;
    //alert("upload data")
  }
  checkUserNameExists(email) {
    console.log("Entered Email id-->" + email);
    this.http.get(apiService.checkUserExists + email).subscribe(data => {
      this.loginData = data;
      if (this.loginData !== null) {
        console.log('Api Response-->' + this.loginData._id)
        this.userEmailMessage = 'Email Id Already Exists';        
      }
    });
  }

  //Image upload code

loadStoredImages() {
    (this.images.length != 0) ? this.images = [] : this.images;
    this.storage.get(STORAGE_KEY).then(images => {
      //alert('images :' + images);
      if (images) {
        let arr = JSON.parse(images);
        this.images = [];
        for (let img of arr) {
          let filePath = this.file.dataDirectory + img;
          let resPath = this.pathForImage(filePath);
          this.images.push({ name: img, path: resPath, filePath: filePath });
          // alert("pushed Data: " + this.images);
        }
      }
    });
  }

  pathForImage(img) {
    //alert("pathForImage:-->" + img)
    if (img === null) {
      return '';
    } else {
      let converted = this.webview.convertFileSrc(img);
      return converted;
    }
  }

  async presentToast(text) {
    const toast = await this.toastController.create({
      message: text,
      position: 'bottom',
      duration: 3000
    });
    toast.present();
  }
  // call done from user side 
  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      header: "Select Image source",
      buttons: [{
        text: 'Load from Library',
        handler: () => {
          this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Use Camera',
        handler: () => {
          this.takePicture(this.camera.PictureSourceType.CAMERA);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
      ]
    });
    await actionSheet.present();
  }

  takePicture(sourceType: PictureSourceType) {
    var options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };

    this.camera.getPicture(options).then(imagePath => {
      if (this.plt.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
        //alert("If android hited" + imagePath ) 

        // From gelary
        let correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
        let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
        this.copyFileToLocalDir(correctPath, currentName, this.createFileName());

      } else {
        // from camera 
        // alert("else hited" + imagePath)
        var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
        var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
        this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
      }
    });

  }
  createFileName() {
    var d = new Date(),
        n = d.getTime(),
      newFileName =  SimFactory.getSimFactory().simSerialNumber + ".jpg";
    return newFileName;
  }

  copyFileToLocalDir(namePath, currentName, newFileName) {
    this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(success => {
      // alert("newFileName --> " + newFileName); 
      this.updateStoredImages(newFileName);
    }, error => {
      this.presentToast('Error while storing file.');
    });
  }

  updateStoredImages(name) {
    //alert( 'updateStoredImages -->' + name )
    this.storage.get(STORAGE_KEY).then(images => {
      let arr = JSON.parse(images);

      if (!arr) {

        let newImages = [name];
        this.storage.set(STORAGE_KEY, JSON.stringify(newImages));

      } else {

        arr.push(name);
        this.storage.set(STORAGE_KEY, JSON.stringify(arr));
      }

      let filePath = this.file.dataDirectory + name;
      let resPath = this.pathForImage(filePath);

      let newEntry = {
        name: name,
        path: resPath,
        filePath: filePath
      };

      this.images = [newEntry, ...this.images];
      //alert("images: --> " + this.images);
      this.ref.detectChanges(); // trigger change detection cycle
    });
  }

  deleteImage(imgEntry, position) {
    this.images.splice(position, 1);

    this.storage.get(STORAGE_KEY).then(images => {
      let arr = JSON.parse(images);
      let filtered = arr.filter(name => name != imgEntry.name);
      this.storage.set(STORAGE_KEY, JSON.stringify(filtered));

      var correctPath = imgEntry.filePath.substr(0, imgEntry.filePath.lastIndexOf('/') + 1);

      this.file.removeFile(correctPath, imgEntry.name).then(res => {
        this.presentToast('File removed.');
      });
    });
  }


  startUpload(imgEntry, position) {
    this.positionData = position;
    //alert('upload Button Hited ==>' + imgEntry)
    this.file.resolveLocalFilesystemUrl(imgEntry.filePath)
      .then(entry => {
        (<FileEntry>entry).file(file => this.readFile(file))
      })
      .catch(err => {
        this.presentToast('Error while reading file.');
      });
  }

  readFile(file: any) {
    //alert("reading the file from input "+ file);
    const reader = new FileReader();
    reader.onloadend = () => {
      const formData = new FormData();
      const imgBlob = new Blob([reader.result], {
        type: file.type,
      });

      //alert("blobImage --> " + imgBlob);
      //alert("file " + file);
      formData.append('myImage', imgBlob, file.name);
      alert("SIMInfo" +SimFactory.getSimFactory().simSerialNumber);
      this.uploadImageData(formData);
    };
    reader.readAsArrayBuffer(file);
  }

  async uploadImageData(formData: FormData) {
    const loading = await this.loadingController.create({});
    await loading.present();
     
//simNumberData: SimFactory.getSimFactory().simSerialNumber,

    this.http.post(apiService.uploadImage + '?collection=' + values.uploadImageCollection, formData)
      .pipe(
        finalize(() => {
          loading.dismiss();
        })
      )
      .subscribe(res => {
        //alert("upload REs" + JSON.stringify(res))
        if (res['message'] == 'Data submitted successfully.') {
          // alert("uploaded")
          this.presentToast('File upload complete.');
          this.images.splice(this.positionData, 1);

        } else {
          //alert("faild");
          this.presentToast('File upload failed.')
        }
      });
  }
 
  

}

