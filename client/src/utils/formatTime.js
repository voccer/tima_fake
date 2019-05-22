export const formatDate = date => {
  const date_ = new Date(date);
  let day = date_.getDate() > 9 ? date_.getDate() : `0${date_.getDate()}`;
  let month =
    date_.getMonth() > 8 ? date_.getMonth() + 1 : `0${date_.getMonth() + 1}`;
  let year = date_.getFullYear();
  return `${day}/${month}/${year}`;
};
export const formatHours = date => {
  const date_ = new Date(date);
  let hour = date_.getHours() > 9 ? date_.getHours() : `0${date_.getHours()}`;
  let minute =
    date_.getMinutes() > 9 ? date_.getMinutes() : `0${date_.getMinutes()}`;
  return `${hour}:${minute}`;
};
