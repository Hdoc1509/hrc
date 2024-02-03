export const autosizeTextarea = (
  textarea: EventTarget & HTMLTextAreaElement,
) => {
  textarea.style.height = "auto";
  textarea.style.height = `${textarea.scrollHeight + 2}px`;
  // NOTE: ↓ This for automatically taking into consideration the border
  // textarea.style.height = `${textarea.scrollHeight + Number(getComputedStyle(textarea).borderWidth.slice(0, -2))* 2}px`
};
