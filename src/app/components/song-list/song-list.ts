import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SongService } from '../../core/service/song';
import { columnDefs } from '../../core/interface/song';
import { LoadingDirective } from "../../shared/loading/loading-directive";

@Component({
  selector: 'app-song-list',
  imports: [CommonModule, RouterLink, LoadingDirective],
  templateUrl: './song-list.html',
  styleUrl: './song-list.scss',
})
export class SongList {
  public readonly songService = inject(SongService);
  public readonly displayList = this.songService.groupedSongs;
  public readonly columnDefs = columnDefs;
}
