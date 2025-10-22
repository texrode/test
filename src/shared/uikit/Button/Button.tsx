import { ReactNode, ButtonHTMLAttributes } from "react";
import styles from "./styles.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  variant?: "primary" | "secondary";
  children?: ReactNode;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
}

export const Button = ({
  fullWidth,
  variant = "primary",
  children,
  className,
  loading,
  disabled = false,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={`
        ${className}
        ${styles.button}
        ${variant === "secondary" && styles.secondary}
        ${fullWidth && styles.fullWidth}`}
      disabled={loading || disabled}
      {...rest}
    >
      {loading && <span className={styles.loader}></span>}
      <span className={`${loading ? styles.hidden : ""} ${styles.content}`}>
        {children}
      </span>
    </button>
  );
};
