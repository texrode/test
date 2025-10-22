import { Status } from "@/shared/types/status";
import { InputHTMLAttributes, ReactNode, useRef } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";
import { InputMask, Replacement } from "@react-input/mask";

export interface ICustomInput extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  status?: Status;
  error?: boolean;
  mask?: string;
  replacement?: Replacement;
  children?: ReactNode;
}

export const CustomInput = ({
  type = "text",
  status = "idle",
  error = false,
  children,
  mask,
  replacement,
  ...rest
}: ICustomInput) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const classNames = cn(
    styles.container, 
    styles[status], 
    {
    [styles.error]: error,
    }
  );

  return (
    <div onClick={() => inputRef.current?.focus()} className={classNames}>
      <div className={styles.icon}>{children}</div>
      {mask ? (
        <InputMask {...rest} className={styles.input} mask={mask} replacement={replacement} />
      ) : (
        <input
          {...rest}
          ref={inputRef}
          className={styles.input}
          type={type}
          disabled={status === "loading"}
        />
      )}
    </div>
  );
};