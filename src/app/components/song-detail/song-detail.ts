import { Component, computed, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { SongService } from '../../core/service/song';

@Component({
  selector: 'app-song-detail',
  imports: [],
  templateUrl: './song-detail.html',
  styleUrl: './song-detail.scss',
})
export class SongDetail {
  private router = inject(Router);
  private songService = inject(SongService);
  public id = input.required<string>();

  // 取得網址上的 id，並自動從 Service 的 groupedSongs 中找出對應的那一組
  public readonly songInfo = computed(() => {
    return this.songService.groupedSongs().find(s => s.song_id === this.id());
  });

  async copyToClipboard(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      alert('複製成功！快去瑪奇貼上吧～'); 
    } catch (err) {
      console.error('無法複製: ', err);
    }
  }

  public backToList() {
    this.router.navigate(['/song-list']);
  }
}
