import { FormInstance, Upload, message } from "antd";
import { createIntl, createIntlCache } from "react-intl";

const locale = navigator.language;
const intlCache = createIntlCache();



export const flattenMessages = (nestedMessages, prefix = '') => {
  if (nestedMessages === null) {
      return {};
  }
  return Object.keys(nestedMessages).reduce((messages, key) => {
      const value = nestedMessages[key];
      const prefixedKey = prefix ? `${prefix}.${key}` : key;

      if (typeof value === 'string') {
          Object.assign(messages, { [prefixedKey]: value });
      } else {
          Object.assign(messages, flattenMessages(value, prefixedKey));
      }

      return messages;
  }, {});
};

export const intlInstance = createIntl(
  {
      locale: locale,
      messages: flattenMessages("messages")
  },
  intlCache
);

export const beforeUpload = (
  file,
  fileList,
  form?: FormInstance,
  fileName?: string,
  defaultAvatar: string = ''
) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

  if (!isJpgOrPng) {
      message.error(intlInstance.formatMessage({ id: 'error_image_file' }));
      fileName && form?.resetFields([fileName]);
      return false;
  }

  // const isLt4M = file.size / 2048 / 2048 < 2;
  const isLt4M = file?.size < 1024 * 1024 * 10;

  if (!isLt4M) {
      message.error({
          content: intlInstance.formatMessage(
              { id: 'error_image_size' },
              { number: 10 }
          )
          // style: { zIndex: 1500 },
          // duration: 10000000
      });
      form?.setFieldsValue({
          [fileName as string]: form.getFieldValue(fileName as string)
      });
      return false;
  }
  return (isJpgOrPng && isLt4M) || Upload.LIST_IGNORE;
  // }
};

