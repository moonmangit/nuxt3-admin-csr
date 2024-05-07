type BlockLoadingContent = {
  active: boolean;
  message: string | null;
};

const content = ref<BlockLoadingContent>({
  active: false,
  message: null,
});

const $content = computed({
  get: () => content.value,
  set: (value: BlockLoadingContent) => {
    content.value = value;
  },
});

function begin(message?: string) {
  $content.value = {
    active: true,
    message: message || "Loading...",
  };
}
function post(message: string) {
  $content.value = {
    active: true,
    message,
  };
}
function end() {
  $content.value = {
    active: false,
    message: null,
  };
}

export const useBlockLoading = () => {
  return {
    $content,
    begin,
    post,
    end,
  };
};
