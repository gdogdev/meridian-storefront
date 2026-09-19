import * as React from "react";

import "./Button.css";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => (
    <button ref={ref} className="button button--variant-accent" data-reweaver-variants="variant:accent,dark,outline,ghost;size:default,small" {...props}>
      {children ?? (
        <>
          <span className="button__label">Add to bag</span>
        </>
      )}
    </button>
  )
);
Button.displayName = "Button";

export { Button };
