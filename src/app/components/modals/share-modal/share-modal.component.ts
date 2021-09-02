import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-share-modal',
  templateUrl: './share-modal.component.html',
  styleUrls: ['./share-modal.component.scss'],
})
export class ShareModalComponent implements OnInit {
  @ViewChild('input') input: any;
  albumUrl: string = this.data.link;
  twitterUrl: string = `https://twitter.com/intent/tweet?text=${this.data.title} - ${this.data.artist} (${this.data.released}) ${this.albumUrl} via @bandas1album`;
  facebookUrl: string = `https://www.facebook.com/sharer/sharer.php?u=${this.albumUrl}`;
  whatsappUrl: string = `https://api.whatsapp.com/send?text=${this.data.title} - ${this.data.artist} (${this.data.released}) ${this.albumUrl}`;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private clipboard: Clipboard
  ) {}

  ngOnInit(): void {}

  copyAlbumUrl() {
    this.clipboard.copy(this.albumUrl);
    this.input.nativeElement.select();
  }
}
