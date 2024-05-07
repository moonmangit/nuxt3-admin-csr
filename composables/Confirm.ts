import type { ConfirmRecord } from "~/components/elements/ElConfirmList.vue";

type ConfirmContent = ConfirmRecord & {
  onConfirm: () => void;
};

const confirms = ref<ConfirmContent[]>([]);
const confirmList = computed(() => {
  return confirms.value;
});
function add(content: Omit<ConfirmContent, "id">) {
  const id = randomString();
  confirms.value.push({ ...content, id });
}
function remove(id: string) {
  // remove using splice
  const index = confirms.value.findIndex((c) => c.id === id);
  if (index !== -1) {
    confirms.value.splice(index, 1);
  }
}
function confirm(id: string) {
  const confirm = confirms.value.find((c) => c.id === id);
  if (confirm) {
    confirm.onConfirm();
    remove(id);
  }
}
// Shorthand
function ask(message: string, callback: () => void) {
  add({
    title: "ยืนยันการดำเนินการ",
    message,
    onConfirm() {
      callback();
    },
  });
}

export const useConfirm = () => {
  return {
    confirmList,
    add,
    remove,
    confirm,
    ask,
  };
};
