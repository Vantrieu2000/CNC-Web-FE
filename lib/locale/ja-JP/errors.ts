// eslint-disable-next-line import/no-anonymous-default-export
export default {
  'error.': 'エラーが発生しました',
  'error.msg.': '不明なエラーが発生しました。',

  ///// ERROR TYPE
  'error.UNAUTHORIZED': '不正なエラー',
  'error.BAD_REQUEST': '不正リクエスト',
  'error.NOT_FOUND': '見つからなかった',
  'error.METHOD_NOT_ALLOWED': '許可されていません',

  ///// ERROR MSG
  'error.msg.USERNAME_OR_PASSWORD_IS_INCORRECT':
    'メールまたはパスワードが間違っています。',
  'error.msg.EMAIL_IS_INCORRECT': 'メールアドレスが正しくありません。',
  'error.msg.PASSWORD_IS_INCORRECT': 'パスワードが間違っています。',
  'error.msg.INTERNAL_SERVER_ERROR': 'サーバーでエラーが発生しました。',
  'error.msg.TIMEOUT': '時間切れです。',

  'error.msg.UNAUTHORIZED': `セッションが終了しました。
再度、ログインして下さい。`,
  'error.msg.NORIGHTS': `このアカウントには権限がありません。`,

  ///// ERROR MSG NOTFOUND
  'error.msg.NOT_FOUND_ADMIN': '登録されていないメールアドレスです。',
  'error.msg.NOT_FOUND_BULLETIN': 'この掲示が見つかりません。',
  'error.msg.NOT_FOUND_TOKEN': `このトークンは存在しないか、
すでに有効期限が切れています。`,
  'error.msg.NOT_FOUND_EVENT': 'このイベントが見つかりません。',
  'error.msg.NOT_FOUND_RECRUIT': 'この求人が見つかりません。',
  'error.msg.NOT_FOUND_USER': `このユーザーは存在しないか、
削除されています。`,
  'error.msg.NOT_FOUND_COMMENT': `このコメントは存在しないか、
削除されています。`,
  'error.msg.NOT_FOUND_KOUKOKU': 'この広告が見つかりません。',

  'error.msg.REQUIRE_USER_IS_ADMIN_OR_MANAGER':
    'このユーザーは管理者ではありません。',

  'error.msg.EMAIL_ALREADY_IN_USE': `このメールはすでに登録されています。`,

  ///// ERROR UPLOAD
  'error.UPLOAD': 'アップロードできません。',

  'error.msg.UPLOAD_WRONG_TYPE': `ファイル形式は正しくありません。
.pngまたは.jpgまたは.jpegファイルをアップロードしてください。`,
  'error.msg.UPLOAD_OVER_LIMIT': `画像は10MB未満である必要があります。`,
};
