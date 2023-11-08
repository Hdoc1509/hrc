export const autosizeTextarea = (
  textarea: EventTarget & HTMLTextAreaElement,
) => {
  textarea.style.height = "auto";
  textarea.style.height = textarea.scrollHeight + "px";
};
