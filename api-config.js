// ============================================================
// CẤU HÌNH ANIVIET v4
// ============================================================
window.ANIVIET_CONFIG = {
  authApi: "https://sginup-loginsystem.aniviet.workers.dev",
  shopApi: "https://shop-system.aniviet.workers.dev",
  chatApi: "https://chatbox.aniviet.workers.dev",
  contentApi: "https://content-worker.aniviet.workers.dev",
  oauthSyncApi: "https://oauth-sync-aniviet.aniviet.workers.dev",
  // Phương án 2 (worker trung gian) ĐÃ TẮT: Cloudflare free plan chặn
  // Worker→Worker bằng error 1042, nên nó chỉ thêm một request chết và che
  // mất lỗi thật. Để "" để tắt.
  corsP2Api: "",
  anilistApi: "https://anilist-proxyql.aniviet.workers.dev",
  mywaifulistApi: "https://aniviet-to-mywaifulist.aniviet.workers.dev",
  watchPartyApi: "https://aniviet-watchparty.aniviet.workers.dev",
  // Trang web ANIGLOBAL: them /ANIVIET de tao app, /docs de xem huong dan.
  aniglobalSite: "https://aniglobal.github.io/ANIGLOBAL_API",
};

window.MD_WORKER = "https://anivietdb.aniviet.workers.dev";
