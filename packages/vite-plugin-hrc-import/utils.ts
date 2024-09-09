import {
  COMMENT_MULTILINE__REGEXP,
  COMMENT_SINGLE_LINE__REGEXP,
} from "./consts.js";

export const sanitizeComments = (code: string) =>
  code
    .replace(COMMENT_MULTILINE__REGEXP, "")
    .replace(COMMENT_SINGLE_LINE__REGEXP, "");
