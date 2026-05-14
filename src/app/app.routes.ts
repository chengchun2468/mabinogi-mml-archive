import { Routes } from '@angular/router';
import { SongList } from './components/song-list/song-list';
import { SongDetail } from './components/song-detail/song-detail';

export const routes: Routes = [
  { path: 'song-list', component: SongList },
  { path: 'song/:id', component: SongDetail },
  { path: '', redirectTo: 'song-list', pathMatch: 'full' },
  { path: '**', redirectTo: 'song-list' }
];