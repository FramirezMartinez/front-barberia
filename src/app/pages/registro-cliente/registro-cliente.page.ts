import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, MaxValidator, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.page.html',
  styleUrls: ['./registro-cliente.page.scss'],
})
export class RegistroClientePage implements OnInit {
  
  formularioRegistro!: FormGroup
  
  constructor(
    public fb:FormBuilder,
    public alertController: AlertController,
    public navCtrl:  NavController,
    
  ) {

    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'ApellidoPaterno': new FormControl("",Validators.required),
      'ApellidoMaterno': new FormControl("",Validators.required),
      'correo': new FormControl("",[Validators.required, Validators.email]),
      'numeroTelefono': new FormControl("",[Validators.required,Validators.maxLength(10)]),
      'password': new FormControl("",Validators.required),
      'confirmarPassword': new FormControl("",Validators.required)
    })
   }

  ngOnInit() {
  }
  async guardar(){
    
    var f =this.formularioRegistro.value;
    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        mode:'ios',
        header : 'Datos incompletos',
        message : 'Debes llenar todos los campos',
        buttons : ['Aceptar'],
      });
      await alert.present();
      return;
    }

    //obtenemos el nombre y usuario
    var usuario = {
      nombre: f.nombre,
      password:f.password
    }
    // Guardar en localstorage el nombre y contrasenia
    localStorage.setItem('usuario',JSON.stringify(usuario));
    localStorage.setItem('ingresado', 'true')
    this.navCtrl.navigateRoot('menu/inicio')
  }
}
