import { cloneElement, forwardRef, ReactElement, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

interface Options extends IconProps {
  svg: ReactElement;
  displayName?: string;
}

export function createIcon({ svg, displayName }: Options) {
  const Component = forwardRef<SVGSVGElement, IconProps>((props, ref) =>
    cloneElement(svg, {
      ref,
      ...props,
    })
  );

  if (displayName) {
    Component.displayName = displayName;
  }

  return Component;
}
