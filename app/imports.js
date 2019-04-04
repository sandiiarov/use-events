export const imports = {
  'docs/intro.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-intro" */ 'docs/intro.mdx'),
  'docs/useActive.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-use-active" */ 'docs/useActive.mdx'),
  'docs/useClickOutside.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-use-click-outside" */ 'docs/useClickOutside.mdx'),
  'docs/useFocus.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-use-focus" */ 'docs/useFocus.mdx'),
  'docs/useHover.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-use-hover" */ 'docs/useHover.mdx'),
  'docs/useMousePosition.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-use-mouse-position" */ 'docs/useMousePosition.mdx'),
  'docs/useResizeObserver.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-use-resize-observer" */ 'docs/useResizeObserver.mdx'),
  'docs/useTouch.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-use-touch" */ 'docs/useTouch.mdx'),
  'docs/useWindowResize.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-use-window-resize" */ 'docs/useWindowResize.mdx'),
}
