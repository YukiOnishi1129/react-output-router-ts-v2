import { FC, ComponentProps } from "react";
import styles from "./style.module.css";

type CommonButtonProps = ComponentProps<"button"> & {
  label: string;
};

export const CommonButton: FC<CommonButtonProps> = ({
  type,
  label,
  onClick,
}) => (
  <button className={styles.button} type={type} onClick={onClick}>
    {label}
  </button>
);
