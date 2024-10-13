import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, FormArray, Validators } from '@angular/forms';

// Data Get
import { addressdata } from './data';
import { AddressModel } from './address.model';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent {

  // bread crumb items
  breadCrumbItems!: Array<{}>;

  adresses: any;
  addressmodal: boolean = false;
  removemodal: boolean = false;
  addressForm!: UntypedFormGroup;
  submitted: any;
  econtent: any;
  removeadressid: any;

  constructor(private formBuilder: UntypedFormBuilder) {
    this.adresses = addressdata
  }

  ngOnInit(): void {

    /**
       * BreadCrumb
       */
    this.breadCrumbItems = [
      { label: 'Shop' },
      { label: 'Address', active: true }
    ];

    /**
    * Form Validation
    */
    this.addressForm = this.formBuilder.group({
      ids: [''],
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      type: ['', [Validators.required]]
    });
  }

  showDialog() {
    this.submitted = false;
    this.addressmodal = true;
    setTimeout(() => {
      var modelTitle = document.querySelector('.modal-title') as HTMLAreaElement;
      modelTitle.innerHTML = 'Add New Address';
      var updateBtn = document.getElementById('addNewAddress') as HTMLAreaElement;
      updateBtn.innerHTML = "Add";
    }, 10);
    this.addressForm = this.formBuilder.group({
      ids: '',
      name: '',
      address: '',
      phone: '',
      type: ''
    });
  }

  // Edit Adress
  EditDialog(id: any) {
    this.submitted = false;
    this.addressmodal = true;
    setTimeout(() => {
      var modelTitle = document.querySelector('.modal-title') as HTMLAreaElement;
      modelTitle.innerHTML = 'Edit Address';
      var updateBtn = document.getElementById('addNewAddress') as HTMLAreaElement;
      updateBtn.innerHTML = "Update";
    }, 10);
    this.econtent = this.adresses[id];
    this.addressForm.controls['ids'].setValue(this.econtent.id);
    this.addressForm.controls['name'].setValue(this.econtent.name);
    this.addressForm.controls['address'].setValue(this.econtent.address);
    this.addressForm.controls['phone'].setValue(this.econtent.phone);
    this.addressForm.controls['type'].setValue(this.econtent.type);
  }

  // Remove Adress
  RemoveDialog(id: any) {
    this.removemodal = true;
    this.removeadressid = id
  }

  /**
 * Form data get
 */
  get form() {
    return this.addressForm.controls;
  }

  /**
 * Save user
 */
  saveAddress() {
    if (this.addressForm.valid) {
      if (this.addressForm.get('ids')?.value) {
        this.adresses = addressdata.map((adress: { id: any; }) => adress.id === this.addressForm.get('ids')?.value ? { ...adress, ...this.addressForm.value } : adress);
        this.addressmodal = false;
      } else {
        const name = this.addressForm.get('name')?.value;
        const address = this.addressForm.get('address')?.value;
        let phone = this.addressForm.get('phone')?.value;
        const type = this.addressForm.get('type')?.value;

        this.adresses.push({
          id: this.adresses.length + 1,
          name,
          address,
          phone,
          type
        })
        this.addressmodal = false;
        console.log(addressdata)
      }
    }
  }

  // Delete Adress
  deleteaddress() {
    this.adresses.splice(this.removeadressid, 1)
    this.removemodal = false;
  }
}
