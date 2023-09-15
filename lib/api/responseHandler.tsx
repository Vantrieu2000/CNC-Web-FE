import { useIntl } from "@/function/useIntl";
import { ResponseError, SuccessNotification } from "@/type/api";
import { notification } from "antd";

const durationCalc = (length: number) => Math.min(5, Math.round(length / 6));
const placement = "top";

export function CustomHandleError(err: unknown | ResponseError) {
  //   const intl = useIntl();
  //   const error = err as ResponseError;

  //   const message = intl.message(`error.${(error?.error || "").replace(/\s/g, "_").toUpperCase()}`, {
  //     fallbackId: "error.",
  //   });
  //   const description = intl.message(
  //     `error.msg.${(typeof error?.message === "string" ? error?.message || "" : "").replace(/\s/g, "_").toUpperCase()}`,
  //     { fallbackId: "error.msg." }
  //   );

  const duration = durationCalc(15);

  notification.error({
    message: <span className="notify-error">Thất bại</span>,
    placement,
    duration,
  });
}

export function CustomHandleSuccess(payload: SuccessNotification) {
  // const intl = useIntl();

  // const message = intl.message(`success.${(payload.message || '').replace(/\s/g, '_').toUpperCase()}`);
  // const description = intl.message(`success.msg.${(payload.description || '').replace(/\s/g, '_').toUpperCase()}`);

  const duration = durationCalc(15);

  notification.success({
    message: <span className="notify-success">Thành công</span>,
    placement,
    duration,
  });
}
