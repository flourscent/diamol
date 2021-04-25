const fs = require("fs");

function allocate() {
  const toAllocate = 1024 * 1024 * process.env.LOOP_ALLOCATION_MB;

  /* 대량의 메모리를 할당. 여기서는 흉내만 낸다.
  var buffers = new Array();
  for (i = 0; i <= loop; i++) {
    buffers.push(Buffer.alloc(toAllocate));
  }
  */

  var allocatedMb = process.env.LOOP_ALLOCATION_MB * loop;
  console.log(`할당된 메모리: ${allocatedMb}MB`);
  fs.writeFileSync("ALLOCATED_MB", allocatedMb, "utf-8");

  loop++;
  setTimeout(allocate, process.env.LOOP_INTERVAL_MS);
}

var loop = 1;
allocate();
