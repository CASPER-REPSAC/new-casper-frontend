export const ID_REGEX = /^[A-Za-z0-9]{3,19}$/;
export const PW_REGEX =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
export const EMAIL_REGEX =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
export const BIRTHDAY_REGEX = /^[0-9]{4}[0-9]{2}[0-9]{2}$/;
export const NAME_REGEX = /^[가-힣]+$/;
