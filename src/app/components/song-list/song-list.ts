import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SongService } from '../../service/song';
import { columnDefs } from '../../interface/song';

@Component({
  selector: 'app-song-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './song-list.html',
  styleUrl: './song-list.scss',
})
export class SongList {
  private readonly songService = inject(SongService);
  public readonly displayList = this.songService.groupedSongs;
  public readonly columnDefs = columnDefs;
}
