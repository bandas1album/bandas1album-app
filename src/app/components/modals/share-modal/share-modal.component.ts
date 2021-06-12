import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-share-modal',
  templateUrl: './share-modal.component.html',
  styleUrls: ['./share-modal.component.scss'],
})
export class ShareModalComponent implements OnInit {
  albumUrl: string = `https://bandas1album.com.br/${this.data.slug}`;
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
  }
}
