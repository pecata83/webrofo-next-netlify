import * as types from "@constants/action-types";

export function navigationOpen() {
  return { type: types.NAVIGATION_OPEN };
}

export function navigationClose() {
  return { type: types.NAVIGATION_CLOSE };
}
