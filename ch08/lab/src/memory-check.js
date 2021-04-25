const fs = require("fs");

if (!fs.existsSync("ALLOCATED_MB")) {
  console.log("메모리 점검: OK, 할당된 메모리 없음.");
  process.exit(0);
}

const max = process.env.MAX_ALLOCATION_MB;
const allocated = parseInt(fs.readFileSync("ALLOCATED_MB", "utf-8"));

if (max >= allocated) {
  console.log(`메모리 점검: OK, 할당된 메모리: ${allocated}MB, 최대: ${max}MB`);
  process.exit(0);
} else {
  console.log(`메모리 점검: FAIL, 할당된 메모리: ${allocated}MB, 최대: ${max}MB`);
  process.exit(1);
}
