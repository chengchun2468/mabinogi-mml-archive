import { Routes } from '@angular/router';
import { SongList } from './components/song-list/song-list';
import { SongDetail } from './components/song-detail/song-detail';
import { Main } from './layouts/main/main';

export const routes: Routes = [
  {
    path: '',
    component: Main, 
    children: [
      { path: 'song-list', component: SongList },
      { path: 'song/:id', component: SongDetail },
      { path: '', redirectTo: 'song-list', pathMatch: 'full' },
    ]
  },
  { path: '**', redirectTo: 'song-list' }
];