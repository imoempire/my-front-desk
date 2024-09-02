import { FieldError } from "react-hook-form";

export interface AppInputProps {
  label?: string;
  value?: string;
  onChange: (value: string) => void;
  isError?: boolean;
  error?: FieldError | undefined;
  width?: number | any;
  keyType?:
    | "default"
    | "number-pad"
    | "numeric"
    | "email-address"
    | "phone-pad"
    | "url";
  capitalize?: "characters" | "none" | "sentences" | "words";
}

export interface AppPhoneInputProps {
  isError?: boolean;
  error?: string;
  onChange?: (value: any) => void;
  width?: number | any;
  selected: string;
  label: string;
}

export interface ButtonActionProps {
  title?: string;
  onPress?: () => void;
  solid?: boolean;
  background?: string;
  type?: "Continue" | "SignOut";
  load?: boolean;
}

export interface homecard {
  buttonColor?: string;
  title?: string;
  icon?: any;
  type?: "sign" | "out";
  route?: string;
}
