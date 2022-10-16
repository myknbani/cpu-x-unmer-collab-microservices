declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $slidev: { nav: { currentPage: number, total: number }};
  }
}

export {}  // Important! See note.