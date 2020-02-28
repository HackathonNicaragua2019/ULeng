/* import { Component, Output, EventEmitter } from '@angular/core';
import { GiphyService } from "../../api/giphy.service";

@Component({
  selector: 'app-gif-search',
  templateUrl: './gif-search.component.html',
  styleUrls: ['./gif-search.component.scss'],
  providers: [GiphyService],
})
export class GifSearchComponent {

  @Output() onSelect = new EventEmitter();
  @Output() onClose = new EventEmitter();

  gifs: any[] = [];
  isLoading: boolean = false;
  query: string = '';

  constructor(public GiphyService: GiphyService) {
    this.getTrending();
  }

  getTrending() {
    this.isLoading = true;

    this.GiphyService.trending()
      .subscribe(res => {
        this.gifs = res.data;
        this.isLoading = false;
      })
  }

  searchGif(query: string) {
    if (query.length === 0) return this.getTrending();
    this.isLoading = true;

    this.GiphyService.search(query)
      .subscribe(res => {
        this.gifs = res.data;
        this.isLoading = false;
      })
  }

  select(gif) {
    this.onSelect.emit(gif.images.downsized_medium.url);
  }

  close() {
    this.query = '';
    this.onClose.emit();
  }
}
 */