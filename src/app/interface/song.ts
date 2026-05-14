export interface MMLSong {
  id: number;           // 資料庫流水號
  song_id: string;      // 譜曲編號 (可能重複)
  title: string;        // 曲名
  source: string;       // 主要分類
  instrument: string;   // 使用樂器
  rank?: string;        // 樂譜最低等級
  mml: string;          // 主體
  tags?: string;        // 標籤
  created_at: string;   // 創建時
  updated_at: string;   // 修改時
}

export interface SongList {
  song_id: string;
  title: string;
  source: string;
  partsCount: number;
  data: MMLSong[];
}

export const columnDefs: { key: string; label: string }[] = [
  { key: 'song_id', label: '編號' },
  { key: 'title', label: '曲名' },
  { key: 'source', label: '分類' },
  { key: 'partsCount', label: '聲部數' }
];