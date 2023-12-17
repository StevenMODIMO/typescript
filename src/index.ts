import os from "os";

const PLATFORM = os.platform();

switch (PLATFORM) {
  case "win32":
    console.log("Windows");
    break;
  case "linux":
    console.log("Linux");
    break;
  case "android":
    console.log("Android");
    break;
  case "darwin":
    console.log("Mac OS");
    break;
  default:
    console.log("OS Not found");
}


