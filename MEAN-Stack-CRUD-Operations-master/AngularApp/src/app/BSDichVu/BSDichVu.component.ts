import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { BSDichVuService } from '../shared/BSDichVu.service';
import { BSDichVu } from '../shared/BSDichVu.model';

declare var M: any;

@Component({
  selector: 'app-BSDichVu',
  templateUrl: './BSDichVu.component.html',
  styleUrls: ['./BSDichVu.component.css'],
  providers: [BSDichVuService]
})
export class BSDichVuComponent implements OnInit {

  constructor(private BSDichVuService: BSDichVuService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshBSDichVuList();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.BSDichVuService.selectedBSDichVu = {
      _id: "",
      MaDichVu: "",
      MaBacSi: "",
      TenDichVu: "",
      TenBacSi: "",
      DonGiaDichVu: null
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.BSDichVuService.postBSDichVu(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshBSDichVuList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      this.BSDichVuService.putBSDichVu(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshBSDichVuList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  refreshBSDichVuList() {
    this.BSDichVuService.getBSDichVuList().subscribe((res) => {
      this.BSDichVuService.dsBSDichVu = res as BSDichVu[];
    });
  }

  onEdit(BSDV: BSDichVu) {
    this.BSDichVuService.selectedBSDichVu = BSDV;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.BSDichVuService.deleteBSDichVu(_id).subscribe((res) => {
        this.refreshBSDichVuList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }

}
