
/*
 * Another Life — Adventure Support
 * ระบบเสริมแยกจาก index.html
 *
 * ระยะแรกยังไม่แก้สถานะเกมเดิม
 * จะเปิดใช้ความสามารถทีละระบบหลังเชื่อมต่อ API
 */
(function () {
  "use strict";

  if (window.AnotherLifeAdventure) {
    console.warn("[Adventure] Extension already loaded.");
    return;
  }

  const Adventure = {
    version: "0.1.0",
    initialized: false,

    init() {
      if (this.initialized) return;

      this.initialized = true;
      console.info(
        "[Adventure] Support module loaded:",
        this.version
      );
    }
  };

  window.AnotherLifeAdventure = Adventure;

  Adventure.init();
})();

