import type { Toast } from "~/components/elements/ElToast.vue";
import type { ToastList } from "~/components/elements/ElToastList.vue";

const toasts = ref<ToastList>([]);
const toastList = computed(() => toasts.value);
function add(content: Omit<Toast, "id">) {
  const id = randomString();
  toasts.value.push({
    id,
    ...content,
  });
}
function remove(content: Toast) {
  // remove using splice
  const index = toasts.value.findIndex((toast) => toast.id === content.id);
  if (index !== -1) {
    toasts.value.splice(index, 1);
  }
}

// Shorten the function name
function addError(message: string) {
  add({
    title: "เกิดข้อผิดพลาด",
    type: "error",
    timeoutMs: 5000,
    message,
  });
}
function addSuccess(message: string) {
  add({
    title: "สำเร็จ",
    type: "success",
    timeoutMs: 5000,
    message,
  });
}
function addWarning(message: string) {
  add({
    title: "เตือน",
    type: "warning",
    timeoutMs: 5000,
    message,
  });
}
function addInfo(message: string) {
  add({
    title: "ข้อมูล",
    type: "info",
    timeoutMs: 5000,
    message,
  });
}

export const useToast = () => {
  return {
    toastList,
    addError,
    addSuccess,
    addWarning,
    addInfo,
    add,
    remove,
  };
};
