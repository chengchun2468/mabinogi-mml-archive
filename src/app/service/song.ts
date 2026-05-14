import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { Observable, of, shareReplay } from 'rxjs';
import { MMLSong, SongList } from '../interface/song';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class SongService {
  /*------API------*/
  private readonly apiUrl = 'https://script.google.com/macros/s/AKfycbxLescHZu2GSExHXvQrMpOQMS2wL2iS9McOxL0RtxPACIdPycFZaZqaE8mymxj5aVDv/exec';
  /*---------------*/
  private readonly http = inject(HttpClient);
  private songs$ = this.http.jsonp<MMLSong[]>(this.apiUrl, 'callback').pipe(shareReplay(1));
  private platformId = inject(PLATFORM_ID);
  /*---------------*/
  public _songs = signal<MMLSong[]>([]);
  public readonly songs = this._songs.asReadonly();

  constructor() {
    this.initData();
  }

  private initData() {
    this.getAllSongs().subscribe({
      next: (res) => this._songs.set(res),
      error: (err) => console.error('抓取失敗', err)
    });
  }

  getAllSongs(): Observable<MMLSong[]> {
    if (isPlatformBrowser(this.platformId)) {
      return this.songs$;
    }
    return of([]);
  }

  public readonly groupedSongs = computed(() => {
    const raw = this.songs();
    const map = new Map<string, SongList>();

    raw.forEach(item => {
      if (!map.has(item.song_id)) {
        map.set(item.song_id, {
          song_id: item.song_id,
          title: item.title,
          source: item.source,
          partsCount: 0,
          data: []
        });
      }
      const group = map.get(item.song_id)!;
      group.partsCount++;
      group.data.push(item);
    });

    return Array.from(map.values());
  });
}
